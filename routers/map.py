from fastapi import APIRouter
from model.json import JsonSelect

router = APIRouter()
js = JsonSelect('map')


@router.get('/')
def index(mid: int):
    return js.get_map(mid)
