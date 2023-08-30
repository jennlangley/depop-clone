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
        image_url="https://t4.ftcdn.net/jpg/01/63/57/73/360_F_163577358_6wSWA9Sc6CDeRwA6uWNSPKYu37LTzRsw.jpg"
    )
    image_8 = Image(
        product_id=4, 
        image_url="https://i5.walmartimages.com/asr/e6617ff2-8c20-4874-93a5-bdfb1955315a.e2e603a15b73b73fd225e75a48e0c2ef.jpeg"
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
    # image_14 = Image(
    #     product_id=, 
    #     image_url=
    # )
    # image_15 = Image(
    #     product_id=, 
    #     image_url=
    # )


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