from datetime import datetime, timedelta
from typing import Optional

from db.base import User, Post
from jose import JWTError, jwt
from passlib.context import CryptContext
from schemas import schemas
from sqlalchemy.orm import Session

from api.config import *

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


def get_user(db, username: str):
    return db.query(User).filter(User.username == username).first()


def create_user(db: Session, user: schemas.UserCreate):
    db_user = User(username=user.username, email=user.email, hashed_password=get_password_hash(user.password))
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def authenticate_user(fake_db, username: str, password: str):
    user = get_user(fake_db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def create_post(db: Session, user_id:int, title:str, body:str):
    db_post = Post(title=title, body=body, owner_id=user_id)
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post

def get_post(db, id: int):
    return db.query(Post).filter(Post.id == id).first()

def post_list(db):
    return db.query(Post).all()
