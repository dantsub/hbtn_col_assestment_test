from typing import List, Optional
from pydantic import BaseModel
import datetime

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class User(BaseModel):
    username: str

class UserInDB(User):
    hashed_password: str

class UserCreate(User):
    password: str
    email: str

class PostBase(BaseModel):
    title: str
    body: str

class PostList(BaseModel):
    created_date: Optional[datetime.datetime]
    owner_id: int
    owner_id: User

class Config:
    orm_mode=True
