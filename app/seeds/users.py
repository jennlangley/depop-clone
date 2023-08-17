from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='demouser', email='demo@aa.io', password='password', 
        first_name='Demo', last_name='User', bio='Looking to sell my cool stuff!')
    amelia = User(
        username='amelia411', email='amelia411@aa.io', password='password',
        first_name='Amelia', last_name='Roberts', bio='Fashion is my passion')
    sam = User(
        username='samIam', email='samIam123@aa.io', password='password',
        first_name='Sam', last_name='Smith', bio='Checkout my shop for great deals')
    kris = User(
        username='krisSellsStuff', email='kris123@aa.io', password='password',
        first_name='Kris', last_name='Toby', bio='Selling and buying cool items is my hobby')
    jessica = User(
        username='jessicapop', email='jessica101@aa.io', password='password',
        first_name='Jessica', last_name='Bing', bio='Shopaholic here, watchout :P')

    db.session.add(demo)
    db.session.add(amelia)
    db.session.add(sam)
    db.session.add(kris)
    db.session.add(jessica)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        
    db.session.commit()