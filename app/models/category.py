from .db import db, environment, SCHEMA, add_prefix_for_prod

class Category(db.Model):
    __tablename__ = 'categories'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    category_id = db.Column(db.Integer)
    subcategory_id = db.Column(db.Integer)
    name = db.Column(db.String(40), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'categoryId': self.category_id,
            'subcategoryId': self.subcategory_id,
            'name': self.name,
        }
