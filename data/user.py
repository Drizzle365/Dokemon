from data.mysql import MySql
from data import auth


class User:
    def __init__(self):
        self.db = MySql()

    def token(self, email: str, password: str):
        res = self.db.table('user').where("email = '%s'" % email).item()
        if res:
            if auth.check_password(password, res['password']):
                return {'code': 0, 'msg': '登录成功！', 'token': auth.get_token(data={'uid': res['uid']})}
            else:
                return {'code': 1, 'msg': '登录失败，请检查您的邮箱或者密码是否正确！'}
        else:
            uid = self.db.table('user').insert(email=email, password=str(auth.get_password_hash(password)))
            return {'code': 0, 'msg': '检测到您是第一次登录，已经自动为您注册成功啦！', 'token': auth.get_token(data={'uid': uid})}
