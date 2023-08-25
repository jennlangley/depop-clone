from app.models import db, Category, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_categories():
    
    # Categories
    mens = Category(category_id=1, name="Men's") #1
    womens = Category(category_id=2, name="Women's") #2
    accessories = Category(category_id=3, name="Accessories") #3
    
    # Subcategories
    mens_tops = Category(category_id=1, subcategory_id=1, name="Tops") #4
    womens_tops = Category(category_id=2, subcategory_id=1, name="Tops") #5
    mens_bottoms = Category(category_id=1, subcategory_id=2, name="Bottoms") #6
    womens_bottoms = Category(category_id=2, subcategory_id=2, name="Bottoms") #7
    
    dresses = Category(category_id=2, subcategory_id=3, name="Dresses") #8
    
    mens_shoes = Category(category_id=1, subcategory_id=4, name="Shoes") #9
    womens_shoes = Category(category_id=2, subcategory_id=4, name="Shoes") #10
    
    hats = Category(category_id=3, subcategory_id=1, name="Hats") #11
    jewellery = Category(category_id=3, subcategory_id=2, name="Jewellery") #12
    watches = Category(category_id=3, subcategory_id=3, name="Watches") #13
    
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