from fastapi import APIRouter, Depends
from model.auth import get_user
from model.backpack import Backpack
from model.json_select import JsonSelect
from model.role import Role

router = APIRouter()
query = Backpack()
role = Role()
js_map = JsonSelect('map')
js_npc = JsonSelect('npc')
js_dokemon = JsonSelect('dokemon')
js_task = JsonSelect('task')


@router.get('/map')
def query_map(user=Depends(get_user)):
    uid = user['uid']
    role_data = role.get(uid)
    m = js_map.get_map(role_data['map'])
    m['npc_list'] = m['npc'].split()
    m['dokemon_list'] = []
    d = str(m['dokemon']).split()
    for i in range(0, len(d), 2):
        m['dokemon_list'].append({'id': d[i], 'name': js_dokemon.get_dokemon(d[i])['name'], 'lv': d[i + 1]})
    mid_list = list(map(int, role_data['map'].split(',')))
    if js_map.get_map(('%s,%s' % (mid_list[0] - 1, mid_list[1]))):
        m['N'] = js_map.get_map(('%s,%s' % (mid_list[0] - 1, mid_list[1])))['name']
    if js_map.get_map(('%s,%s' % (mid_list[0], mid_list[1] + 1))):
        m['E'] = js_map.get_map(('%s,%s' % (mid_list[0], mid_list[1] + 1)))['name']
    if js_map.get_map(('%s,%s' % (mid_list[0] + 1, mid_list[1]))):
        m['S'] = js_map.get_map(('%s,%s' % (mid_list[0] + 1, mid_list[1])))['name']
    if js_map.get_map(('%s,%s' % (mid_list[0], mid_list[1] - 1))):
        m['W'] = js_map.get_map(('%s,%s' % (mid_list[0], mid_list[1] - 1)))['name']
    m['task'] = js_task.get_task(str(role_data['task']))
    m['role'] = role_data
    return m


@router.get('/npc')
def get_npc(name: str, user=Depends(get_user)):
    role_data = role.get(user['uid'])

    def rep(s: str) -> str:
        return s.replace('<name>', role_data['name'])

    task = js_task.get_task(str(role_data['task']))
    npc = js_npc.get_npc(name)
    npc['talk'] = rep(npc['talk'])
    npc['isTask'] = 0
    if task['npc'] == npc['name'] and role_data['task_state'] == 0:
        npc['talk'] = rep(task['talk1'])
        npc['isTask'] = 1
    elif task['target'] == npc['name'] and role_data['task_state'] == 2:
        npc['talk'] = rep(task['talk2'])
        npc['isTask'] = 2
    return npc


@router.get('/task')
def get_task(tid: str):
    return js_task.get_task(tid)


@router.get('/dokemon')
def get_dokemon(did: str):
    return js_dokemon.get_dokemon(did)
