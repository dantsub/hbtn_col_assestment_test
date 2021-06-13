from datetime import datetime

from db.base import Base
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship


class Post(Base):
    """Class Post

    Args:
        Base: class Base of SQLAlquemy
    """
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    body = Column(String)
    owner_id = Column(Integer, ForeignKey("users.id"))
    is_active = Column(Boolean, default=True)
    created_date = Column(DateTime, default=datetime.utcnow)

    owner = relationship("User", back_populates="post")
