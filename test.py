import requests

for i in range(4, 891):
    res = requests.get('https://s.pokeuniv.com/pokemon/sprite/front/%s.gif' % i).content
    f = open('temp/%s.gif' % i, 'wb')
    f.write(res)
    print('第 %s 张图片爬取成功' % i)
