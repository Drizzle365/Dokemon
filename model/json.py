import json


class JsonSelect:
    def __init__(self, data: str, path=''):
        f = open(path + 'model/json/json_%s.json' % data, 'r', encoding='utf-8')
        self.data = json.load(f)['RECORDS']

    def get_dokemon(self, did: int) -> dict:
        return self.data[did - 1]

    def get_map(self, mid: str) -> dict:
        return self.data.get(mid)

    def get_npc(self, nid: int) -> dict:
        return self.data[nid - 1]

    def get_task(self, tid: int) -> dict:
        return self.data[tid - 1]
