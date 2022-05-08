from pydantic import BaseModel


class UserModel(BaseModel):
    email: str
    password: str


class CreateRoleModel(BaseModel):
    name: str
    sex: str
    dokemon: int
