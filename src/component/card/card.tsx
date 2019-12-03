import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import "./card.css"
import Split from "../split/split"
import { withRouter } from "react-router-dom"
import { IDepartment } from "../../interface/list"
import { ICardProps } from "../../interface/card"

function Card(props: ICardProps) {
    const [department, setDepartment] = useState("")
    useEffect(() => {
        let dName = props.data.name
        setDepartment(dName)
    }, [])
    function goDetail(item: IDepartment) {

        let desc = `${department}${item.position_id === 1 ? "主任" : "副主任"}--${item.name}`
        props.history.push(`/detail/${props.pwd}/${item.candidate_id}/${item.department_id}/${desc}`)
    }
    return (
        <div className="card">
            <div className="card-header clearFix">
                <div>{props.data.name}</div>
            </div>
            <div className="main">
                {
                    (props.data.candidateFrontFormList as any).map((item: any, i: number) => {
                        return (<div className="item" key={i}>
                            <div className="name">
                                <p>
                                    {item.position_id === 1 ? "主任:" : "副主任:"}
                                </p>
                                <p>
                                    {item.name}
                                </p>
                            </div>
                            {
                                item.save_status === "2" ?
                                    <Button onClick={() => { goDetail(item) }} type="primary" shape="round" style={{ backgroundColor: "#11ACF7" }}>进入评价</Button> :
                                    <Button onClick={() => { goDetail(item) }} type="danger" shape="round" style={{ backgroundColor: "rgba(229, 28, 35, 0.64)" }}>已经评价</Button>
                            }
                        </div>)
                    })
                }
            </div>

            <Split />
        </div>
    )
}

export default withRouter(Card)
