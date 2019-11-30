import React, { useState } from 'react';

import Split from "../../component/split/split"
import "./detail.css"
import { Radio } from 'antd';

function Detail() {
    const [value, setValue] = useState(1)
    return (
        <div>
            <Split />
            <div className="detail-container">

                <div className="detail-header">
                    考核人5：<span style={{ color: "#000", fontSize: ".32rem" }}>管理办公室副主任---霍小叶</span>
                </div>
                <div className="main">
                    {
                        ["德", "能", "勤", "绩", "廉", "总体评价"].map((item, i) => {
                            return (
                                <div className="item" key={i}>
                                    <div className="leading">{item}</div>
                                    <div className="choice">
                                        <Radio.Group size="large" onChange={onChange} value={value}>
                                            <Radio value={1}>优秀</Radio>
                                            <Radio value={2}>合格</Radio>
                                            <Radio value={3}>基本合格</Radio>
                                            <Radio style={{marginTop:".3rem"}} value={4}>不合格</Radio>
                                            <Radio style={{marginTop:".3rem"}} value={5}>不了解</Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
    function onChange(e:any) {
        setValue(e.target.value)
    }
}

export default Detail;
