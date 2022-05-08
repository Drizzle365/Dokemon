from fastapi import APIRouter
from data.dokemon import Dokemon

router = APIRouter()
dokemon = Dokemon()


@router.get('/')
def index():
    return {'message': 'Dokemon 数据服务端运行中'}



