from model.mysql import MySql


class Dokemon:
    def __init__(self):
        self.db = MySql()

    def get(self, did: int):
        return self.db.table('dokemon').where('id = %s' % did).item()

    def add(self, **data):
        return self.db.table('dokemon').insert(**data)
