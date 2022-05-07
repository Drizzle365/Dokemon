from fastapi import APIRouter
from data.dokemon import Dokemon
from data.model import DokemonModel

router = APIRouter()
dokemon = Dokemon()


@router.get('/')
def index():
    return {'message': 'Dokemon 数据服务端运行中'}


@router.post('/add')
def add(d: DokemonModel):
    dokemon.add(uid)
    return {'code': 0}
