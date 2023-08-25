from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import db, Review, Product, Image, Category, ProductCategory
from app.forms import ReviewForm
from app.api.auth_routes import validation_errors_to_error_messages

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<int:userId>')
def get_reviews(userId):
    reviews = Review.query.filter_by(user_id=userId).all()

    return {'reviews': [review.to_dict() for review in reviews]}