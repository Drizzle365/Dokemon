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
    const [task, setTask] = useState({})
    const [isTask, setIsTask] = useState(false)

    async function init() {
        let role_res = (await axios.get(SERVICE + 'role?token=' + cookie.load('token'))).data
        let task_res = (await axios.get(SERVICE + 'json/task?tid=' + role_res.role['task'])).data
        let npc_res = (await axios.get(SERVICE + 'json/npc?nid=' + nid)).data
        if (task_res['npc'] === nid) {
            setIsTask(true)
            setTask({...task_res})
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
                {isTask ? <p>{task['talk']}</p> : <p>{npc.talk}</p>}
            </div>
            <h3 className={'main_top'}>{npc.depiction}</h3>
            <div style={{position:'absolute',bottom:'20px',right:0,left:0}}>
                {isTask ? <Button>😊接受任务</Button> : ''}
            </div>
        </>
    )
}