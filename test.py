import asyncio

import requests


async def down(url):
    loop_down = asyncio.get_event_loop()
    future = loop_down.run_in_executor(None, requests.get, 'https://s.pokeuniv.com/pokemon/sprite/back/%s.gif' % url)
    res = await future
    print(url)
    f = open('temp/%s.gif' % url, 'wb')
    f.write(res.content)


if __name__ == '__main__':
    task = [down(url) for url in range(1, 802)]
    loop = asyncio.get_event_loop()
    loop.run_until_complete(asyncio.wait(task))
