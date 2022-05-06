from fastapi import APIRouter
from data.role import Role
from data.model import RoleReq

router = APIRouter()
role = Role()


@router.get('/')
def index():
    return {'message': '角色服务端运行中'}


@router.get('/get')
def get(uid):
    res = role.get(uid)
    if res:
        return {'code': 0, role: res}
    else:
        return {'code': 1, 'message': '未找到该角色'}


@router.post('/create')
def create(req: RoleReq):
    res = role.creat(uid=req.uid, name=req.name, sex=req.sex)
    return {'code': 0}
