from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Follow
from app.api.auth_routes import validation_errors_to_error_messages
from datetime import datetime
from sqlalchemy import or_

follow_routes = Blueprint('follows', __name__)


@follow_routes.route('/<int:userId>')
def get_follows(userId):
    follows = Follow.query.filter(or_(Follow.follower_id == userId, Follow.followed_id == userId)).all()
    return [follow.to_dict() for follow in follows]


@follow_routes.route('/<int:followedId>', methods=['POST'])
@login_required
def follow_user(followedId):
    follower_id = current_user.id
    follow = Follow(follower_id=follower_id, followed_id=followedId)
    db.session.add(follow)
    db.session.commit()
    return follow.to_dict()


@follow_routes.route('/<int:followId>', methods=['DELETE'])
@login_required
def unfollow_user(followId):
    follow = Follow.query.get(followId)
    db.session.delete(follow)
    db.session.commit()
    return {'message': 'Successfully unfollowed.'}
