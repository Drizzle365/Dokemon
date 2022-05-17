import {Spin} from "antd";
import React from "react";

export default () => {
    return (
        <div className={loading}>
            <div style={{position: 'absolute', top: '50%', marginTop: '-60px', left: 0, right: 0}}>
                <Spin size={"large"}>Dokemon</Spin>
            </div>
        </div>
    )
}