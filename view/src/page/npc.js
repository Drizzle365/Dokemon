import React, {useState, useEffect} from "react";
import axios from "axios";
import {SERVICE, SERVICE_IMG} from "../config";
import {useParams} from "react-router-dom";
import cookie from "react-cookies";
import {Button} from "antd";

export default () => {
    const {nid} = useParams()
    const [npc, setNpc] = useState({
        name: '',
        depiction: '',
        talk: '',
    })
    const [talk, setTalk] = useState('')
    const [talkState, setTalkState] = useState(0)

    async function init() {
        let role_res = (await axios.get(SERVICE + 'role/?token=' + cookie.load('token'))).data
        let task_res = (await axios.get(SERVICE + 'json/task?tid=' + role_res.role['task'])).data
        let npc_res = (await axios.get(SERVICE + 'json/npc?nid=' + nid)).data
        if (task_res['npc'] === nid && role_res.role['task_state'] === 0) {
            setTalk(task_res['talk1'].replaceAll('<name>', role_res.role['name']))
            setTalkState(1)
        } else if (task_res['target'] === nid && role_res.role['task_state'] === 2) {
            setTalk(task_res['talk2'].replaceAll('<name>', role_res.role['name']))
            setTalkState(2)
        } else {
            setTalk(npc_res['talk'].replaceAll('<name>', role_res.role['name']))
        }
        setNpc({...npc_res})
        return npc_res['id']
    }

    useEffect(() => {
        init().then(r => (r))
    }, [])
    return (
        <>
            <div className={'npc'}>
                <div className={'right'}>
                    <img src={SERVICE_IMG + 'npc/' + nid + '.png'} alt={npc.name}/>
                    <span>{npc.name}</span>
                </div>
                <p>{talk}</p>
            </div>
            <h3 className={'mainTop'}>{npc.depiction}</h3>
            <div style={{position: 'absolute', bottom: '20px', right: 0, left: 0}}>
                {talkState === 1 ? <Button><span role={'img'} aria-label={'happy'}>😊</span>接受任务</Button> : ''}
                {talkState === 2 ? <Button><span role={'img'} aria-label={'happy'}>😊</span>完成任务</Button> : ''}
            </div>
        </>
    )
}