from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, SelectField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Product

class ReviewForm(FlaskForm):
    stars = IntegerField("stars", validators=[DataRequired()])
    review = StringField("review", validators=[DataRequired()])