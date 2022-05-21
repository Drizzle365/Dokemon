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
    const [mapRes, setMap] = useState({
        name: '', depiction: '', npc: '', npc_list: false, dokemon_list: false, N: false, E: false, S: false, W: false
    })
    const [loading, setLoading] = useState(true)

    async function init() {
        const res = (await axios.get(SERVICE + 'query/map?token=' + cookie.load('token'))).data
        setMap(res)
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
        <h1 className={'mainTop'}>{mapRes.name}</h1>
        <p>{mapRes.depiction}</p>
        <h2>这里有:</h2>
        <div>
            {mapRes.npc_list ? mapRes.npc_list.map((item, index) => (<span key={index} onClick={() => {
                navigate('/game/npc/' + item)
            }} className={'link'}>{item === mapRes['task']['npc'] ?
                <img style={{height: '25px', margin: '2px'}} alt={'!'}
                     src={SERVICE_IMG + 'ui/!.png'}/> : ""}
                {item}</span>)) : '加载中'}
        </div>
        <div>
            {mapRes.dokemon_list ? mapRes.dokemon_list.map((item, index) => (<span key={index} onClick={() => {
                console.log(item)
            }} className={'link'} style={{color: '#32327a'}}>
                <img style={{height: '25px', margin: '2px'}} alt={'!'}
                     src={SERVICE_IMG + 'pokemon/front/' + item.id + '.gif'}/>
                {item.name}( lv.{item['lv']} )</span>)) : '加载中'}
        </div>
        <div style={{marginTop: '20px', backgroundColor: 'salmon', padding: '12px', borderRadius: '0 0 20px 20px'}}>
            <div>
                {mapRes['N'] ? <Button onClick={() => {
                    move(0)
                }}>↑ {mapRes['N']}</Button> : ''}
            </div>
            <div>
                {mapRes['W'] ? <Button onClick={() => {
                    move(3)
                }}>← {mapRes['W']}</Button> : ''}
                {mapRes['E'] ? <Button onClick={() => {
                    move(1)
                }}>→ {mapRes['E']}</Button> : ''}
            </div>
            <div>
                {mapRes['S'] ? <Button onClick={() => {
                    move(2)
                }}>↓ {mapRes['S']}</Button> : ''}
            </div>
        </div>
    </div>)
}