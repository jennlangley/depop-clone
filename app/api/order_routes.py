from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import db, Order, Product
from app.api.auth_routes import validation_errors_to_error_messages

order_routes = Blueprint('orders', __name__)

# Returns orders for a user
@order_routes.route('/<int:userId>')
@login_required
def get_orders(userId):
    orders = Order.query.filter(Order.user_id == userId).all()
    return {'orders': [order.to_dict() for order in orders]}


# Creates a new order for each item on checkout
@order_routes.route('', methods=['POST'])
@login_required
def create_order():
    data =  request.get_json()
    order = Order(product_id=data,
                  user_id=current_user.id)
    product = Product.query.get(data)
    product.sold = True
    db.session.add(order)
    db.session.commit()
    return order.to_dict()