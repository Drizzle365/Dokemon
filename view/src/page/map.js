import React, {useState, useEffect} from "react";
import axios from "axios";
import {SERVICE, SERVICE_IMG} from "../config";
import cookie from "react-cookies";
// noinspection ES6CheckImport
import {useNavigate} from "react-router-dom";

export default () => {
    const navigate = useNavigate()
    const [role, setRole] = useState({
        coin: '', designation: '', diamond: '', map: '', name: '', sex: '', uid: ''
    });
    const [mmap, setMap] = useState({
        name: '', depiction: '', npc: '', npc_list: false, dokemon_list: false
    })
    useEffect(() => {
        axios.get(SERVICE + 'role?token=' + cookie.load('token')).then(r => {
            setRole({...r.data.role})
            axios.get(SERVICE + 'json/map?mid=' + r.data.role['map']).then(r => {
                setMap({...r.data})
            })
        })
    }, [])
    return (<div>
        <h1 className={'main_top'}>{mmap.name}</h1>
        <p>{mmap.depiction}</p>
        <h2>这里有:</h2>
        <div>{mmap.npc_list ? mmap.npc_list.map((item, index) => (<span key={index} onClick={() => {
            navigate('/game/npc/' + item.id)
        }} className={'link'}><img style={{height: '25px', margin: '2px'}} alt={'!'}
                                   src={SERVICE_IMG + 'ui/!.png'}/>{item.name}</span>)) : '加载中'}</div>
        <div>
            {mmap.dokemon_list ? mmap.dokemon_list.map((item, index) => (<span key={index} onClick={() => {
                console.log(item)
            }} className={'link'} style={{color: '#32327a'}}><img style={{height: '25px', margin: '2px'}}
                                                                  alt={'!'}
                                                                  src={SERVICE_IMG + 'pokemon/' + item.id + '.gif'}/>{item.name}</span>)) : '加载中'}
        </div>
    </div>)
}