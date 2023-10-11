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


@user_routes.route('/<int:userId>')
def user(userId):
    """
    Query for a user by username and returns that user in a dictionary
    """
    user = User.query.get(userId)
    if user:
        return user.to_dict()
    else:
        return {'errors': "User not found"}
    

# Gets the products owned by a user
@user_routes.route('/<int:userId>/products')
def get_user_products(userId):
    products = Product.query.filter_by(user_id=userId).all()
    return {'products': [product.to_dict() for product in products]}


# Gets the products owned by a user but limited for related products
@user_routes.route('/<int:userId>/<int:productId>')
def get_few_products(userId, productId):
    products = Product.query.filter(Product.user_id == userId, Product.sold == False).limit(4)
    filtered = [product for product in products if product.id != productId]
    return {'products': [product.to_dict() for product in filtered]}