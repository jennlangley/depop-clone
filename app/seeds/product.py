from app.models import db, Product, environment, SCHEMA
from sqlalchemy.sql import text


def seed_products():
    product_1 = Product(
        name="Vintage Blue Jeans", user_id=1,
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
        name="Skinny Jeans", user_id=2,
        desc="Vintage jeans, there were my dad's from the 80s-90s, one of a kind!", condition="Used - Excellent", 
        size="M", price=25.00, sold=True,
    )
    product_4 = Product(
        name="Polka Dot Dress", user_id=1,
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
        name="Graphic T-Shirt", user_id=3,
        desc="Large white t-shirt with text on it. Super cool, slightly worn but good condition", condition="Used - Fair", 
        size="L", price=10.00, sold=False,
    )
    product_10 = Product(
        name="Grey Shirt", user_id=3,
        desc="Staple piece for your closet, cotton fitted tee will be perfect addition to your wardrobe.", 
        condition="Used - Excellent", 
        size="M", price=10.00, sold=False,
    )
    product_11 = Product(
        name="Baseball Hats", user_id=3,
        desc="Two wonderful hats from my collection, super unique pieces, pick them up here", 
        condition="Used - Fair", 
        size="M", price=10.00, sold=False,
    )
    product_12 = Product(
        name="Casual Shoes", user_id=4,
        desc="Relatively new shoes to wear to casual functions, pre-worn in", 
        condition="Used - Excellent", 
        size="L", price=15.00, sold=False,
    )
    product_13 = Product(
        name="Gold Necklace", user_id=4,
        desc="Very pretty gold necklace to give as a lovely gift or wear everyday! Also great for special occasions", 
        condition="Used - Good", 
        size="S", price=30.00, sold=False,
    )
    product_14 = Product(
        name="Technical Watch", user_id=4,
        desc="White watch with a techy vibe to feel awesome checking the time.", condition="Brand New", 
        size="M", price=20.00, sold=False,
    )
    product_15 = Product(
        name="Floral Dress", user_id=5,
        desc="Short floral dress for going out, worn only once! You will feel and look amazing in this dress", 
        condition="Like new", 
        size="S", price=50.00, sold=False,
    )
    product_16 = Product(
        name="Black Heeled Boots", user_id=5,
        desc="Stylish black heels to go out in. My favorite shoes", condition="Used - Fair", 
        size="S", price=15.00, sold=False,
    )
    product_17 = Product(
        name="Patchy Ripped Jeans", user_id=5,
        desc="Personalized jeans, with neat patches down the legs. Ripped too, for that awesome look", 
        condition="Used - Good", 
        size="S", price=20.00, sold=False,
    )
    product_18 = Product(
        name="White Blouse", user_id=5,
        desc="A fashionable white blouse, for work or going out. I bought it in the wrong size and can't return it. A must buy!", 
        condition="Brand new", 
        size="M", price=30.00, sold=False,
    )
    product_19 = Product(
        name="Khaki Pants", user_id=5,
        desc="Men's khaki pants. Made from recycled materials", condition="Used - Excellent", 
        size="L", price=10.00, sold=False,
    )
    product_20 = Product(
        name="Embroidered Pants", user_id=5,
        desc="Special one of a kind bright yellow pants. Embroidered with a cute dog.", condition="Used - Good", 
        size="L", price=40.00, sold=False,
    )
    product_21 = Product(
        name="Navy Sweater Vest", 
        user_id=3,
        desc="Pretty lacy navy sweater vest. Perfect item for layering",
        condition="Like new",
        size="S",
        price=12.00,
        sold=False
    )
    product_22 = Product(
        name="White T-Shirt", 
        user_id=3,
        desc="Cotton women's t-shirt. Great undershirt or just for a casual fit",
        condition="Brand new",
        size="M",
        price=6.00,
        sold=False
    )
    product_23 = Product(
        name="Checkered Dress", 
        user_id=2,
        desc="Casual short checkered dress. Looks amazing, style up or down for any occasion",
        condition="Used - Good",
        size="S",
        price=15.00,
        sold=False
    )
    product_24 = Product(
        name="Grey Shoes",
        user_id=5,
        desc="These shoes are great for walking and wearing. Wrong size for me",
        condition="Like new",
        size="L",
        price=30.00,
        sold=False
    )
    product_25 = Product(
        name="Yellow Joggers",
        user_id=3,
        desc="",
        condition="Used - Good",
        size="M",
        price=15.00,
        sold=False
    )
    product_26 = Product(
        name="Leather Watch", user_id=5,
        desc="Classic looking black watch with a leather band", condition="Used - Fair", 
        size="M", price=20.00, sold=False,
    )
    product_27 = Product(
        name="Fossil Watch", user_id=4,
        desc="Fossil brand watch, cool looking black watch with brown leather band", condition="Brand new", 
        size="L", price=80.00, sold=False,
    )
    product_28 = Product(
        name="Digital Watch", user_id=4,
        desc="Casio brand digital watch. Very classic look, very good condition", condition="Used - Excellent", 
        size="L", price=20.00, sold=False,
    )
    product_29 = Product(
        name="Assorted Jewellery", user_id=2,
        desc="Different kinds of minerals in these earrings and necklaces, very beautiful", condition="Used - Excellent", 
        size="M", price=50.00, sold=False,
    )
    product_30 = Product(
        name="Gold Necklaces", user_id=3,
        desc="Different kinds of gold necklaces in different shapes, brand new!", condition="Brand new", 
        size="S", price=20.00, sold=False,
    )
    product_31 = Product(
        name="Blue Heart Earrings", user_id=2,
        desc="Very pretty blue heart ear rings, cut rock into this beautiful shape.", condition="Used - Good", 
        size="M", price=10.00, sold=False,
    )
    product_32 = Product(
        name="Crocheted Beanie", user_id=2,
        desc="Gorgeously hand crafted beanie. Dark green color. It is small. Hand wash", condition="Used - Excellent", 
        size="S", price=20.00, sold=False,
    )
    product_33 = Product(
        name="Slouchy Beanie", user_id=4,
        desc="Super warm heather grey beanie, my dog is cute so I had him wear it", condition="Used - Fair", 
        size="L", price=8.00, sold=False,
    )
    product_34 = Product(
        name="Egg Pants", 
        user_id=3,
        desc="Not sure what these really are, but they look sick!",
        condition="Used - Good",
        size="M",
        price=30.00,
        sold=False
    )
    product_35 = Product(
        name="Fitted Jeans", 
        user_id=3,
        desc="Men's fitted jeans, these are just folded at the bottom. Very soft and comfortable jeans",
        condition="Used - Good",
        size="L",
        price=14.00,
        sold=False
    )
    product_36 = Product(
        name="Cuffed Pants", 
        user_id=3,
        desc="These pants are not quite jeans, not quite slacks. Exquisitely cuffed with precision",
        condition="Brand new",
        size="L",
        price=20.00,
        sold=False
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
    db.session.add(product_21)
    db.session.add(product_22)
    db.session.add(product_23)
    db.session.add(product_24)
    db.session.add(product_25)
    db.session.add(product_26)
    db.session.add(product_27)
    db.session.add(product_28)
    db.session.add(product_29)
    db.session.add(product_30)
    db.session.add(product_31)
    db.session.add(product_32)
    db.session.add(product_33)
    db.session.add(product_34)
    db.session.add(product_35)
    db.session.add(product_36)
    
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