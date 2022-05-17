import React, {useState, useEffect} from "react";
import axios from "axios";
import {SERVICE, SERVICE_IMG} from "../config";
import {useParams} from "react-router-dom";
import cookie from "react-cookies";
import {Button, Spin} from "antd";

export default () => {
    const {nid} = useParams()
    const [npc, setNpc] = useState({
        name: '',
        depiction: '',
        talk: '',
    })
    const [talk, setTalk] = useState('')
    const [talkState, setTalkState] = useState(0)
    const [loading, setLoading] = useState('loading')

    async function init() {
        let roleRes = (await axios.get(SERVICE + 'role/?token=' + cookie.load('token'))).data
        let taskRes = (await axios.get(SERVICE + 'json/task?tid=' + roleRes.role['task'])).data
        let npcRes = (await axios.get(SERVICE + 'json/npc?nid=' + nid)).data
        if (taskRes['npc'] === nid && roleRes.role['task_state'] === 0) {
            setTalk(taskRes['talk1'].replaceAll('<name>', roleRes.role['name']))
            setTalkState(1)
        } else if (taskRes['target'] === nid && roleRes.role['task_state'] === 2) {
            setTalk(taskRes['talk2'].replaceAll('<name>', roleRes.role['name']))
            setTalkState(2)
        } else {
            setTalk(npcRes['talk'].replaceAll('<name>', roleRes.role['name']))
        }
        setNpc({...npcRes})
        return npcRes['id']
    }

    useEffect(() => {
        init().then(() => {
            setLoading('loadingClose')
        })
    }, [])
    return (
        <>
            <div className={loading}>
                <div style={{position: 'absolute', top: '50%', marginTop: '-60px', left: 0, right: 0}}>
                    <Spin size={"large"}>Dokemon</Spin>
                </div>
            </div>
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