from app.models import db, Image, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_images():
    image_1 = Image(
        product_id=2, 
        image_url="https://media.istockphoto.com/id/1278802435/photo/sweater-yellow-color-isolated-on-white-trendy-womens-clothing-knitted-apparel.jpg?s=612x612&w=0&k=20&c=FQkuYEwpizIULWpcN0kjOwoe0mZZKFVZzxpmpP0rKlI="
    )
    image_2 = Image(
        product_id=2, 
        image_url="https://previews.123rf.com/images/annapustynnikova/annapustynnikova1905/annapustynnikova190500602/124135071-yellow-knitted-wool-texture-pattern-with-high-resolution.jpg"
    )
    image_3 = Image(
        product_id=1, 
        image_url="https://img.freepik.com/free-photo/jeans_1203-8093.jpg"
    )
    image_4 = Image(
        product_id=1, 
        image_url="https://img.freepik.com/free-photo/jeans_1203-8095.jpg"
    )
    image_5 = Image(
        product_id=5, 
        image_url="https://n.nordstrommedia.com/id/sr3/943c7f7d-ddb2-4ae5-a7c8-0701a35873cc.jpeg"
    )
    image_6 = Image(
        product_id=5, 
        image_url="https://transalpino.co.uk/cdn/shop/products/DSC02954_clipped_rev_1_1.jpg"
    )
    image_7 = Image(
        product_id=4, 
        image_url="https://m.media-amazon.com/images/I/71+nrnLc8aL._AC_UY879_.jpg"
    )
    image_8 = Image(
        product_id=4, 
        image_url="https://m.media-amazon.com/images/I/81FxAz7RNtL._AC_UY879_.jpg"
    )
    image_9 = Image(
        product_id=3, 
        image_url="https://media-photos.depop.com/b1/41424649/1590120428_612b7434ee3a43db96a7442884797a8e/P0.jpg"
    )
    image_10 = Image(
        product_id=3, 
        image_url="https://media-photos.depop.com/b1/41424649/1590120087_dbccad9fd1cc43368607210ddf9b06ba/P0.jpg"
    )
    image_11 = Image(
        product_id=6, 
        image_url="https://museumstore.sfmoma.org/cdn/shop/products/s001b-watch-1_1000x1000_72_1200x.jpg"
    )
    image_12 = Image(
        product_id=7, 
        image_url="https://media.istockphoto.com/id/1324847242/photo/pair-of-white-leather-trainers-on-white-background.jpg?s=612x612&w=0&k=20&c=2ebHfBhvCJ9_y4YzRsUqi0SeVWX-oqraGTBCZ9lmFOQ="
    )
    image_13 = Image(
        product_id=7,
        image_url="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1642020460-Capri-triple-white-1-min_1200x.progressive.png.jpg"
    )
    image_14 = Image(
        product_id=8, 
        image_url="https://www.catbirdnyc.com/media/catalog/product/cache/6f471d43bc9b3d5c897cc914f9085aa8/c/a/catbird-hoopdreams-yg-p5.jpg"
    )
    image_15 = Image(
        product_id=9, 
        image_url="https://m.media-amazon.com/images/I/91VBCSVgfDL._AC_UY879_.jpg"
    )
    image_16 = Image(
        product_id=9, 
        image_url="https://m.media-amazon.com/images/I/91toU+af6iL._AC_UY879_.jpg"
    )
    image_17 = Image(
        product_id=9, 
        image_url="https://m.media-amazon.com/images/I/91DjcRHs8sL._AC_UY879_.jpg"
    )
    image_18 = Image(
        product_id=9, 
        image_url="https://m.media-amazon.com/images/I/918gk-+5GeL._AC_UY879_.jpg"
    )
    image_19 = Image(
        product_id=10,
        image_url="https://m.media-amazon.com/images/I/61wNaclZz8L._AC_UX679_.jpg"
    )
    image_20 = Image(
        product_id=10,
        image_url="https://m.media-amazon.com/images/I/51nJlI7uo8L._AC_UX679_.jpg"
    )
    image_21 = Image(
        product_id=11,
        image_url="https://m.media-amazon.com/images/I/81U8mxgVMML._AC_SX679._SX._UX._SY._UY_.jpg"
    )
    image_22 = Image(
        product_id=11,
        image_url="https://m.media-amazon.com/images/I/81umcYWoPSL._AC_SX679._SX._UX._SY._UY_.jpg"
    )
    image_23 = Image(
        product_id=11,
        image_url="https://m.media-amazon.com/images/I/81c0DiZZpuL._AC_SY879._SX._UX._SY._UY_.jpg"
    )
    image_24 = Image(
        product_id=12,
        image_url="https://m.media-amazon.com/images/I/71ocgI9wOiL._AC_UX695_.jpg"
    )
    image_25 = Image(
        product_id=12,
        image_url="https://m.media-amazon.com/images/I/71gX8GSskjL._AC_UY695_.jpg"
    )
    image_26 = Image(
        product_id=12,
        image_url="https://m.media-amazon.com/images/I/71mvOjtRpYL._AC_UX695_.jpg"
    )
    image_27 = Image(
        product_id=13,
        image_url="https://m.media-amazon.com/images/I/710v2ZhgHDL._AC_UX679_.jpg"
    )
    image_28 = Image(
        product_id=14,
        image_url="https://m.media-amazon.com/images/I/61zWvPw04+L._AC_UX679_.jpg"
    )
    image_29 = Image(
        product_id=14,
        image_url="https://m.media-amazon.com/images/I/71H+X1gNByL._AC_UX679_.jpg"
    )
    image_30 = Image(
        product_id=15,
        image_url="https://m.media-amazon.com/images/I/61tkA+qD3LL._AC_SY879._SX._UX._SY._UY_.jpg"
    )
    image_31 = Image(
        product_id=15,
        image_url="https://m.media-amazon.com/images/I/613GzM8hGdL._AC_SY879._SX._UX._SY._UY_.jpg"
    )
    image_32 = Image(
        product_id=16,
        image_url="https://m.media-amazon.com/images/I/61fEF4Z-ssL._AC_UY695_.jpg"
    )
    image_33 = Image(
        product_id=16,
        image_url="https://m.media-amazon.com/images/I/71ORvp78I2L._AC_UX695_.jpg"
    )
    image_34 = Image(
        product_id=16,
        image_url="https://m.media-amazon.com/images/I/61Gxscx9yeL._AC_UX695_.jpg"
    )
    image_35 = Image(
        product_id=17,
        image_url="https://m.media-amazon.com/images/I/81K2DbwAYYL._AC_UX679_.jpg"
    )
    image_36 = Image(
        product_id=17,
        image_url="https://m.media-amazon.com/images/I/813Zdfz5neL._AC_UX679_.jpg"
    )
    image_37 = Image(
        product_id=18,
        image_url="https://m.media-amazon.com/images/I/61OLOOPPDGL._AC_SX679._SX._UX._SY._UY_.jpg"
    )
    image_38 = Image(
        product_id=19,
        image_url="https://m.media-amazon.com/images/I/61fehc5aoEL._AC_UX679_.jpg"
    )
    image_39 = Image(
        product_id=19,
        image_url="https://m.media-amazon.com/images/I/61zzgmLvVKL._AC_UX679_.jpg"
    )
    image_40 = Image(
        product_id=20,
        image_url="https://m.media-amazon.com/images/I/41XGt7LAs7L._AC_UY879_.jpg"
    )
    image_41 = Image(
        product_id=20,
        image_url="https://m.media-amazon.com/images/I/41yQO1eEQ3L._AC_UY879_.jpg"
    )





    db.session.add(image_1)
    db.session.add(image_2)
    db.session.add(image_3)
    db.session.add(image_4)
    db.session.add(image_5)
    db.session.add(image_6)
    db.session.add(image_7)
    db.session.add(image_8)
    db.session.add(image_9)
    db.session.add(image_10)
    db.session.add(image_11)
    db.session.add(image_12)
    db.session.add(image_13)
    db.session.add(image_14)
    db.session.add(image_15)
    db.session.add(image_16)
    db.session.add(image_17)
    db.session.add(image_18)
    db.session.add(image_19)
    db.session.add(image_20)
    db.session.add(image_21)
    db.session.add(image_22)
    db.session.add(image_23)
    db.session.add(image_24)
    db.session.add(image_25)
    db.session.add(image_26)
    db.session.add(image_27)
    db.session.add(image_28)
    db.session.add(image_29)
    db.session.add(image_30)
    db.session.add(image_31)
    db.session.add(image_32)
    db.session.add(image_33)
    db.session.add(image_34)
    db.session.add(image_35)
    db.session.add(image_36)
    db.session.add(image_37)
    db.session.add(image_38)
    db.session.add(image_39)
    db.session.add(image_40)
    db.session.add(image_41)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM images"))
        
    db.session.commit()