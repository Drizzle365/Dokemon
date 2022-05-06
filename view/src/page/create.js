import React from "react";
import {Steps, Button, Tabs, Input, Radio} from 'antd';
import Title from "../component/title";
import {service} from "../config";

const {Step} = Steps;
const {TabPane} = Tabs;
export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            name: '',
            sex: '男',
            dokemon: 1
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
                            <Input placeholder="召唤师姓名"></Input>
                            <div style={{marginTop: '20px'}}>
                                <img src={service + 'static/img/boy.png'} width={'100px'} height={'240px'} alt={'男孩'}
                                     onClick={() => {
                                         this.change_sex('男')
                                     }}></img>
                                <img src={service + 'static/img/girl.png'} width={'100px'} height={'240px'} alt={'女孩'}
                                     onClick={() => {
                                         this.change_sex('女')
                                     }}></img>
                            </div>
                            <Radio.Group value={this.state.sex}>
                                <Radio value={'男'} style={{margin: '20px'}} onClick={() => {
                                    this.change_sex('男')
                                }}>Boy</Radio>
                                <Radio value={'女'} style={{margin: '20px'}} onClick={() => {
                                    this.change_sex('女')
                                }}>Girl</Radio>
                            </Radio.Group>
                        </TabPane>
                        <TabPane key="1">
                            <div style={{marginTop: '20px'}}>
                                <img style={{margin: '40px'}} src={service + 'static/img/pokemon/1.gif'} alt={'妙蛙种子'}
                                     onClick={() => {
                                         this.change_dokemon(1)
                                     }}></img>
                                <img style={{margin: '40px'}} src={service + 'static/img/pokemon/4.gif'} alt={'小火龙'}
                                     onClick={() => {
                                         this.change_dokemon(4)
                                     }}></img>
                                <img style={{margin: '40px'}} src={service + 'static/img/pokemon/7.gif'} alt={'杰尼龟'}
                                     onClick={() => {
                                         this.change_dokemon(7)
                                     }}></img>
                            </div>
                            <Radio.Group value={this.state.dokemon}>
                                <Radio value={1} style={{margin: '20px'}} onClick={() => {
                                    this.change_dokemon(1)
                                }}>妙蛙种子</Radio>
                                <Radio value={4} style={{margin: '20px'}} onClick={() => {
                                    this.change_dokemon(4)
                                }}>小火龙</Radio>
                                <Radio value={7} style={{margin: '20px'}} onClick={() => {
                                    this.change_dokemon(7)
                                }}>杰尼龟</Radio>
                            </Radio.Group>
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

    change_sex(val) {
        this.setState({sex: val})
    }

    change_dokemon(val) {
        this.setState({dokemon: val})
    }

}