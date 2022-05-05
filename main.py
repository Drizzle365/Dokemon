from fastapi import FastAPI
from data.user import User
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

user = User()

app = FastAPI()
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Dokemon 服务端运行中"}


class UserReq(BaseModel):
    email: str
    password: str


@app.post("/token")
def token(req: UserReq):
    res = user.token(req.email, req.password)
    if res['code'] == 0:
        pass
    return res
