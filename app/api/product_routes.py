from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import db, Product
from app.forms import ProductForm
from app.api.auth_routes import validation_errors_to_error_messages

product_routes = Blueprint('products', __name__)

# Returns all products
@product_routes.route('')
def get_products():
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}

# Get product by id
@product_routes.route('/<int:productId>')
def get_product(productId):
    product = Product.query.get(productId)
    if product: 
        return product.to_dict()
    return {'errors': 'Product not found'}
    


# Creates a new product
@product_routes.route('/new', methods=['POST'])
def new_product():
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        product = Product(
            name=form.data['name'], 
            desc=form.data['desc'], 
            condition=form.data['condition'], 
            size=form.data['size'],
            price=form.data["price"]
        )
        db.session.add(product)
        db.session.commit()
        return product.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
