from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import db, Review, Product, Image, Category, ProductCategory
from app.forms import ReviewForm
from app.api.auth_routes import validation_errors_to_error_messages

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/user/<int:userId>')
def get_reviews(userId):
    reviews = Review.query.all()
    filter_reviews = []
    for review in reviews:
        if review.product.user_id == userId:
            filter_reviews.append(review)

    return {'reviews': [review.to_dict() for review in filter_reviews]}


@review_routes.route('/<int:userId>')
def get_user_reviews(userId):
    reviews = Review.query.filter_by(user_id=userId).all()
    return {'reviews': [review.to_dict() for review in reviews]}