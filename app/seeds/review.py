from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text


def seed_reviews():
    review_1 = Review(
        user_id=2, product_id=6, stars=5, 
        review="Watch is as described, great transaction",
    )
    review_2 = Review(
        user_id=2, product_id=7, stars=1, 
        review="stated worn once but sole was considerably worn down.",
    )
    review_3 = Review(
        user_id=1, product_id=8, stars=4, 
        review="great seller, shipped fast, ear rings ok",
    )
    # review_4 = Review(
    #     user_id=1, product_id=9, stars=, 
    #     review=,
    # )
    # review_5 = Review(
    #     user_id=3, product_id=10, stars=, 
    #     review=,
    # )
    # review_6 = Review(
    #     user_id=2, product_id=, stars=, 
    #     review=,
    # )
    # review_7 = Review(
    #     user_id=3, product_id=, stars=, 
    #     review=,
    # )
    # review_8 = Review(
    #     user_id=8, product_id=, stars=, 
    #     review=,
    # )
    # review_6 = Review(
    #   user_id=, product_id=, stars=, 
    #   review=,  
    # )
    # review_7 = Review(
    #   user_id=, product_id=, stars=, 
    #   review=,  
    # )
    # review_8 = Review(
    #   user_id=, product_id=, stars=, 
    #   review=,  
    # )
    # review_9 = Review(
    #   user_id=, product_id=, stars=, 
    #   review=,  
    # )
    # review_10 = Review(
    #   user_id=, product_id=, stars=, 
    #   review=,  
    # )

    db.session.add(review_1)
    db.session.add(review_2)
    db.session.add(review_3)
    # db.session.add(review_4)
    # db.session.add(review_5)
    # db.session.add(review_6)
    # db.session.add(review_7)
    # db.session.add(review_8)
    # db.session.add(review_9)
    # db.session.add(review_10)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
        
    db.session.commit()