from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy_utils import EmailType
from datetime import datetime

class User(Base):
    """Class User

    Args:
        Base: class Base of SQLAlquemy
    """
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True)
    hashed_password = Column(String)
    email = Column(EmailType)
    is_active = Column(Boolean, default=True)
    created_date = Column(DateTime, default=datetime.utcnow)

    post = relationship('Post', back_populates='owner')
