// noinspection ES6CheckImport

import React from "react";

import {SERVICE, SERVICE_IMG} from "../config";
import {Outlet, useNavigate} from "react-router-dom";
import {Button, notification} from "antd";
import axios from "axios";
import cookie from "react-cookies";

const openNotification = (message, description) => {
    notification.open({
        message: message, description: description, duration: 2
    });
};
export default () => {
    const navigate = useNavigate()
    const sign = () => {
        axios.get(SERVICE + 'role/sign?token=' + cookie.load('token')).then(r => {
            openNotification('签到：', r.data['msg'])
        })
    }
    return (<div className={'game'}>
        <div className={'main'}>
            <Outlet/>
        </div>
        <div>
            <Button onClick={() => {
                navigate('/game/map')
            }}>地图</Button>
            <Button>角色</Button>
            <Button>豆可梦</Button>
        </div>

        <div className={'bottom_bar'}>
            <div className={'chat'}>
                <p><span style={{display: 'inline', color: 'blue'}}>系统</span>：欢迎来到豆可梦的世界！</p>
            </div>
            <div>
                <span className={'bottomBr'}>
                    <img onClick={sign} className={'buttonImg'} src={SERVICE_IMG + 'ui/qd.png'} alt={'签到'}/>
                    <img className={'buttonImg'} src={SERVICE_IMG + 'ui/bb.png'} alt={'背包'}/>
                    <img className={'buttonImg'} src={SERVICE_IMG + 'ui/cj.png'} alt={'抽奖'}/>
                    <img className={'buttonImg'} src={SERVICE_IMG + 'ui/fl.png'} alt={'福利'}/>
                </span>
                <span className={'bottomBr'}>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/jj.png'} alt={'竞技'}/>
                <img onClick={() => {
                    navigate('/game/task')
                }} className={'buttonImg'} src={SERVICE_IMG + 'ui/rw.png'} alt={'任务'}/>
                <img className={'buttonImg'} src={SERVICE_IMG + 'ui/sd.png'} alt={'商城'}/>
                <img onClick={() => {
                    navigate('/game/announcement')
                }} className={'buttonImg'} src={SERVICE_IMG + 'ui/gg.png'} alt={'公告'}/>
                </span>
            </div>
        </div>
    </div>)
}