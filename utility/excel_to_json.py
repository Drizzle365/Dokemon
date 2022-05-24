import json
import xlrd


def dokemon_excel_to_json():
    data = xlrd.open_workbook('../model/excel/dokemon.xls')
    table = data.sheet_by_name('dokemon')
    did = table.col(0)
    name = table.col(1)
    hp = table.col(4)
    at = table.col(5)
    df = table.col(6)
    sa = table.col(7)
    sd = table.col(8)
    sp = table.col(9)
    dokemon_json = {}
    for i in range(1, table.nrows):
        dokemon_json[did[i].value] = {
            'name': name[i].value,
            'HP': hp[i].value,
            'AT': at[i].value,
            'DF': df[i].value,
            'SA': sa[i].value,
            'SD': sd[i].value,
            'SP': sp[i].value
        }
    dokemon_data = json.dumps(dokemon_json, ensure_ascii=False)
    with open('../model/json/dokemon.json', 'w', encoding='utf-8') as f:
        f.write(dokemon_data)
        print('豆可梦数据转化完成！')


def map_excel_json():
    data = xlrd.open_workbook('../model/excel/map.xls')
    table = data.sheet_by_name('map')
    mid = table.col(0)
    name = table.col(1)
    depiction = table.col(2)
    npc = table.col(3)
    dokemon = table.col(4)
    map_json = {}
    for i in range(1, table.nrows):
        map_json[mid[i].value] = {
            'name': name[i].value,
            'depiction': depiction[i].value,
            'npc': npc[i].value,
            'dokemon': dokemon[i].value,
        }
    map_data = json.dumps(map_json, ensure_ascii=False)
    with open('../model/json/map.json', 'w', encoding='utf-8') as f:
        f.write(map_data)
        print('地图数据转化完成！')


def npc_excel_json():
    data = xlrd.open_workbook('../model/excel/npc.xls')
    table = data.sheet_by_name('npc')
    type_ = table.col(1)
    name = table.col(2)
    depiction = table.col(3)
    talk = table.col(4)
    npc_json = {}
    for i in range(1, table.nrows):
        npc_json[name[i].value] = {
            'type': type_[i].value,
            'name': name[i].value,
            'depiction': depiction[i].value,
            'talk': talk[i].value,
        }
    npc_data = json.dumps(npc_json, ensure_ascii=False)
    with open('../model/json/npc.json', 'w', encoding='utf-8') as f:
        f.write(npc_data)
        print('npc 数据转化完成！')


def task_excel_json():
    data = xlrd.open_workbook('../model/excel/task.xls')
    table = data.sheet_by_name('task')
    tid = table.col(0)
    name = table.col(1)
    type_ = table.col(2)
    npc = table.col(3)
    target = table.col(4)
    talk1 = table.col(5)
    talk2 = table.col(6)
    remarks = table.col(7)
    award = table.col(6)
    coin = table.col(7)
    task_json = {}
    for i in range(1, table.nrows):
        task_json[tid[i].value] = {
            'name': name[i].value,
            'type': type_[i].value,
            'npc': npc[i].value,
            'target': target[i].value,
            'talk1': talk1[i].value,
            'talk2': talk2[i].value,
            'remarks': remarks[i].value,
            'award': award[i].value,
            'coin': coin[i].value,
        }
    task_data = json.dumps(task_json, ensure_ascii=False)
    with open('../model/json/task.json', 'w', encoding='utf-8') as f:
        f.write(task_data)
        print('任务数据转化完成！')


def items_excel_json():
    data = xlrd.open_workbook('../model/excel/items.xls')
    table = data.sheet_by_name('items')
    iid = table.col(0)
    name = table.col(1)
    depiction = table.col(2)
    type_ = table.col(3)
    function = table.col(4)

    items_json = {}
    for i in range(1, table.nrows):
        items_json[int(iid[i].value)] = {
            'type': type_[i].value,
            'name': name[i].value,
            'depiction': depiction[i].value,
            'function': function[i].value
        }
    npc_data = json.dumps(items_json, ensure_ascii=False)
    with open('../model/json/items.json', 'w', encoding='utf-8') as f:
        f.write(npc_data)
        print('物品数据转化完成！')


def store_excel_json():
    data = xlrd.open_workbook('../model/excel/store.xls')
    table = data.sheet_by_name('store')
    sid = table.col(0)
    iid = table.col(1)
    name = table.col(2)
    depiction = table.col(3)
    type_ = table.col(4)
    price = table.col(5)
    store_json = {}
    for i in range(1, table.nrows):
        store_json[int(sid[i].value)] = {
            'iid': int(iid[i].value),
            'type': type_[i].value,
            'name': name[i].value,
            'depiction': depiction[i].value,
            'price': int(price[i].value),
        }
    store_data = json.dumps(store_json, ensure_ascii=False)
    with open('../model/json/store.json', 'w', encoding='utf-8') as f:
        f.write(store_data)
        print('商店数据转化完成！')


if __name__ == '__main__':
    dokemon_excel_to_json()
    map_excel_json()
    task_excel_json()
    npc_excel_json()
    items_excel_json()
    store_excel_json()
