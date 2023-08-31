from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Follow(db.Model):
    __tablename__ = 'follows'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    follower_id = db.Column(db.Integer)
    followed_id = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.now())


    def to_dict(self):
        return {
            'id': self.id,
            'followerId': self.follower_id,
            'followedId': self.followed_id,
            'createdAt': self.created_at.strftime("%m/%d/%Y")
        }


user_follows = db.Table(
    "user_follows",
    db.Column("followerId", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"))),
    db.Column("followedId", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
)
if environment == "production":
    user_follows.schema = SCHEMA