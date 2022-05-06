from pydantic import BaseModel


class UserReq(BaseModel):
    email: str
    password: str


class RoleReq(BaseModel):
    name: str
    sex: str
