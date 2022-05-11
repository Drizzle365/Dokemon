// noinspection ES6CheckImport

import React, {useState} from "react";
import {Button, notification} from 'antd';
import axios from "axios";
import {SERVICE} from "../config";
import cookie from "react-cookies";
import Title from "../component/title";
import {useNavigate} from "react-router-dom";

const form = {
    marginTop: '80px', textAlign: 'center'
}
const input = {
    fontSize: '24px', margin: '10px auto', textAlign: 'center'
}
const openNotification = (message, description) => {
    notification.open({
        message: message,
        description: description,
        duration: 2
    });
};


export default () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const token = () => {
        if (email.trim() === '' || password.trim() === '')
            return openNotification('提示：', '请输入您的邮箱和密码！');
        axios.post(SERVICE + 'token', {email: email, password: password}).then(
            (res) => {
                openNotification('登录：', res.data['msg'])
                if (res.data.code === 0) {
                    cookie.save('token', res.data.token)
                    jump(res.data.token)
                }
            }
        )
    }

    const jump = (token) => {
        axios.get(SERVICE + 'role/?token=' + token).then(
            (res) => {
                if (res.data.code === 0) {
                    navigate('/game/map')
                } else {
                    navigate('/create')
                }
            }
        )
    }
    return (<>
        <Title></Title>
        <div style={form}>
            <div>
                <span>邮箱：</span>
                <input style={input} type={"text"} onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
            </div>
            <div>
                <span>密码：</span>
                <input style={input} type={"password"} onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
            </div>
            <Button style={{marginTop: '10px'}} onClick={token}>登录
            </Button>
        </div>
    </>)
}
