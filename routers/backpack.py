from fastapi import APIRouter, Depends
from model.auth import get_user
from model.backpack import Backpack

router = APIRouter()
backpack = Backpack()


@router.get('/')
def index(user=Depends(get_user)):
    return backpack.get_list(user['uid'])
