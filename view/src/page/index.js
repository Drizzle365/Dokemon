// noinspection ES6CheckImport

import React, {useState} from "react";
import {Button, Input} from 'antd';
import axios from "axios";
import {SERVICE} from "../config";
import cookie from "react-cookies";
import Title from "../component/title";
import {useNavigate} from "react-router-dom";
import openNotification from "../component/notification"

const form = {
    marginTop: '80px', textAlign: 'center',
}


export default () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const token = () => {
        if (email.trim() === '' || password.trim() === '') return openNotification('提示：', '请输入您的邮箱和密码！');
        if (!(/^([a-zA-Z\d_-])+@([a-zA-Z\d_-])+(.[a-zA-Z\d_-])+/).test(email))
            return openNotification('提示：', '邮箱格式错误!')
        axios.post(SERVICE + 'token', {email: email, password: password}).then((res) => {
            openNotification('登录：', res.data['msg'])
            if (res.data.code === 0) {
                cookie.save('token', res.data.token)
                jump(res.data.token)
            }
        })
    }

    const jump = (token) => {
        axios.get(SERVICE + 'role/?token=' + token).then((res) => {
            if (res.data.code === 0) {
                navigate('/game/map')
            } else {
                navigate('/create')
            }
        })
    }
    return (<>
        <Title></Title>
        <div style={form}>
            <div style={{margin: '10px'}}>
                <span>邮箱：</span>
                <Input style={{width: '200px'}} type={'email'} onChange={(e) => {
                    setEmail(e.target.value)
                }}></Input>
            </div>
            <div style={{margin: '10px'}}>
                <span>密码：</span>
                <Input style={{width: '200px'}} type={'password'} onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
            </div>
            <Button style={{marginTop: '10px'}} onClick={token}>登录
            </Button>
            <h6 style={{marginTop: '5px'}}>提示：首次登录会自动注册账号</h6>
        </div>
    </>)
}
