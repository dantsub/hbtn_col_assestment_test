from sqlalchemy import Column, Integer, String, DateTime, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

class Post(Base):
    """Class Post

    Args:
        Base: class Base of SQLAlquemy
    """
    __tablename__ = 'pots'

    id = Column(Integer, primary_key=True)
    title = Column(String)
    body = Column(String)
    owner_id = Column(Integer, ForeignKey('users.id'))
    is_active = Column(Boolean, default=True)
    created_date = Column(DateTime, default=datetime.utcnow)

    owner = relationship('User', back_populates='post')
