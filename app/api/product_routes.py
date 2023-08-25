from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import db, Product, Image, Category, ProductCategory
from app.forms import ProductForm
from app.api.auth_routes import validation_errors_to_error_messages

product_routes = Blueprint('products', __name__)


# Returns all products
@product_routes.route('')
def get_products():
    products = Product.query.all()
    # for product in products:
    #     preview_image = Image.query.filter_by(product_id = product.id).first()
    #     if preview_image:
    #         product.image_url = preview_image.image_url

    #     category = Category.query.filter_by(id = product.category.categories.category_id).first()
    #     print("CATEGORY", (category.to_dict())['name'])
    #     print("SUBCATEGORY", (product.category.categories.to_dict())['name'])


    #     product.to_dict()['category'] = (category.to_dict())['name']
    #     product.to_dict()['subcategory'] = (product.category.categories.to_dict())['name']
        
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
@login_required
def new_product():
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        product = Product(
            user_id=current_user.id,
            name=form.data['name'], 
            desc=form.data['desc'], 
            condition=form.data['condition'], 
            size=form.data['size'],
            price=form.data['price'],
        )
        db.session.add(product)
        db.session.commit()
        category = Category.query.filter_by(category_id=form.data['category'], 
                                            subcategory_id=form.data['subcategory']).first()

        product_category = ProductCategory(
            product_id=product.id, category_id=category.id
        )

        db.session.add(product_category)
        db.session.commit()
        return product.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Edit an existing product
@product_routes.route('/<int:productId>/edit', methods=['PUT'])
@login_required
def edit_product(productId):
    product = Product.query.get(productId)
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        product.name = form.data['name']
        product.desc = form.data['desc']
        product.condition = form.data['condition']
        product.size = form.data['size']
        product.price = form.data['price']

        category = Category.query.filter_by(category_id=form.data['category'], subcategory_id=form.data['subcategory']).first()

        product_category = ProductCategory.query.filter_by(product_id=product.id)
        product_category.category_id = category.id

        db.session.commit()
        return product.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    

# Delete an existing product
@product_routes.route('/<int:productId>/delete', methods=['DELETE'])
@login_required
def delete_product(productId):
    product = Product.query.get(productId)
    if product:
        db.session.delete(product)
        db.session.commit()
        return {'message': 'Product successfully removed.'}
    return {'errors': 'Product not found!'}