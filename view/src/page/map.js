import React, {useState, useEffect} from "react";
import axios from "axios";
import {SERVICE, SERVICE_IMG} from "../config";
import cookie from "react-cookies";
import {Link} from "react-router-dom";

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
        name: '',
        depiction: '',
        npc: ''
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
            <h2>{map.name}</h2>
            <p>{map.depiction}</p>
            <h2>这里有:</h2>
            <h3 className={'link'}><img style={{height: '25px', margin: '2px'}} alt={'!'} src={SERVICE_IMG + 'ui/!.png'}/>{map.npc}</h3>
        </div>
    )
}