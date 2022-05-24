from pymysql import cursors, NULL, connect


class MySql:
    def __init__(self):
        self.Table: str = NULL
        self.Field: str = '*'
        self.Where: str = '1 = 1'
        self.Order: str = NULL
        self.db = connect(host='127.0.0.1', user='dokemon',
                          password='bYydLFfBbwrbrrmp', db='dokemon', port=3306)
        self.cursor = self.db.cursor(cursors.DictCursor)

    def finish(self):
        self.Table: str = NULL
        self.Field: str = '*'
        self.Where: str = '1 = 1'
        self.Order: str = NULL
        self.db.cursor().close()
        self.db.close()

    def prepare(self):
        # noinspection PyBroadException
        try:
            self.db.ping(reconnect=True)
        except:
            self.db = connect(host='127.0.0.1', user='dokemon',
                              password='bYydLFfBbwrbrrmp', db='dokemon', port=3306)
            self.cursor = self.db.cursor(cursors.DictCursor)

    def table(self, table: str):
        self.Table = table
        return self

    def field(self, field: str):
        self.Field = field
        return self

    def where(self, where: str):
        self.Where = where
        return self

    def order(self, order: str):
        self.Order = order
        return self

    def item(self) -> dict or None:
        self.prepare()
        sql = "SELECT %s FROM %s WHERE %s" % (self.Field, self.Table, self.Where)
        if self.Order is not NULL:
            sql += " ORDER BY %s" % self.Order
        sql += ' LIMIT 1'
        self.cursor.execute(sql)
        self.db.commit()
        res = self.cursor.fetchone()
        self.finish()
        return res

    def list(self, num: int = NULL):
        self.prepare()
        sql = "SELECT %s FROM %s WHERE %s" % (self.Field, self.Table, self.Where)
        if self.Order is not NULL:
            sql += " ORDER BY %s" % self.Order
        if num is not NULL:
            sql += " LIMIT %d" % num
        self.cursor.execute(sql)
        self.db.commit()
        res = self.cursor.fetchall()
        self.finish()
        return res

    def count(self) -> int:
        self.prepare()
        sql = "SELECT %s FROM %s WHERE %s" % (self.Field, self.Table, self.Where)
        self.cursor.execute(sql)
        self.db.commit()
        res = self.cursor.rowcount
        self.finish()
        return res

    def page(self, p: int = 1, n: int = 5) -> dict:
        self.prepare()
        sql = "SELECT %s FROM %s WHERE %s" % (self.Field, self.Table, self.Where)
        if self.Order is not NULL:
            sql += " ORDER BY %s" % self.Order
        self.cursor.execute(sql)
        count = self.cursor.rowcount
        sql += " LIMIT %d,%d" % ((p - 1) * n, n)
        self.cursor.execute(sql)
        self.db.commit()
        self.finish()
        res = {'model': self.cursor.fetchall(), 'count': count}
        return res

    def insert(self, **field) -> int:
        self.prepare()
        k, v = '', ''
        for key, value in field.items():
            k += key + ", "
            if isinstance(value, str):
                v += "'" + value + "', "
            else:
                v += str(value) + ", "
        k = k[:-2]
        v = v[:-2]
        sql = "INSERT INTO %s(%s)VALUES (%s)" % (self.Table, k, v)
        self.cursor.execute(sql)
        self.db.commit()
        res = self.cursor.lastrowid
        self.finish()
        return res

    def update(self, **field) -> int:
        self.prepare()
        s = ''
        for key, value in field.items():
            if isinstance(value, str):
                s += key + "='" + value + "', "
            else:
                s += key + '=' + str(value) + ", "
        s = s[:-2]
        sql = "UPDATE %s SET %s WHERE %s" % (self.Table, s, self.Where)
        self.cursor.execute(sql)
        self.db.commit()
        res = self.cursor.rowcount
        self.finish()
        return res

    def search(self, field, words):
        self.prepare()
        sql = "SELECT %s FROM %s WHERE %s LIKE '%s'" % (self.Field, self.Table, field, words)
        self.cursor.execute(sql)
        self.db.commit()
        res = self.cursor.fetchall()
        self.finish()
        return res

    def delete(self):
        self.prepare()
        sql = "DELETE FROM %s WHERE %s" % (self.Table, self.Where)
        self.cursor.execute(sql)
        self.db.commit()
        res = self.cursor.rowcount
        self.finish()
        return res
