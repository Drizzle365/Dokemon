// noinspection ES6CheckImport

import React from "react";
import './game.css'
import {SERVICE_IMG} from "../config";
import {Outlet, useNavigate} from "react-router-dom";
import {Button} from "antd";

export default () => {
    const navigate = useNavigate()
    return (
        <div className={'game'}>
            <div>
                <img onClick={() => {
                    navigate('/game/announcement')
                }} className={'buttonImg'} src={SERVICE_IMG + 'ui/gg.png'} alt={'公告'}/>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/bb.png'} alt={'背包'}/>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/cj.png'} alt={'抽奖'}/>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/fl.png'} alt={'福利'}/>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/jj.png'} alt={'竞技'}/>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/qd.png'} alt={'签到'}/>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/rw.png'} alt={'任务'}/>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/sd.png'} alt={'商店'}/>
            </div>
            <div className={'main'}>
                <Outlet/>
            </div>
            <div>
                <Button onClick={() => {
                    navigate('/game/map')
                }}>地图</Button>
                <Button>我的豆可梦</Button>
            </div>
            <div className={'chat'}>
                实时聊天区域
            </div>
        </div>
    )
}