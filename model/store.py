from model.mysql import MySql


class Store:
    def __init__(self):
        self.db = MySql()
