from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Product(db.Model):
    __tablename__ = 'products'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    name = db.Column(db.String(40), nullable=False)
    desc = db.Column(db.String(255), nullable=False)
    condition = db.Column(db.String(40), nullable=False)
    size = db.Column(db.String(40), nullable=False)
    price = db.Column(db.Numeric(precision=2), nullable=False)
    sold = db.Column(db.Boolean, default=False, nullable=False)
    image_url = db.Column(db.String, default=None)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    user = db.relationship("User", back_populates="products")
    review = db.relationship("Review", uselist=False, back_populates="product")
    category = db.relationship("ProductCategory", uselist=False, back_populates="products", cascade="all, delete")
    images = db.relationship("Image", back_populates="product", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'name': self.name,
            'desc': self.desc,
            'condition': self.condition,
            'size': self.size,
            'price': round(self.price, 2),
            'sold': self.sold,
            # 'category': self.category,
            # 'subcategory': self.category.categories.to_dict()['name'],
            'imageUrl': self.image_url,
            'images': [image.to_dict() for image in self.images],
            'createdAt': self.created_at,
            'updatedAt': self.updated_at,
        }
