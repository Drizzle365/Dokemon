import React, {useState, useEffect} from "react";
import axios from "axios";
import {SERVICE, SERVICE_IMG} from "../config";
import cookie from "react-cookies";
// noinspection ES6CheckImport
import {useNavigate} from "react-router-dom";
import {Button} from "antd";
import Loading from "../component/loading";

export default () => {
    const navigate = useNavigate()
    const [mmap, setMap] = useState({
        name: '', depiction: '', npc: '', npc_list: false, dokemon_list: false, N: false, E: false, S: false, W: false
    })
    const [task, setTask] = useState({})
    const [loading, setLoading] = useState(true)

    async function init() {
        let roleRes = (await axios.get(SERVICE + 'role/?token=' + cookie.load('token'))).data
        let mapRes = (await axios.get(SERVICE + 'json/map?mid=' + roleRes.role['map'])).data
        let taskRes = (await axios.get(SERVICE + 'json/task?tid=' + roleRes.role['task'])).data
        setMap({...mapRes})
        setTask({...taskRes})
    }

    useEffect(() => {
        init().then(() => {
            setLoading(false)
        })
    }, [])
    const move = (d) => {
        setLoading(true)
        axios.get(SERVICE + 'role/move?token=' + cookie.load('token') + '&d=' + d).then(() => {
            init().then(() => {
                setLoading(false)
            })
        })

    }
    return (<div>
        <Loading loading={loading}></Loading>
        <h1 className={'mainTop'}>{mmap.name}</h1>
        <p>{mmap.depiction}</p>
        <h2>这里有:</h2>
        <div>{mmap.npc_list ? mmap.npc_list.map((item, index) => (<span key={index} onClick={() => {
            navigate('/game/npc/' + item)
        }} className={'link'}>{item === task['npc'] ? <img style={{height: '25px', margin: '2px'}} alt={'!'}
                                                           src={SERVICE_IMG + 'ui/!.png'}/> : ""}{item}</span>)) : '加载中'}</div>
        <div>
            {mmap.dokemon_list ? mmap.dokemon_list.map((item, index) => (<span key={index} onClick={() => {
                console.log(item)
            }} className={'link'} style={{color: '#32327a'}}><img style={{height: '25px', margin: '2px'}} alt={'!'}
                                                                  src={SERVICE_IMG + 'pokemon/front/' + item.id + '.gif'}/>{item.name}( lv.{item['lv']} )</span>)) : '加载中'}
        </div>
        <div style={{marginTop: '20px', backgroundColor: 'salmon', padding: '12px', borderRadius: '0 0 20px 20px'}}>
            <div>
                {mmap['N'] ? <Button onClick={() => {
                    move(0)
                }}>↑ {mmap['N']}</Button> : ''}
            </div>
            <div>
                {mmap['W'] ? <Button onClick={() => {
                    move(3)
                }}>← {mmap['W']}</Button> : ''}
                {mmap['E'] ? <Button onClick={() => {
                    move(1)
                }}>→ {mmap['E']}</Button> : ''}
            </div>
            <div>
                {mmap['S'] ? <Button onClick={() => {
                    move(2)
                }}>↓ {mmap['S']}</Button> : ''}
            </div>
        </div>
    </div>)
}