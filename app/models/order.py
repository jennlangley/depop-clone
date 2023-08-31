from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Order(db.Model):
    __tablename__ = 'orders'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False)
    review_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("reviews.id")))
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    user = db.relationship("User", back_populates="orders")
    product = db.relationship("Product", back_populates="order")
    review = db.relationship("Review", back_populates="order")

    def to_dict(self):
        return {
            'id': self.id,
            'product': self.product.to_dict(),
            'userId': self.user_id,
            'createdAt': self.created_at.strftime("%m/%d/%Y %H:%M:%S"),
            'reviewId': self.review_id,
        }