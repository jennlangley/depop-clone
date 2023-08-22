from .db import db, environment, SCHEMA, add_prefix_for_prod

class ProductCategory(db.Model):
    __tablename__ = 'products_categories'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("categories.id")), nullable=False)

    categories = db.relationship("Category", back_populates="category")
    products = db.relationship("Product", back_populates="category")

    def to_dict(self):
        return {
            'id': self.id,
            'productId': self.product_id,
            'categoryId': self.category_id,
        }
