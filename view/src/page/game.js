import React from "react";
import {Button} from 'antd';
import './game.css'

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'game'}>
                <div className={'top-nav'}>
                    <Button>地图</Button>
                    <Button>设施</Button>
                    <Button>任务</Button>
                    <Button>交易</Button>
                    <Button>签到</Button>
                    <Button>礼包</Button>
                    <Button>活动</Button>
                    <Button>排行</Button>
                </div>
            </div>
        )
    }
}