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
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/bb.png'} alt={'公告'}/>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/cj.png'} alt={'公告'}/>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/fl.png'} alt={'公告'}/>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/jj.png'} alt={'公告'}/>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/qd.png'} alt={'公告'}/>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/rw.png'} alt={'公告'}/>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/sd.png'} alt={'公告'}/>
            </div>
            <div className={'main'}>
                游戏内容区域<Outlet/>
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