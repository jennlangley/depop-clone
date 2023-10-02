from app.models import db, ProductCategory, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_products_categories():
    product_1 = ProductCategory(
        product_id=1, category_id=7
    )
    product_2 = ProductCategory(
        product_id=2, category_id=5
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
    product_6 = ProductCategory(
        product_id=6, category_id=13
    )
    product_7 = ProductCategory(
        product_id=7, category_id=9
    )
    product_8 = ProductCategory(
        product_id=8, category_id=12
    )
    product_9 = ProductCategory(
        product_id=9, category_id=4
    )
    product_10 = ProductCategory(
        product_id=10, category_id=4
    )
    product_11 = ProductCategory(
        product_id=11, category_id=11
    )
    product_12 = ProductCategory(
        product_id=12, category_id=9
    )
    product_13 = ProductCategory(
        product_id=13, category_id=12
    )
    product_14 = ProductCategory(
        product_id=14, category_id=13
    )
    product_15 = ProductCategory(
        product_id=15, category_id=8
    )
    product_16 = ProductCategory(
        product_id=16, category_id=10
    )
    product_17 = ProductCategory(
        product_id=17, category_id=7
    )
    product_18 = ProductCategory(
        product_id=18, category_id=5
    )
    product_19 = ProductCategory(
        product_id=19, category_id=6
    )
    product_20 = ProductCategory(
        product_id=20, category_id=7
    )


    db.session.add(product_1)
    db.session.add(product_2)
    db.session.add(product_3)
    db.session.add(product_4)
    db.session.add(product_5)
    db.session.add(product_6)
    db.session.add(product_7)
    db.session.add(product_8)
    db.session.add(product_9)
    db.session.add(product_10)
    db.session.add(product_11)
    db.session.add(product_12)
    db.session.add(product_13)
    db.session.add(product_14)
    db.session.add(product_15)
    db.session.add(product_16)
    db.session.add(product_17)
    db.session.add(product_18)
    db.session.add(product_19)
    db.session.add(product_20)

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