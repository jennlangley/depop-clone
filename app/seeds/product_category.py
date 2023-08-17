from app.models import db, ProductCategory, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_products_categories():
    product_1 = ProductCategory(
        product_id=1, category_id=7
    )
    product_2 = ProductCategory(
        product_id=2, category_id=4
    )
    product_3 = ProductCategory(
        product_id=3, category_id=6
    )
    product_4 = ProductCategory(
        product_id=4, category_id=8
    )
    product_5 = ProductCategory(
        product_id=5, category_id=11
    )

    db.session.add(product_1)
    db.session.add(product_2)
    db.session.add(product_3)
    db.session.add(product_4)
    db.session.add(product_5)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_products_categories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products_categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products_categories"))
        
    db.session.commit()