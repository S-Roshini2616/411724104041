from fastapi import FastAPI
from routes import router
import models
from database import db
app=FastAPI()
app.include_router(router)
models.Base.metadata.create_all(bind=db)