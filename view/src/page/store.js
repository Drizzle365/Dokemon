import React, {useEffect, useState} from "react";
import {Avatar, List, Button, Modal, InputNumber} from 'antd';
import axios from "axios";
import {SERVICE} from "../config";
import Loading from "../component/loading";
import cookie from "react-cookies";

export default () => {
    const [loading, setLoading] = useState(true)
    const [store, setStore] = useState([{'name': '', 'depiction': ''}])
    const [role, setRole] = useState({'coin': ''})

    async function init() {
        let res = (await axios.get(SERVICE + 'query/store?token=' + cookie.load('token'))).data
        console.log(res)
        setStore(Object.values(res['store']))
        setRole({...res['role']})
    }

    useEffect(() => {
        init().then(() => {
            setLoading(false)
        })
    }, [])

    const info = (index) => {
        Modal.info({
            title: store[index]['name'],
            content: (
                <div>
                    <p>{store[index]['depiction']}</p>
                    <p>售价：<span style={{color: 'red'}}>{store[index]['price']}</span> {store[index]['type']}</p>
                </div>
            ),
            okText: '关闭'
        });
    };
    const buy = (index) => {
        Modal.warning({
            title: '购买' + store[index]['name'],
            content: (
                <div>
                    <InputNumber defaultValue={1} onChange={() => {
                    }}></InputNumber>
                    <Button>购买</Button>
                </div>
            ),
            okText: '关闭'
        });
    };
    return (
        <>
            <Loading loading={loading}></Loading>
            <div className={'mainTop'}>小镇商店</div>
            <div>硬币：<span style={{color: 'red'}}>{role['coin']}</span></div>
            <List style={{textAlign: 'left', padding: '10px 20px'}}
                  itemLayout="horizontal"
                  dataSource={store}
                  renderItem={(item, index) => (
                      <List.Item actions={[<span className={'link'} key="see" onClick={() => {
                          info(index)
                      }}>查看详情</span>, <span className={'link'} key="buy" onClick={() => {
                          buy(index)
                      }}>购买</span>]}>
                          <List.Item.Meta
                              avatar={<Avatar size={'large'} src="https://s.pokeuniv.com/item/499.png"/>}
                              title={<span>{item['name']}</span>}
                              description={item['price'] + item['type']}
                          />
                      </List.Item>
                  )}
            />
        </>
    )
}