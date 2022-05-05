from data.mysql import MySql


class User:
    def __int__(self):
        self.db = MySql()

    def login(self, email: str, password: str):
        res = self.db.table('user').where('email = %s' % email).item()
        if res:
            if res['password'] == password:
                return {'code': 1, 'message': 'success'}
            else:
                return 'password error'
        else:
            self.db.table('user').insert(email=email, password=password)
            return 'success'
