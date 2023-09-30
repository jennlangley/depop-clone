from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Product

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<username>')
@login_required
def user(username):
    """
    Query for a user by username and returns that user in a dictionary
    """
    user = User.query.filter_by(username=username).first()
    return user.to_dict()


@user_routes.route('/<int:userId>/products')
def get_user_products(userId):
    products = Product.query.filter_by(user_id=userId).all()
    return {'products': [product.to_dict() for product in products]}