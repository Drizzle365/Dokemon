import React, {useState, useEffect} from "react";
import axios from "axios";
import {SERVICE, SERVICE_IMG} from "../config";
import {useParams} from "react-router-dom";

export default () => {
    const {nid} = useParams()
    const [npc, setNpc] = useState({
        name: '',
        depiction: '',
        talk: ''
    })
    useEffect(() => {
        axios.get(SERVICE + 'json/npc?nid=' + nid).then(r => {
            setNpc({...r.data})
        })
    }, [])
    return (
        <>
            <div className={'npc'}>
                <div className={'right'}>
                    <img src={SERVICE_IMG + 'npc/' + nid + '.png'} alt={npc.name}/>
                    <span>{npc.name}</span>
                </div>
                <p>{npc.talk}</p>
            </div>
            <h3 className={'main_top'}>{npc.depiction}</h3>
        </>
    )
}