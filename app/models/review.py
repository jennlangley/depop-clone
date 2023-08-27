from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    review = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())


    user = db.relationship("User", back_populates="reviews")
    product = db.relationship("Product", back_populates="review")

    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user.to_dict(),
            'productId': self.product_id,
            'stars': self.stars,
            'review': self.review,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at,
        }
