from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Product(db.Model):
    __tablename__ = 'products'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    desc = db.Column(db.String(255), nullable=False)
    condition = db.Column(db.String(40), nullable=False)
    size = db.Column(db.String(40), nullable=False)
    price = db.Column(db.Numeric(precision=2), nullable=False)
    sold = db.Column(db.Boolean, default=False, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'desc': self.desc,
            'condition': self.condition,
            'size': self.size,
            'price': round(self.price, 2),
            'sold': self.sold,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at,
        }
