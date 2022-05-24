import json


class JsonSelect:
    def __init__(self, data: str, path=''):
        f = open(path + 'model/json/%s.json' % data, 'r', encoding='utf-8')
        self.data = json.load(f)

    def get_dokemon(self, did: str) -> dict:
        return self.data.get(did)

    def get_map(self, mid: str) -> dict:
        return self.data.get(mid)

    def get_npc(self, name: str) -> dict:
        return self.data[name]

    def get_task(self, tid: str) -> dict:
        return self.data[tid]

    def get_item(self, iid: str) -> dict:
        return self.data[iid]

    def get_store(self) -> dict:
        return self.data
