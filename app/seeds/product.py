from app.models import db, Product, environment, SCHEMA
from sqlalchemy.sql import text


def seed_products():
    product_1 = Product(
        name="Basic Blue Jeans", user_id=1,
        desc="High quality blue jeans, perfect for all seasons!", condition="Used - Good", 
        size="S", price=15.00, sold=False,
    )
    product_2 = Product(
        name="Knitted Sweater", user_id=2,
        desc="Vintage sweater, great condition very comfortable and warm material", 
        condition="Used - Excellent", 
        size="L", price=32.00, sold=True,
    )
    product_3 = Product(
        name="Everyday Blue Jeans", user_id=2,
        desc="Vintage jeans, there were my dad's from the 80s-90s, one of a kind!", condition="Used - Excellent", 
        size="M", price=25.00, sold=True,
    )
    product_4 = Product(
        name="Blue Dress", user_id=1,
        desc="Formal silky womens dress, worn once, great for special occasions", 
        condition="Like new", 
        size="S", price=30.00, sold=False,
    )
    product_5 = Product(
        name="Men's hat", user_id=3,
        desc="Black SnapBack Hat", condition="Used - Fair", 
        size="L", price=8.00, sold=False,
    )
    product_6 = Product(
        name="Vintage Watch", user_id=1,
        desc="Special edition vintage watch, one of a kind", condition="Used - Good", 
        size="M", price=60.00, sold=True,
    )
    product_7 = Product(
        name="White sneakers", user_id=1,
        desc="crisp and clean white sneakers, worn once, great price buy now!", condition="Used - Excellent", 
        size="L", price=14.99, sold=True,
    )
    product_8 = Product(
        name="Classic Earrings", user_id=2,
        desc="your standard ear rings, found in packaging at estate sale, one of a kind piece", condition="Brand new", 
        size="S", price=30.00, sold=True,
    )
    product_9 = Product(
        name="Hawaiian Shirt", user_id=3,
        desc="Floral, fresh and relatively unworn shirt, great for vacationing", condition="Used - Fair", 
        size="L", price=5.00, sold=False,
    )
    product_10 = Product(
        name="White Shirt", user_id=3,
        desc="Staple piece for your closet, cotton fitted tee will be perfect addition to your wardrobe.", 
        condition="Used - Excellent", 
        size="M", price=10.00, sold=False,
    )
    product_11 = Product(
        name="Dark Green Hat", user_id=3,
        desc="Men's hat, calming dark green color, I wore it once on vacation but it is freshly washed so it's vintage!", 
        condition="Used - Fair", 
        size="M", price=6.00, sold=False,
    )
    product_12 = Product(
        name="Casual Shoes", user_id=4,
        desc="Relatively new shoes to wear to casual functions, pre-worn in", 
        condition="Used - Excellent", 
        size="L", price=15.00, sold=False,
    )
    product_13 = Product(
        name="Heart Necklace", user_id=4,
        desc="Pretty heart necklace to give as a lovely gift or wear everyday! Also great for special occasions", 
        condition="Used - Good", 
        size="S", price=10.00, sold=False,
    )
    product_14 = Product(
        name="Technical Watch", user_id=4,
        desc="White watch with a techy vibe to feel awesome checking the time.", condition="Brand New", 
        size="M", price=20.00, sold=False,
    )
    product_15 = Product(
        name="Black Dress", user_id=5,
        desc="Elegant black dress for going out, worn only once! You will feel and look amazing in this dress", 
        condition="Like new", 
        size="S", price=50.00, sold=False,
    )
    product_16 = Product(
        name="Pink Heels", user_id=5,
        desc="Stylish pink heels to go out in. My favorite clubbing shoes", condition="Used - Fair", 
        size="S", price=12.00, sold=False,
    )
    product_17 = Product(
        name="Floral Skirt", user_id=5,
        desc="Long floral skirt to wear when it's super nice out, I love this skirt I have to share it", 
        condition="Used - Good", 
        size="S", price=15.00, sold=False,
    )
    product_18 = Product(
        name="Red Blouse", user_id=5,
        desc="Deep red women's blouse, I bought it in the wrong size and can't return it. A must buy!", 
        condition="Brand new", 
        size="M", price=25.00, sold=False,
    )
    product_19 = Product(
        name="Khaki Pants", user_id=5,
        desc="Fitted khaki pants.", condition="Used - Excellent", 
        size="L", price=10.00, sold=False,
    )
    product_20 = Product(
        name="Black Slacks", user_id=5,
        desc="Black slacks for the office, school, or just dressing up.", condition="Used - Good", 
        size="L", price=15.00, sold=False,
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
def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))
        
    db.session.commit()