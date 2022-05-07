import json


class JsonSelect:
    def __init__(self):
        f = open('data/json/dokemon.json', 'r', encoding='utf-8')
        self.dokemon = json.load(f)

    def get_dokemon(self, did) -> dict:
        return self.dokemon['Dokemon'][did - 1]
