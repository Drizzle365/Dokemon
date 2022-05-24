import json
import copy


class JsonSelect:
    def __init__(self, data: str, path=''):
        f = open(path + 'model/json/%s.json' % data, 'r', encoding='utf-8')
        self.data = json.load(f)

    def get_dokemon(self, did: str) -> dict:
        return copy.deepcopy(self.data.get(did))

    def get_map(self, mid: str) -> dict:
        return copy.deepcopy(self.data.get(mid))

    def get_npc(self, name: str) -> dict:
        return copy.deepcopy(self.data[name])

    def get_task(self, tid: str) -> dict:
        return copy.deepcopy(self.data[tid])

    def get_item(self, iid: str) -> dict:
        return copy.deepcopy(self.data[iid])

    def get_store(self) -> dict:
        return copy.deepcopy(self.data)
