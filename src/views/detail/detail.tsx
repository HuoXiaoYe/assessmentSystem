import React, { useState, useEffect, useContext } from 'react';

import Split from "../../component/split/split"
import "./detail.css"
import { Radio, Input, Button, message } from 'antd';
import { IDetail, IResult, indicatorsArr } from "../../interface/detail"
import { handleAssessment, getAssessmentRes } from "./detail_ts"

import { storeContext } from "../../store"

const { TextArea } = Input;



function Detail(props: IDetail) {
    const { store } = useContext(storeContext)
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
    useEffect(() => {
        (async () => {
            let res = await getAssessmentRes({
                pwd: props.match.params.pwd,
                candidate_id: props.match.params.candidate_id,
            })
            res.forEach((element: any) => {
                let key = ""
                if (element["val3"] < 10) {
                    key = "val4-" + element["val3"]
                    var val = element["val4"]
                } else {
                    key = "val1-" + element["val3"]
                    var val = element["val1"]
                }
                result[key] = val;
                let temp = { ...result }
                setResult(temp)
            });
        })()
        console.log(result)
    }, [])
    return (
        <div>
            <Split />
            {store.candidate_id}
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
                                            <TextArea value={result["val1-101"]} onChange={handleLowStand} placeholder="若总体评价为不合格则必填此处,500字以内" rows={6} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                <div className="detail-footer">
                    <div className="detail-suggestion">
                        <p><span style={{ color: "red" }}>意见和建议</span>(500字以内,<span style={{ color: "red" }}>选填</span>):</p>
                    </div>
                    <TextArea value={result["val1-102"]} rows={6} onChange={handleSuggestion} />
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
        if (Object.values(result).indexOf(0) !== -1) {
            message.error("您有选项尚未选中");
            return
        }
        if (result["val4-6"] === 4 && result["val1-101"].trim() === "") {
            message.error('请填写您总体评价选为不合格的原因');
            return
        }
        let data = {
            pwd: props.match.params.pwd,
            candidate_id: props.match.params.candidate_id,
            result: {
                ...result
            }
        }
        // console.log("data=======", data)
        let rs = await handleAssessment(data)
        // console.log(JSON.parse(rs)) // {label: "暂存成功", value: "1"}
        if (rs.value.toString() === "1") {
            props.history.push(`/${props.match.params.pwd}`)
            message.success("暂存成功");
        }
    }
}

export default Detail;
