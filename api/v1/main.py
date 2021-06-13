from api.v1.views import login, posts, users
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(login.router, tags=["login"])
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(posts.router, prefix="/posts", tags=["posts"])

@app.get("/")
async def index():
    return {'message': 'active'}

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
