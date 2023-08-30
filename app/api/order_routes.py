from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import db, Order
from app.api.auth_routes import validation_errors_to_error_messages

order_routes = Blueprint('orders', __name__)

#Returns orders for a user
@order_routes.route('/<int:userId>')
def get_orders(userId):
    orders = Order.query.filter_by(user_id=userId)

    return {'orders': [order.to_dict() for order in orders]}
