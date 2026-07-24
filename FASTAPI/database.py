from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
DATABASE_URL="mysql+pymysql://root:Roshini#1@localhost:3306/BATCH2DB"
db=create_engine(DATABASE_URL)
SessionLocal=sessionmaker(bind=db) 

def db_conn():
    DB=SessionLocal()
    try:
        yield DB
    finally:
        DB.close()