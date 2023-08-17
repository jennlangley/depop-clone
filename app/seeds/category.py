from app.models import db, Category, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_categories():
    
    # Categories
    mens = Category(category_id=1, name="Men's")
    womens = Category(category_id=2, name="Women's")
    accessories = Category(category_id=3, name="Accessories")
    
    # Subcategories
    mens_tops = Category(category_id=1, subcategory_id=1, name="Tops")
    womens_tops = Category(category_id=2, subcategory_id=1, name="Tops")
    mens_bottoms = Category(category_id=1, subcategory_id=2, name="Bottoms")
    womens_bottoms = Category(category_id=2, subcategory_id=2, name="Bottoms")
    
    dresses = Category(category_id=2, subcategory_id=3, name="Dresses")
    
    mens_shoes = Category(category_id=1, subcategory_id=4, name="Shoes")
    womens_shoes = Category(category_id=2, subcategory_id=4, name="Shoes")
    
    hats = Category(category_id=3, subcategory_id=1, name="Hats")
    jewellery = Category(category_id=3, subcategory_id=2, name="Jewellery")
    watches = Category(category_id=3, subcategory_id=3, name="Watches")
    
    db.session.add(mens)
    db.session.add(womens)
    db.session.add(accessories)
    db.session.add(mens_tops)
    db.session.add(womens_tops)
    db.session.add(mens_bottoms)
    db.session.add(womens_bottoms)
    db.session.add(dresses)
    db.session.add(mens_shoes)
    db.session.add(womens_shoes)
    db.session.add(hats)
    db.session.add(jewellery)
    db.session.add(watches)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_categories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM categories"))
        
    db.session.commit()