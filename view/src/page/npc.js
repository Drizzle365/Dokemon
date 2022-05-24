// noinspection ES6CheckImport

import React, {useState, useEffect} from "react";
import axios from "axios";
import {SERVICE, SERVICE_IMG} from "../config";
import {useParams} from "react-router-dom";
import cookie from "react-cookies";
import {Button} from "antd";
import Loading from "../component/loading";
import {useNavigate} from "react-router-dom";
import openNotification from "../component/notification"

export default () => {
    const navigate = useNavigate()
    const {npcName} = useParams()
    const [npc, setNpc] = useState({
        name: '',
        depiction: '',
        talk: '',
    })
    const [loading, setLoading] = useState(true)

    async function init() {
        let npcRes = (await axios.get(SERVICE + 'query/npc?token=' + cookie.load('token') + '&name=' + npcName)).data
        if (npcRes['type'] === '特殊')
            navigate('/game/' + npcRes['depiction'])
        else
            setNpc(npcRes)
    }

    useEffect(() => {
        init().then(() => {
            setLoading(false)
        })
    }, [])
    const accept = () => {
        axios.get(SERVICE + 'role/accept_task?token=' + cookie.load('token')).then(r => {
            openNotification('任务提示：', r['data']['msg'])
            setLoading(true)
            init().then(() => {
                setLoading(false)
            })
        })
    }
    return (
        <>
            <Loading loading={loading}></Loading>
            <div className={'npc'}>
                <div className={'right'}>
                    <img src={SERVICE_IMG + 'npc/' + npcName + '.png'} alt={npc.name}/>
                    <span>{npc.name}</span>
                </div>
                <p>{npc['talk']}</p>
            </div>
            <h3 className={'mainTop'}>{npc.depiction}</h3>
            <div style={{position: 'absolute', bottom: '20px', right: 0, left: 0}}>
                {npc['isTask'] === 1 ?
                    <Button onClick={accept}><span role={'img'} aria-label={'happy'}>😊</span>接受任务</Button> : ''}
                {npc['isTask'] === 2 ? <Button><span role={'img'} aria-label={'happy'}>😊</span>完成任务</Button> : ''}
            </div>
        </>
    )
}