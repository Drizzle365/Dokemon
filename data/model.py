from pydantic import BaseModel


class UserReq(BaseModel):
    email: str
    password: str
