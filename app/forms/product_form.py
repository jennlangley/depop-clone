from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, SelectField
from wtforms.validators import DataRequired, ValidationError
from app.models import Product

class ProductForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    desc = StringField("description", validators=[DataRequired()])
    condition = SelectField("condition", validators=[DataRequired()], choices=["Brand new", "Like new", "Used - Excellent", "Used - Good", "Used - Fair"])
    size = SelectField("size", validators=[DataRequired()], choices=["XS", "S", "M", "L", "XL"])
    price = DecimalField("price", places=2, validators=[DataRequired()])
    image = StringField("image", validators=[DataRequired()])