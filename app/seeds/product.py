from app.models import db, Product, environment, SCHEMA
from sqlalchemy.sql import text


def seed_products():
    product_1 = Product(
        name="Women's Blue Jeans", user_id=1,
        desc="ripped high waisted blue jeans", condition="Used - Good", 
        size="S", price=10.00, sold=False,
    )
    product_2 = Product(
        name="Navy and Red Cardigan", user_id=2,
        desc="Vintage bench cardigan, great condition very comfortable and warm material", 
        condition="Used - Excellent", 
        size="L", price=30.00, sold=False,
    )
    product_3 = Product(
        name="Men's Blue Jeans", user_id=2,
        desc="Vintage jeans from the 80s-90s", condition="Used - Excellent", 
        size="M", price=25.00, sold=False,
    )
    product_4 = Product(
        name="Women's Khaki Dress", user_id=1,
        desc="formal silky ruched mini/midi dress olive color bodycon pencil heart line", 
        condition="Like new", 
        size="S", price=15.00, sold=False,
    )
    product_5 = Product(
        name="Men's hat", user_id=3,
        desc="Black California Republic SnapBack", condition="Used - Fair", 
        size="L", price=8.00, sold=False,
    )
    # product_6 = Product(
    #     name=, 
    #     desc=, condition="Used - Good", 
    #     size="", price=, sold=False,
    # )
    # product_7 = Product(
    #     name=, 
    #     desc=, condition="Used - Excellent", 
    #     size="", price=, sold=False,
    # )
    # product_8 = Product(
    #     name=, 
    #     desc=, condition="Brand new", 
    #     size="", price=, sold=False,
    # )
    # product_9 = Product(
    #     name=, 
    #     desc=, condition="Used - Fair", 
    #     size="", price=, sold=False,
    # )
    # product_10 = Product(
    #     name=, 
    #     desc=, condition="Like new", 
    #     size="", price=, sold=False,
    # )

    db.session.add(product_1)
    db.session.add(product_2)
    db.session.add(product_3)
    db.session.add(product_4)
    db.session.add(product_5)
    # db.session.add(product_6)
    # db.session.add(product_7)
    # db.session.add(product_8)
    # db.session.add(product_9)
    # db.session.add(product_10)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))
        
    db.session.commit()