import React, { useState } from 'react';

import Split from "../../component/split/split"
import "./detail.css"
import { Radio, Input, Button } from 'antd';
import { IDetail, IResult, indicatorsArr } from "../../interface/detail"
import { handleAssessment } from "./detail_ts"

const { TextArea } = Input;



function Detail(props: IDetail) {
    const [result, setResult] = useState<IResult>({
        "val4-1": 0,
        "val4-2": 0,
        "val4-3": 0,
        "val4-4": 0,
        "val4-5": 0,
        "val4-6": 0,
        "val1-101": "",
        "val1-102": "",
    })
    const [keys] = useState<string[]>(Object.keys(result))
    return (
        <div>
            <Split />
            <div className="detail-container">

                <div className="detail-header">
                    <span style={{ color: "#000", fontSize: ".32rem" }}>{props.match.params.desc}</span>
                </div>
                <div className="main">
                    {
                        indicatorsArr.map((item, i) => {

                            return (
                                <div className="item" key={i}>
                                    <div className="leading">{item}</div>
                                    <div className="choice">
                                        <Radio.Group size="large" onChange={onChange} name={keys[i]} value={result[keys[i]]}>
                                            {/* <Radio.Group size="large" onChange={onChange} name={keys[i]} value={checked}> */}
                                            <Radio value={1}>优秀={keys.length}</Radio>
                                            <Radio value={2}>合格</Radio>
                                            <Radio value={3}>基本合格</Radio>
                                            <Radio style={{ marginTop: ".3rem" }} value={4}>不合格</Radio>
                                            <Radio style={{ marginTop: ".3rem" }} value={5}>不了解</Radio>
                                        </Radio.Group>
                                        <div style={{ display: i === (indicatorsArr.length - 1) && result["val4-6"] === 4 ? "block" : "none", marginTop: ".2rem" }} className="down-standard">
                                            <TextArea onChange={handleLowStand} placeholder="若总体评价为不合格则必填此处,500字以内" rows={6} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                <div className="detail-footer">
                    <div className="detail-suggestion">
                        <p><span style={{ color: "red" }}>意见和建议</span>(500字以内,选填):</p>
                    </div>
                    <TextArea rows={6} onChange={handleSuggestion} />
                    <div className="save">
                        <Button type="primary" onClick={saveData}>暂存此页</Button>
                    </div>
                </div>
            </div>
        </div>
    )
    function onChange(e: any) {
        result[e.target.name] = e.target.value
        let temp = { ...result }
        setResult(temp)
    }
    function handleLowStand(e: any) {
        result["val1-101"] = e.target.value
        let temp = { ...result }
        setResult(temp)
    }
    function handleSuggestion(e: any) {
        result["val1-102"] = e.target.value
        let temp = { ...result }
        setResult(temp)
    }

    async function saveData() {
        let data = {
            pwd: props.match.params.pwd,
            candidate_id: props.match.params.candidate_id,
            result: {
                ...result
            }
        }
        console.log("data=======",data)
        let rs = await handleAssessment(data)
        console.log(rs)
    }
}

export default Detail;
