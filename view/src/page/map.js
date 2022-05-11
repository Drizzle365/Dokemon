import React from "react";
import axios from "axios";
import {SERVICE} from "../config";
import cookie from "react-cookies";

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: {
                coin: '',
                designation: '',
                diamond: '',
                map: '',
                name: '',
                sex: '',
                uid: ''
            },
            map: {
                name: ''
            }
        };
    }

    componentDidMount() {
        this.init()
    }

    init() {
        this.get_info()
    }

    render() {
        return (
            <div>
                <h2 style={{textAlign: 'left'}}>{this.state.map.name}</h2>
            </div>
        )
    }

    get_info() {
        axios.get(SERVICE + 'role?token=' + cookie.load('token')).then(r => {
            this.setState({role: r.data.role})
            axios.get(SERVICE + 'map?mid=' + this.state.role.map).then(r => {
                this.setState({map: r.data})
                console.log(this.state.map.name)
            })
        })

    }


}