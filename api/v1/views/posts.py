from fastapi import APIRouter, Depends
from api.crud import *

router = APIRouter()

@router.post("/posts/")
def create_post(
    title:str, body:str, db: Session = Depends(get_db),current_user: models.User = Depends(get_current_user)
):
    user_id=current_user.id
    return create_post(db=db,user_id=user_id,title=title,body=body)

@router.get("/posts/")
def post_list(db: Session = Depends(get_db)):
    return post_list(db=db)

@router.get("/posts/{post_id}")
def post_detail(post_id:int,db: Session = Depends(get_db)):
    return get_post(db=db, id=post_id)
