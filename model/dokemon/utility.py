import model.json

dokemon = model.json.JsonSelect('dokemon', '../../')


def ability(did, lv):
    d = dokemon.get_dokemon(did)
    d['LV'] = lv
    d['HP'] = int(int(d['HP']) * 2 * lv / 100 + lv + 10 + 0.5)
    d['AT'] = int(int(d['AT']) * 2 * lv / 100 + 5 + 0.5)
    d['DF'] = int(int(d['DF']) * 2 * lv / 100 + 5 + 0.5)
    d['SA'] = int(int(d['SA']) * 2 * lv / 100 + 5 + 0.5)
    d['SD'] = int(int(d['SD']) * 2 * lv / 100 + 5 + 0.5)
    d['SP'] = int(int(d['SP']) * 2 * lv / 100 + 5 + 0.5)
    return d
