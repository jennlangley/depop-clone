from flask import Blueprint
from app.models import db, Category, Product, ProductCategory
from app.api.auth_routes import validation_errors_to_error_messages

category_routes = Blueprint('category', __name__)

@category_routes.route('')
def get_categories():
    categories = Category.query.all()
    return {'categories': [category.to_dict() for category in categories]}


# Returns all products from a category 
@category_routes.route('/<int:categoryId>')
def get_category_products(categoryId):
    products = Product.query.join(ProductCategory).join(Category).filter(Category.category_id == categoryId, Product.sold == False).all()

    return {'products': [product.to_dict() for product in products]}

@category_routes.route('/<int:categoryId>/<int:subcategoryId>')
def get_subcategory_products(categoryId, subcategoryId):
    products = Product.query.join(ProductCategory).join(Category).filter(Category.subcategory_id == subcategoryId, Category.category_id == categoryId, Product.sold == False).all()

    return {'products': [product.to_dict() for product in products]}
