from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer
from utility.auth import get_user
from model.json_select import JsonSelect
from model.role import Role
from pydantic import BaseModel

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
router = APIRouter()
role = Role()
js = JsonSelect('dokemon')


@router.get('/')
def index(user=Depends(get_user)):
    res = role.get(user['uid'])
    if res:
        return {'code': 0, 'role': res}
    else:
        return {'code': 1, 'msg': '您还未注册'}


class CreateRoleModel(BaseModel):
    name: str
    sex: str
    dokemon: str


@router.post('/create')
def create(req: CreateRoleModel, user=Depends(get_user)):
    if not user.get('uid'):
        return {'msg': 'token 失效'}
    if role.get(user['uid']):
        return {'msg': '已经注册!'}
    role.create(uid=user['uid'], name=req.name, sex=req.sex)
    dm = js.get_dokemon(req.dokemon)
    role.db.table('dokemon').insert(uid=user['uid'], pid=req.dokemon, name=dm['name'])
    return {'code': 0}


@router.get('/sign')
def sign(user=Depends(get_user)):
    return role.sign(user['uid'])


@router.get('/move')
def move(d: int, user=Depends(get_user)):
    return role.move(user['uid'], d)
