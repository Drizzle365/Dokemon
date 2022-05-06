import React from "react";
import {Steps, Button, Tabs} from 'antd';
import Title from "../component/title";

const {Step} = Steps;
const {TabPane} = Tabs;
export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0
        };
    }

    render() {
        return (
            <>
                <Title></Title>
                <div style={{width: '600px', margin: '0 auto', textAlign: 'center'}}>
                    <Steps current={this.state.step}>
                        <Step title="召唤师信息" description="完善你的召唤师信息"/>
                        <Step title="选择豆可梦" description="选择你的第一个伙伴吧"/>
                        <Step title="开始游戏" description="进入豆可梦的世界吧！"/>
                    </Steps>
                    <Tabs defaultActiveKey='0' activeKey={this.state.step.toString()}>
                        <TabPane key="0">

                        </TabPane>
                        <TabPane key="1">

                        </TabPane>
                        <TabPane key="2">

                        </TabPane>
                    </Tabs>
                    <div>
                        <Button style={{margin: '15px'}} type={"primary"} danger onClick={() => {
                            this.change_step(-1)
                        }}>上一步</Button>
                        <Button style={{margin: '15px'}} type={"primary"} onClick={() => {
                            this.change_step(1)
                        }}>下一步</Button>
                    </div>
                </div>
            </>
        )
    }

    change_step(val) {
        const temp = this.state.step + val
        if (temp > 2 || temp < 0) {
            return 0
        } else {
            this.setState({
                step: temp
            })
        }

    }

}