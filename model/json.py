import json


class JsonSelect:
    def __init__(self, data: str):
        f = open('model/json/%s.json' % data, 'r', encoding='utf-8')
        self.data = json.load(f)

    def get_dokemon(self, did: int) -> dict:
        return self.data['Dokemon'][did - 1]

    def get_map(self, mid: int) -> dict:
        return self.data['Map'][mid - 1]
