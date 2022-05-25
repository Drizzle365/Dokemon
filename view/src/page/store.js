import React, {useEffect, useState} from "react";
import {Avatar, List, Button, Modal, InputNumber} from 'antd';
import axios from "axios";
import {SERVICE} from "../config";
import Loading from "../component/loading";

export default () => {
    const [loading, setLoading] = useState(true)
    const [store, setStore] = useState([{'name': '', 'depiction': ''}])

    async function init() {
        let res = (await axios.get(SERVICE + 'query/store')).data
        console.log(res)
        setStore(Object.values(res))
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