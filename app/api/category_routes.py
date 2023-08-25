from flask import Blueprint
from app.models import db, Category
from app.api.auth_routes import validation_errors_to_error_messages

category_routes = Blueprint('categories', __name__)

@category_routes.route('')
def get_categories():
    categories = Category.query.all()
    return {'categories': [category.to_dict() for category in categories]}