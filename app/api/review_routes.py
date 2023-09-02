from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import db, Review, Order
from app.forms import ReviewForm
from app.api.auth_routes import validation_errors_to_error_messages

review_routes = Blueprint('reviews', __name__)

# Returns all reviews for a user on their product listing
@review_routes.route('/user/<int:userId>')
def get_reviews(userId):
    reviews = Review.query.all()
    filter_reviews = []
    for review in reviews:
        if review.product.user_id == userId:
            filter_reviews.append(review)
    return {'reviews': [review.to_dict() for review in filter_reviews]}


# Returns all reviews made by the logged in user on their orders page
@review_routes.route('/<int:userId>')
@login_required
def get_user_reviews(userId):
    reviews = Review.query.filter_by(user_id=userId).all()
    return {'reviews': [review.to_dict() for review in reviews]}


# Posts a new review on an order 
@review_routes.route('/<int:orderId>', methods=["POST"])
@login_required
def create_review(orderId):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Query for the order by order id
        order = Order.query.get(orderId)
        review = Review(user_id=current_user.id, product_id=order.product_id,
                        stars=form.data['stars'], review=form.data['review'])
        db.session.add(review)
        db.session.commit()
        # insert the reviewId into the order
        order.review_id = review.id
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# Delete review by review id
@review_routes.route('/<int:reviewId>', methods=["DELETE"])
@login_required
def delete_review(reviewId):
    review = Review.query.get(reviewId)
    if review:
        db.session.delete(review)
        db.session.commit()
        return {'message': 'Review successfully deleted'}
    return {'errors': 'Product not found'}