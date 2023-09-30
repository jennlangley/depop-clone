from flask import Blueprint, jsonify, request, session
from app.models import db, Product, Category, ProductCategory
from app.api.auth_routes import validation_errors_to_error_messages

search_routes = Blueprint('search', __name__)

# Returns the first 5 results from search


# Returns all searched products to display
@search_routes.route('')
def search_products():
    query = request.args['q']
    products = Product.query.filter(Product.name.ilike("%"+query+"%")).filter_by(sold=False).limit(5)
    return {'products': [product.to_dict() for product in products]}