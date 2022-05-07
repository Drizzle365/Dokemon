from pydantic import BaseModel


class UserModel(BaseModel):
    email: str
    password: str


class CreateRoleModel(BaseModel):
    uid: int
    name: str
    sex: str
    dokemon: int
