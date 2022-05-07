from data.mysql import MySql


class Role:
    def __init__(self):
        self.db = MySql()

    def get(self, uid: int):
        return self.db.table('role').where('id = %s' % uid).item()

    def create(self, **data):
        return self.db.table('role').insert(**data)
