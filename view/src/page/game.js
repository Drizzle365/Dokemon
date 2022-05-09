import React from "react";
import {Button} from 'antd';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div>
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