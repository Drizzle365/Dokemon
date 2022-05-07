from fastapi import APIRouter
from data.role import Role
from data.model import CreateRoleModel
from data.json import JsonSelect

router = APIRouter()
role = Role()
js = JsonSelect()


@router.get('/')
def index():
    return {'message': '角色服务端运行中'}


@router.get('/get')
def get(uid):
    res = role.get(uid)
    if res:
        return {'code': 0, 'role': res}
    else:
        return {'code': 1, 'message': '未找到该角色'}


@router.post('/create')
def create(req: CreateRoleModel):
    role.create(id=req.uid, name=req.name, sex=req.sex)
    dm = js.get_dokemon(req.dokemon)
    del dm['HP']
    del dm['AT']
    del dm['DF']
    del dm['SA']
    del dm['SD']
    del dm['SP']
    role.db.table('dokemon').insert(uid=req.uid, **dm)
    return {'code': 0}
