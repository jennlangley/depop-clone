from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Image

class ImageForm(FlaskForm):
    image = StringField('image')