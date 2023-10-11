from app.models import db, Follow, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_follows():
    follow_1 = Follow(
        follower_id=1, followed_id=2
    )
    follow_2 = Follow(
        follower_id=2, followed_id=1
    )
    follow_3 = Follow(
        follower_id=2, followed_id=3
    )
    follow_4 = Follow(
        follower_id=1, followed_id=4
    )
    follow_5 = Follow(
        follower_id=4, followed_id=5
    )
    follow_6 = Follow(
        follower_id=4, followed_id=1
    )
    follow_7 = Follow(
        follower_id=4, followed_id=2
    )
    follow_8 = Follow(
        follower_id=3, followed_id=2
    )
    follow_9 = Follow(
        follower_id=3, followed_id=1
    )

    db.session.add(follow_1)
    db.session.add(follow_2)
    db.session.add(follow_3)
    db.session.add(follow_4)
    db.session.add(follow_5)
    db.session.add(follow_6)
    db.session.add(follow_7)
    db.session.add(follow_8)
    db.session.add(follow_9)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the follows table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_follows():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.follows RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM follows"))
        
    db.session.commit()