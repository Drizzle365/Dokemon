import React from "react";
import {Button, notification} from 'antd';
import axios from "axios";
import {service} from "../config";
import cookie from "react-cookies";
import Title from "../component/title";


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
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (<>
            <Title></Title>
            <div style={form}>
                <div>
                    <span>邮箱：</span>
                    <input style={input} type={"text"} onChange={(e) => {
                        this.setState({email: e.target.value})
                    }}/>
                </div>
                <div>
                    <span>密码：</span>
                    <input style={input} type={"password"} onChange={(e) => {
                        this.setState({password: e.target.value})
                    }}/>
                </div>
                <Button style={{marginTop: '10px'}} onClick={this.token}>登录
                </Button>
            </div>
        </>)
    }

    token = () => {
        const email = this.state.email;
        const password = this.state.password;
        if (email.trim() === '' || password.trim() === '')
            return openNotification('提示：', '请输入您的邮箱和密码！');
        axios.post(service + 'token', {email: email, password: password}).then(
            (res) => {
                openNotification('登录：', res.data['msg'])
                if (res.data.code === 0) {
                    cookie.save('token', res.data.token)
                    this.jump(res.data.token)
                }
            }
        )
    }

    jump(token) {
        axios.get(service + 'role/?token=' + token).then(
            (res) => {
                if (res.data.code === 0) {
                    this.props.navigate('/game')
                } else {
                    this.props.navigate('/create')
                }
            }
        )
    }
}