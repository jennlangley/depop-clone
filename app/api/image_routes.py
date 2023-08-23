from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import db, Product, Image
from app.forms import ProductForm
from app.api.auth_routes import validation_errors_to_error_messages

image_routes = Blueprint('images', __name__)


# Returns images all images for a product
@image_routes.route('/<int:productId>')
def get_images(productId):
    images = Image.query.filter_by(product_id=productId).all()
    return {'images': [image.to_dict() for image in images]}


# Creates a new image by product id
@image_routes.route('/<int:productId>', methods=["POST"])
@login_required
def new_image(productId): 
    product = Product.query.get(productId)
    image = Image(product_id=productId, image_url=product.image_url)
    db.session.add(image)
    db.session.commit()

    return {'image': image.to_dict()}

# Edit an image by image id
@image_routes.route('/<int:productId>', methods=["PUT"])
@login_required
def edit_image(productId):
    # image = 
    pass

