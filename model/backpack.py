from model.mysql import MySql


class Backpack:
    def __init__(self):
        self.db = MySql()

    def get(self, bid: int):
        return self.db.table('backpack').where('id = %s' % bid).item()

    def get_list(self, uid: int):
        return self.db.table('backpack').where('uid = %s' % uid).list()

    def get_item(self, uid: int, name: str, num: int):
        res = self.db.table('backpack').where("uid = %s and name = '%s'" % (uid, name)).item()
        if res:
            return self.db.table('backpack').where("uid = %s and name = '%s'" % (uid, name)).update(
                num=res['num'] + num)
        else:
            return self.db.table('backpack').insert(uid=uid, name=name, num=num)

    def delete_item(self, uid, name, num):
        res = self.db.table('backpack').where("uid = %s and name = '%s'" % (uid, name)).item()
        if res:
            if res['num'] > num:
                return self.db.table('backpack').where("uid = %s and name = '%s'" % (uid, name)).update(
                    num=res['num'] - num)
            elif res['num'] == num:
                return self.db.table('backpack').where("uid = %s and name = '%s'" % (uid, name)).delete()
            else:
                return {'msg': '物品数量不足'}
        else:
            return {'msg': '物品不存在'}
