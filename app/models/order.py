from .db import db, environment, SCHEMA, add_prefix_for_prod

class Order(db.Model):
    __tablename__ = 'orders'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)

    user = db.relationship("User", back_populates="orders")
    product = db.relationship("Product", back_populates="order")

    def to_dict(self):
        return {
            'id': self.id,
            'product': self.product.to_dict(),
            'userId': self.user_id,
        }