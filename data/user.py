from data.mysql import MySql


class User:
    def __init__(self):
        self.db = MySql()

    def token(self, email: str, password: str):
        res = self.db.table('user').where("email = '%s'" % email).item()
        if res:
            if res['password'] == password:
                return {'code': 0, 'message': '登录成功！', 'token': res['id']}
            else:
                return {'code': 1, 'message': '登录失败，请检查您的邮箱或者密码是否正确！'}
        else:
            self.db.table('user').insert(email=email, password=str(password))
            return {'code': 0, 'message': '检测到您是第一次登录，已经自动为您注册成功啦！', 'token': res['id']}
