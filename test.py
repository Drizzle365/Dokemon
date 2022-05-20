import json
import requests

f = open('model/json/dokemon.json', 'r', encoding='utf-8')
res: dict = json.load(f)
for i in res.keys():
    if '.' in i:
        img = requests.get('https://s.pokeuniv.com/pokemon/sprite/front/%s.gif' % i)
        with open('static/img/pokemon/front/%s.gif' % i, 'wb') as f_img:
            f_img.write(img.content)
        img = requests.get('https://s.pokeuniv.com/pokemon/sprite/back/%s.gif' % i)
        with open('static/img/pokemon/back/%s.gif' % i, 'wb') as f_img:
            f_img.write(img.content)
            print(i)
