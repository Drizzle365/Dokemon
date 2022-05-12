from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer
import datetime
from model.auth import get_user
from model.json import JsonSelect
from model.model import CreateRoleModel
from model.role import Role

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


@router.get('/get')
def get(uid):
    res = role.get(uid)
    if res:
        return {'code': 0, 'role': res}
    else:
        return {'code': 1, 'msg': '未找到该角色'}


@router.post('/create')
def create(req: CreateRoleModel, user=Depends(get_user)):
    if not user.get('uid'):
        return {'msg': 'token 失效'}
    if role.get(user['uid']):
        return {'msg': '已经注册!'}
    role.create(uid=user['uid'], name=req.name, sex=req.sex)
    dm = js.get_dokemon(req.dokemon)
    del dm['id']
    del dm['HP']
    del dm['AT']
    del dm['DF']
    del dm['SA']
    del dm['SD']
    del dm['SP']
    role.db.table('dokemon').insert(uid=user['uid'], **dm)
    return {'code': 0}


@router.get('/sign')
def sign(user=Depends(get_user)):
    return role.sign(user['uid'])
