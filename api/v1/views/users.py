from fastapi import APIRouter, Depends
from api.deps import deps
from api.crud import *

router = APIRouter()


@router.get("/users/me/")
async def read_users_me(current_user: models.User = Depends(get_current_user)):
    return current_user

@router.post("/users/")
def create_user(
    user: schemas.UserCreate, db: Session = Depends(get_db)
):
    return create_user(db=db, user=user)
