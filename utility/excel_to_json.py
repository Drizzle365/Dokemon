import json
import xlrd


def dokemon_excel_to_json():
    data = xlrd.open_workbook('excel/dokemon.xls')
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
    with open('json/dokemon.json', 'w', encoding='utf-8') as f:
        f.write(dokemon_data)
        print('dokemon 数据转化完成！')


def map_excel_json():
    data = xlrd.open_workbook('excel/map.xls')
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
    with open('json/map.json', 'w', encoding='utf-8') as f:
        f.write(map_data)
        print('map 数据转化完成！')


def npc_excel_json():
    data = xlrd.open_workbook('excel/npc.xls')
    table = data.sheet_by_name('npc')
    name = table.col(1)
    depiction = table.col(2)
    talk = table.col(3)
    npc_json = {}
    for i in range(1, table.nrows):
        npc_json[name[i].value] = {
            'name': name[i].value,
            'depiction': depiction[i].value,
            'talk': talk[i].value,
        }
    npc_data = json.dumps(npc_json, ensure_ascii=False)
    with open('json/npc.json', 'w', encoding='utf-8') as f:
        f.write(npc_data)
        print('npc 数据转化完成！')


def task_excel_json():
    data = xlrd.open_workbook('excel/task.xls')
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
    with open('json/task.json', 'w', encoding='utf-8') as f:
        f.write(task_data)
        print('task 数据转化完成！')


if __name__ == '__main__':
    dokemon_excel_to_json()
    map_excel_json()
    task_excel_json()
    npc_excel_json()
