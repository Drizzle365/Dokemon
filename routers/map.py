from fastapi import APIRouter
from data.json import JsonSelect
from data.role import Role

router = APIRouter()
js = JsonSelect('map')


@router.get('/')
def index(mid: int):
    return js.get_map(mid)
