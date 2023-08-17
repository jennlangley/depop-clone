from flask import Blueprint, jsonify, session
from flask_login import login_required, current_user
from app.models import Product
from app.api.auth_routes import validation_errors_to_error_messages

product_routes = Blueprint('products', __name__)


@product_routes.route('')
def get_products():
    products = Product.query.all()
    return {'products': product.to_dict() for product in products}

