from app.models import db, Image, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_images():
    image_1 = Image(
        product_id=2, 
        image_url="https://images.pexels.com/photos/6995902/pexels-photo-6995902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    )
    image_2 = Image(
        product_id=2, 
        image_url="https://images.pexels.com/photos/6995900/pexels-photo-6995900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    )
    image_3 = Image(
        product_id=1, 
        image_url="https://images.pexels.com/photos/398078/pexels-photo-398078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    )
    image_4 = Image(
        product_id=1, 
        image_url="https://images.pexels.com/photos/531759/pexels-photo-531759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    )
    image_5 = Image(
        product_id=5, 
        image_url="https://images.unsplash.com/photo-1591818343198-4ff334074580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
    )
    image_6 = Image(
        product_id=5, 
        image_url="https://images.unsplash.com/photo-1591818343276-fa2b3ab106e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    )
    image_7 = Image(
        product_id=4, 
        image_url="https://images.unsplash.com/photo-1682501979284-8657c90bdb5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1617&q=80"
    )
    image_8 = Image(
        product_id=4, 
        image_url="https://images.unsplash.com/photo-1682502040663-e56b3766443c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1827&q=80"
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
        image_url="https://images.pexels.com/photos/11203750/pexels-photo-11203750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    )
    image_15 = Image(
        product_id=9, 
        image_url="https://images.unsplash.com/photo-1593278641722-49b1047ede21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
    )
    image_16 = Image(
        product_id=26, 
        image_url="https://images.unsplash.com/photo-1693289148358-841a1bd7bc9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2457&q=80"
    )
    image_17 = Image(
        product_id=27, 
        image_url="https://images.unsplash.com/photo-1691811922916-e30515f7645a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2476&q=80"
    )
    image_18 = Image(
        product_id=28, 
        image_url="https://images.unsplash.com/photo-1690618297162-cb0531f064bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
    )
    image_19 = Image(
        product_id=10,
        image_url="https://images.pexels.com/photos/6311653/pexels-photo-6311653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    )
    image_20 = Image(
        product_id=1,
        image_url="https://images.pexels.com/photos/206365/pexels-photo-206365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    )
    image_21 = Image(
        product_id=11,
        image_url="https://images.unsplash.com/photo-1695290318981-2fe0446598a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
    )
    image_22 = Image(
        product_id=11,
        image_url="https://images.unsplash.com/photo-1695290003820-1cc69716b6af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
    )
    image_23 = Image(
        product_id=34,
        image_url="https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
    )
    image_24 = Image(
        product_id=12,
        image_url="https://images.unsplash.com/photo-1611299106168-277a21fad977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    )
    image_25 = Image(
        product_id=12,
        image_url="https://images.unsplash.com/photo-1611299081794-5965fc4d900b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    )
    image_26 = Image(
        product_id=29,
        image_url="https://images.unsplash.com/photo-1646031348680-0756f9eb8b9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
    )
    image_27 = Image(
        product_id=13,
        image_url="https://images.unsplash.com/photo-1692421098809-6cdfcfea289a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGpld2VsbGVyeXxlbnwwfHwyfHx8Mg%3D%3D&auto=format&fit=crop&w=700&q=60"
    )
    image_28 = Image(
        product_id=14,
        image_url="https://images.unsplash.com/photo-1694630097817-c3a8e1e4029f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2312&q=80"
    )
    image_29 = Image(
        product_id=14,
        image_url="https://images.unsplash.com/photo-1694598152256-a346298ae0b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2235&q=80"
    )
    image_30 = Image(
        product_id=15,
        image_url="https://images.unsplash.com/photo-1560607812-923a837d906c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
    )
    image_31 = Image(
        product_id=15,
        image_url="https://images.unsplash.com/photo-1560607812-7452dd7bf33a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
    )
    image_32 = Image(
        product_id=16,
        image_url="https://images.unsplash.com/photo-1494955464529-790512c65305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80"
    )
    image_33 = Image(
        product_id=29,
        image_url="https://images.unsplash.com/photo-1646031348418-1840acec6d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    )
    image_35 = Image(
        product_id=17,
        image_url="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
    )
    image_36 = Image(
        product_id=18,
        image_url="https://images.unsplash.com/photo-1598626431046-c7978e636c14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2235&q=80"
    )
    image_34 = Image(
        product_id=18,
        image_url="https://images.unsplash.com/photo-1598626247209-61060644fd38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2235&q=80"
    )
    image_37 = Image(
        product_id=18,
        image_url="https://images.unsplash.com/photo-1598626247584-d958078f8aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8Z1ByT0E1RnEzcEl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
    )
    image_38 = Image(
        product_id=19,
        image_url="https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    )
    image_39 = Image(
        product_id=29,
        image_url="https://images.unsplash.com/photo-1646031348416-91ed4c1246cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    )
    image_40 = Image(
        product_id=20,
        image_url="https://images.unsplash.com/photo-1610902866219-d7ad16e3a4fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2265&q=80"
    )
    image_41 = Image(
        product_id=20,
        image_url="https://images.unsplash.com/photo-1610902866286-1ca26b45bd76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2265&q=80"
    )
    image_42 = Image(
        product_id=21,
        image_url="https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    )
    image_43 = Image(
        product_id=22,
        image_url="https://images.pexels.com/photos/6311590/pexels-photo-6311590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    )
    image_44 = Image(
        product_id=22,
        image_url="https://images.pexels.com/photos/6311641/pexels-photo-6311641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    )
    image_45 = Image(
        product_id=23,
        image_url="https://images.unsplash.com/photo-1558254939-9e8d18321f73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    )
    image_46 = Image(
        product_id=23,
        image_url="https://images.unsplash.com/photo-1558254939-dc2e710ab545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    )
    image_47 = Image(
        product_id=24,
        image_url="https://images.unsplash.com/photo-1632765259214-9afeef8669e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80"
    )
    image_48 = Image(
        product_id=24,
        image_url="https://images.unsplash.com/photo-1632765259206-2ee43d1dbfc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80"
    )
    image_49 = Image(
        product_id=25,
        image_url="https://images.unsplash.com/photo-1519211777646-3a7ccf759b64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2485&q=80"
    )
    image_50 = Image(
        product_id=30,
        image_url="https://images.unsplash.com/photo-1631965004544-1762fc696476?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2235&q=80"
    )
    image_51 = Image(
        product_id=31,
        image_url="https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    )
    image_52 = Image(
        product_id=31,
        image_url="https://images.unsplash.com/photo-1630019925419-5fc53b4a52cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2134&q=80"
    )
    image_53 = Image(
        product_id=32,
        image_url="https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
    )
    image_54 = Image(
        product_id=33,
        image_url="https://images.unsplash.com/photo-1576138089064-2ca7edab2f49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    )
    image_55 = Image(
        product_id=33,
        image_url="https://images.unsplash.com/photo-1576138089479-65056fda0f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
    )
    image_56 = Image(
        product_id=34,
        image_url="https://images.unsplash.com/photo-1517438587856-01447fbf58a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
    )
    image_57 = Image(
        product_id=35,
        image_url="https://images.unsplash.com/photo-1511105043137-7e66f28270e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2264&q=80"
    )
    image_58 = Image(
        product_id=35,
        image_url="https://images.unsplash.com/photo-1511105612320-2e62a04dd044?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2265&q=80"
    )
    image_59 = Image(
        product_id=36,
        image_url="https://images.unsplash.com/photo-1623629267708-d79c838741ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
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
    db.session.add(image_42)
    db.session.add(image_43)
    db.session.add(image_44)
    db.session.add(image_45)
    db.session.add(image_46)
    db.session.add(image_47)
    db.session.add(image_48)
    db.session.add(image_49)
    db.session.add(image_50)
    db.session.add(image_51)
    db.session.add(image_52)
    db.session.add(image_53)
    db.session.add(image_54)
    db.session.add(image_55)
    db.session.add(image_56)
    db.session.add(image_57)
    db.session.add(image_58)
    db.session.add(image_59)
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