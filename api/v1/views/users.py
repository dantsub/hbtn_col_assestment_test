from api.crud import create_user as cuser
from api.deps import *
from db.base import *
from fastapi import APIRouter, Depends
from schemas import schemas
from sqlalchemy.orm import Session

router = APIRouter()

@router.get("/me/")
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user

@router.post("/")
def create_user(
    user: schemas.UserCreate, db: Session = Depends(get_db)
):
    return cuser(db=db, user=user)
