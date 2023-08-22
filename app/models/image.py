from .db import db, environment, SCHEMA, add_prefix_for_prod

class Image(db.Model):
    __tablename__ = 'images'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False)
    image_url = db.Column(db.String(500), nullable=False)

    product = db.relationship("Product", back_populates="images")

    def to_dict(self):
        return {
            'id': self.id,
            'productId': self.product_id,
            'imageUrl': self.image_url,
        }
