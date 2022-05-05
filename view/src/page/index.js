import React from "react";
import {Button, notification} from 'antd';
import axios from "axios";
import {service} from "../config";

const title = {
    color: 'white', backgroundColor: '#6060ba', textAlign: 'center', padding: '10px'
}
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
            <h1 style={title}>Dokemon 豆可梦</h1>
            <div style={form}>
                <div>
                    <span>邮箱：</span>
                    <input style={input} type={"text"} onChange={(e) => {
                        this.setState({email: e.target.value})
                    }}/>
                </div>
                <div>
                    <span>密码：</span>
                    <input style={input} type={"text"} onChange={(e) => {
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
                openNotification('登录：', res.data.message)
            }
        )
    }
}