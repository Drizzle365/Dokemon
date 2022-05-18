import datetime

from model.mysql import MySql


class Role:
    def __init__(self):
        self.db = MySql()

    def get(self, uid: int):
        return self.db.table('role').where('uid = %s' % uid).item()

    def create(self, **data):
        return self.db.table('role').insert(**data)

    def add_coin(self, uid: int, num: int):
        res = self.get(uid)
        return self.db.table('role').where('uid = %s' % uid).update(coin=res['coin'] + num)

    def sign(self, uid: int):
        today = str(datetime.date.today())
        res = self.get(uid)
        if res['sign'] == today:
            return {'msg': '您今天已经签过到啦!', 'code': 1}
        self.add_coin(uid, 300)
        self.db.table('role').where('uid = %s' % uid).update(sign=str(datetime.date.today()))
        return {'msg': '签到成功，获得300硬币!', 'code': 0}

    def move(self, uid: int, d: int):
        r = self.get(uid)
        new_map = list(map(int, r['map'].split(',')))
        if d == 0:
            new_map[0] -= 1
        elif d == 1:
            new_map[1] += 1
        elif d == 2:
            new_map[0] += 1
        else:
            new_map[1] -= 1

        return self.db.table('role').where('uid = %s' % uid).update(map=','.join(map(str, new_map)))
