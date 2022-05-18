from fastapi import APIRouter
from model.json import JsonSelect

router = APIRouter()
js_map = JsonSelect('map')
js_npc = JsonSelect('npc')
js_dokemon = JsonSelect('dokemon')
js_task = JsonSelect('task')


@router.get('/map')
def get_map(mid: str):
    m = js_map.get_map(mid)
    m['npc_list'] = []
    m['dokemon_list'] = []
    for item in str(m['npc']).split():
        m['npc_list'].append({'id': item, 'name': js_npc.get_npc(int(item))['name']})
    d = str(m['dokemon']).split()
    for i in range(0, len(d), 2):
        m['dokemon_list'].append({'id': d[i], 'name': js_dokemon.get_dokemon(int(d[i]))['name'], 'lv': d[i + 1]})
    mid_list = list(map(int, mid.split(',')))
    if js_map.get_map(('%s,%s' % (mid_list[0] - 1, mid_list[1]))):
        m['N'] = js_map.get_map(('%s,%s' % (mid_list[0] - 1, mid_list[1])))['name']
    if js_map.get_map(('%s,%s' % (mid_list[0], mid_list[1] + 1))):
        m['E'] = js_map.get_map(('%s,%s' % (mid_list[0], mid_list[1] + 1)))['name']
    if js_map.get_map(('%s,%s' % (mid_list[0] + 1, mid_list[1]))):
        m['S'] = js_map.get_map(('%s,%s' % (mid_list[0] + 1, mid_list[1])))['name']
    if js_map.get_map(('%s,%s' % (mid_list[0], mid_list[1] - 1))):
        m['W'] = js_map.get_map(('%s,%s' % (mid_list[0], mid_list[1] - 1)))['name']
    return m


@router.get('/npc')
def get_npc(nid: int):
    return js_npc.get_npc(nid)


@router.get('/task')
def get_task(tid: int):
    return js_task.get_task(tid)


@router.get('/dokemon')
def get_dokemon(did: int):
    return js_dokemon.get_dokemon(did)
