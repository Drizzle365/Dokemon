from fastapi import APIRouter
from model.json_select import JsonSelect

router = APIRouter()
js_map = JsonSelect('map')
js_npc = JsonSelect('npc')
js_dokemon = JsonSelect('dokemon')
js_task = JsonSelect('task')


@router.get('/map')
def get_map(mid: str):
    m = js_map.get_map(mid)
    m['npc_list'] = m['npc'].split()
    m['dokemon_list'] = []
    d = str(m['dokemon']).split()
    for i in range(0, len(d), 2):
        m['dokemon_list'].append({'id': d[i], 'name': js_dokemon.get_dokemon(d[i])['name'], 'lv': d[i + 1]})
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
def get_npc(name: str):
    return js_npc.get_npc(name)


@router.get('/task')
def get_task(tid: str):
    return js_task.get_task(tid)


@router.get('/dokemon')
def get_dokemon(did: str):
    return js_dokemon.get_dokemon(did)
