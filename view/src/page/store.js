import React, {useEffect, useState} from "react";
import {Avatar, List} from 'antd';
import axios from "axios";
import {SERVICE} from "../config";
import Loading from "../component/loading";

export default () => {
    const [loading, setLoading] = useState(true)
    const [store, setStore] = useState([{'name': '', 'depiction': ''}])

    async function init() {
        let res = (await axios.get(SERVICE + 'query/store')).data
        setStore(Object.values(res))
    }

    useEffect(() => {
        init().then(() => {
            setLoading(false)
        })
    }, [])
    return (
        <>
            <Loading loading={loading}></Loading>
            <List style={{textAlign: 'left'}}
                  itemLayout="horizontal"
                  dataSource={store}
                  renderItem={(item) => (
                      <List.Item actions={[<a key="see">查看详情</a>, <a key="buy">购买</a>]}>
                          <List.Item.Meta
                              avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                              title={<span>{item['name']}</span>}
                              description="一件商品"
                          />
                      </List.Item>
                  )}
            />
        </>
    )
}