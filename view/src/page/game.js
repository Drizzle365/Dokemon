// noinspection ES6CheckImport

import React from "react";
import {Button, Avatar, Tag} from 'antd';
import './game.css'
import {SERVICE_IMG} from "../config";
import {Outlet, useNavigate} from "react-router-dom";

export default () => {
    const navigate = useNavigate()
    return (
        <div className={'game'}>
            <div className={'main'}>
                <div className={'info'}>
                    <div><Avatar src={SERVICE_IMG + 'logo.png'} size={"large"}
                                 style={{margin: '-20px 0 5px 0'}}></Avatar></div>
                    <div style={{marginBottom: '5px'}}>
                        <Tag style={{marginLeft: '10px'}} color="#f50">Drizzle</Tag>
                    </div>
                </div>
                <div className={'top-nav'}>
                    <Button onClick={() => {
                        navigate('/game/map')
                    }}>地图</Button>
                    <Button>图鉴</Button>
                    <Button>任务</Button>
                    <Button>交易</Button>
                    <Button>签到</Button>
                    <Button>礼包</Button>
                    <Button>活动</Button>
                    <Button>排行</Button>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}