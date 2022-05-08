import React from "react";
import {Spin} from 'antd';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return <h1 style={{textAlign: 'center'}}><Spin/> 开发中</h1>
    }

}