import React from "react";
import {Steps, Button, Tabs, Input, Radio, notification, Card} from 'antd';
import Title from "../component/title";
import {service} from "../config";
import axios from "axios";
import cookie from "react-cookies";

const {Step} = Steps;
const {TabPane} = Tabs;
const openNotification = (message, description) => {
    notification.open({
        message: message, description: description, duration: 2
    });
};

const dokemon = [0, '妙蛙种子', 0, 0, '小火龙', 0, 0, '杰尼龟']
export default class Create extends React.Component {
    constructor(props) {
        super(props);
        axios.get(service + 'role/?token=' + cookie.load('token')).then(
        (res) => {
            if (res.data.code === 0) {
                window.location.href = '/game'
            }
        }
    )
        this.state = {
            step: 0, name: '', sex: '男', dokemon: 1
        };

    }

    render() {
        return (<>
            <Title></Title>
            <div style={{width: '600px', margin: '0 auto', textAlign: 'center'}}>
                <Steps current={this.state.step}>
                    <Step title="训练师信息" description="完善你的训练师信息"/>
                    <Step title="选择豆可梦" description="选择你的第一个伙伴吧"/>
                    <Step title="开始游戏" description="进入豆可梦的世界吧！"/>
                </Steps>
                <Tabs defaultActiveKey='0' activeKey={this.state.step.toString()}>
                    <TabPane key="0">
                        <Input showCount maxLength={12} onChange={(e) => {
                            this.setState({name: e.target.value})
                        }} placeholder="训练师姓名"></Input>
                        <div style={{marginTop: '20px'}}>
                            <img src={service + 'static/img/boy.png'} width={'100px'} height={'240px'} alt={'男孩'}
                                 onClick={() => {
                                     this.setState({sex: '男'})
                                 }}></img>
                            <img src={service + 'static/img/girl.png'} width={'100px'} height={'240px'} alt={'女孩'}
                                 onClick={() => {
                                     this.setState({sex: '女'})
                                 }}></img>
                        </div>
                        <Radio.Group value={this.state.sex}>
                            <Radio value={'男'} style={{margin: '20px'}} onClick={() => {
                                this.setState({sex: '男'})
                            }}>Boy</Radio>
                            <Radio value={'女'} style={{margin: '20px'}} onClick={() => {
                                this.setState({sex: '女'})
                            }}>Girl</Radio>
                        </Radio.Group>
                    </TabPane>
                    <TabPane key="1">
                        <div style={{marginTop: '20px'}}>
                            <img style={{margin: '40px'}} src={service + 'static/img/pokemon/1.gif'} alt={'妙蛙种子'}
                                 onClick={() => {
                                     this.setState({dokemon: 1})
                                 }}></img>
                            <img style={{margin: '40px'}} src={service + 'static/img/pokemon/4.gif'} alt={'小火龙'}
                                 onClick={() => {
                                     this.setState({dokemon: 4})
                                 }}></img>
                            <img style={{margin: '40px'}} src={service + 'static/img/pokemon/7.gif'} alt={'杰尼龟'}
                                 onClick={() => {
                                     this.setState({dokemon: 7})

                                 }}></img>
                        </div>
                        <Radio.Group value={this.state.dokemon}>
                            <Radio value={1} style={{margin: '20px'}} onClick={() => {
                                this.setState({dokemon: 1})
                            }}>妙蛙种子</Radio>
                            <Radio value={4} style={{margin: '20px'}} onClick={() => {
                                this.setState({dokemon: 4})
                            }}>小火龙</Radio>
                            <Radio value={7} style={{margin: '20px'}} onClick={() => {
                                this.setState({dokemon: 7})
                            }}>杰尼龟</Radio>
                        </Radio.Group>
                    </TabPane>
                    <TabPane key="2">
                        <img src={service + 'static/img/dmbs.png'} alt={'大木博士'} width={'100px'}/>
                        <Card title="年轻的训练师，你好：" bordered={false} style={{textAlign: 'left'}}>
                            我是宝可梦图鉴的创作者之一，同时也将会在豆可梦的世界指导训练师们变成世界一流的豆可梦训练家！
                            你已经选择了你的第一位豆可梦伙伴：<span style={{color: 'red'}}>{dokemon[this.state.dokemon]}</span>，
                            他将会在接下来很长一段时间内跟随着你，直到你变得足够强大，如果你已经准备好了，等会去豆可梦研究所找我叭！
                        </Card>
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
        </>)
    }

    change_step(val) {
        const temp = this.state.step + val
        if (this.state.name.trim() === '') {
            return openNotification('警告:', '亲爱的召唤师，我还不知道你的名字呢！')
        }
        if (temp < 0) {
            return 0
        } else if (temp <= 2) {
            this.setState({
                step: temp
            })
        } else {
            this.create()
        }
    }

    create() {
        axios.post(service + 'role/create?token=' + cookie.load('token'), {
            name: this.state.name, sex: this.state.sex, dokemon: this.state.dokemon
        }).then((r) => {
            console.log(r)
        })
        openNotification('通知：', '你的档案已经录入在豆可梦训练师协会啦，开始您的冒险之旅吧！')
    }
}