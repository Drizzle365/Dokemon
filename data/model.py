from pydantic import BaseModel


class UserReq(BaseModel):
    email: str
    password: str


class RoleReq(BaseModel):
    uid: int
    name: str
    sex: str
