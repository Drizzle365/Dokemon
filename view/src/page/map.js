import React, {useState, useEffect} from "react";
import axios from "axios";
import {SERVICE} from "../config";
import cookie from "react-cookies";

export default () => {
    const [role, setRole] = useState({
        coin: '',
        designation: '',
        diamond: '',
        map: '',
        name: '',
        sex: '',
        uid: ''
    });
    const [map, setMap] = useState({
        name: ''
    })
    const getInfo = () => {
        axios.get(SERVICE + 'role?token=' + cookie.load('token')).then(r => {
            setRole({...r.data.role})
            axios.get(SERVICE + 'map?mid=' + r.data.role.map).then(r => {
                setMap({...r.data})
            })
        })
    }
    useEffect(() => {
        getInfo();
    }, [])
    return (
        <div>
            <h2 style={{textAlign: 'left'}}>{map.name}</h2>
            <h2 style={{textAlign: 'left'}}>{role.name}</h2>

        </div>
    )

}