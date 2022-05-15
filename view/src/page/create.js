// noinspection ES6CheckImport

import React, {useState} from "react";
import {Steps, Button, Tabs, Input, Radio, notification, Card} from 'antd';
import Title from "../component/title";
import {SERVICE, SERVICE_IMG} from "../config";
import axios from "axios";
import cookie from "react-cookies";
import {useNavigate} from "react-router-dom";


const {Step} = Steps;
const {TabPane} = Tabs;
const openNotification = (message, description) => {
    notification.open({
        message: message, description: description, duration: 2
    });
};

const DOKEMON = [0, '妙蛙种子', 0, 0, '小火龙', 0, 0, '杰尼龟']
export default () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(0);
    const [name, setName] = useState('');
    const [sex, setSex] = useState('男');
    const [dokemon, setDokemon] = useState(1);
    axios.get(SERVICE + 'role/?token=' + cookie.load('token')).then(
        (res) => {
            if (res.data.code === 0) {
                navigate('/game/map')
            }
        }
    )
    const changeStep = (val) => {
        const temp = step + val
        if (name.trim() === '') {
            return openNotification('警告:', '亲爱的召唤师，我还不知道你的名字呢！')
        }
        if (temp < 0) {
            return 0
        } else if (temp <= 2) {
            setStep(temp)
        } else {
            create()
        }
    }
    const create = () => {
        axios.post(SERVICE + 'role/create?token=' + cookie.load('token'), {
            name: name, sex: sex, dokemon: dokemon
        }).then(() => {
            openNotification('通知：', '你的档案已经录入在豆可梦训练师协会啦，开始您的冒险之旅吧！')
            navigate('/game/map')
        })
    }
    return (<>
        <Title></Title>
        <div className={'create'}>
            <Steps current={step}>
                <Step title="训练师信息" description="完善你的训练师信息"/>
                <Step title="选择豆可梦" description="选择你的第一个伙伴吧"/>
                <Step title="开始游戏" description="进入豆可梦的世界吧！"/>
            </Steps>
            <Tabs defaultActiveKey='0' activeKey={step.toString()}>
                <TabPane key="0">
                    <Input showCount maxLength={12} onChange={(e) => {
                        setName(e.target.value)
                    }} placeholder="训练师姓名"></Input>
                    <div style={{marginTop: '20px'}}>
                        <img src={SERVICE_IMG + 'boy.png'} width={'100px'} height={'240px'} alt={'男孩'}
                             onClick={() => {
                                 setSex('男')
                             }}></img>
                        <img src={SERVICE_IMG + 'girl.png'} width={'100px'} height={'240px'} alt={'女孩'}
                             onClick={() => {
                                 setSex('女')
                             }}></img>
                    </div>
                    <Radio.Group value={sex}>
                        <Radio value={'男'} style={{margin: '20px'}} onClick={() => {
                            setSex('男')
                        }}>Boy</Radio>
                        <Radio value={'女'} style={{margin: '20px'}} onClick={() => {
                            setSex('女')
                        }}>Girl</Radio>
                    </Radio.Group>
                </TabPane>
                <TabPane key="1">
                    <div style={{marginTop: '20px'}}>
                        <img style={{margin: '40px'}} src={SERVICE_IMG + 'pokemon/1.gif'} alt={'妙蛙种子'}
                             onClick={() => {
                                 setDokemon(1)
                             }}></img>
                        <img style={{margin: '40px'}} src={SERVICE_IMG + 'pokemon/4.gif'} alt={'小火龙'}
                             onClick={() => {
                                 setDokemon(4)
                             }}></img>
                        <img style={{margin: '40px'}} src={SERVICE_IMG + 'pokemon/7.gif'} alt={'杰尼龟'}
                             onClick={() => {
                                 setDokemon(7)
                             }}></img>
                    </div>
                    <Radio.Group value={dokemon}>
                        <Radio value={1} style={{margin: '20px'}} onClick={() => {
                            setDokemon(1)

                        }}>妙蛙种子</Radio>
                        <Radio value={4} style={{margin: '20px'}} onClick={() => {
                            setDokemon(4)

                        }}>小火龙</Radio>
                        <Radio value={7} style={{margin: '20px'}} onClick={() => {
                            setDokemon(7)
                        }}>杰尼龟</Radio>
                    </Radio.Group>
                </TabPane>
                <TabPane key="2">
                    <img src={SERVICE_IMG + 'npc/1.png'} alt={'大木博士'} width={'100px'}/>
                    <Card title="年轻的训练师，你好：" bordered={false} style={{textAlign: 'left'}}>
                        我是宝可梦图鉴的创作者之一，同时也将会在豆可梦的世界指导训练师们变成世界一流的豆可梦训练家！
                        你已经选择了你的第一位豆可梦伙伴：<span style={{color: 'red'}}>{DOKEMON[dokemon]}</span>，
                        他将会在接下来很长一段时间内跟随着你，直到你变得足够强大，如果你已经准备好了，等会去豆可梦研究所找我叭！
                    </Card>
                </TabPane>
            </Tabs>
            <div>
                <Button style={{margin: '15px'}} type={"primary"} danger onClick={() => {
                    changeStep(-1)
                }}>上一步</Button>
                <Button style={{margin: '15px'}} type={"primary"} onClick={() => {
                    changeStep(1)
                }}>下一步</Button>
            </div>
        </div>
    </>)
}