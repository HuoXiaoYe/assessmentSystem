import React from 'react';
import { Button } from 'antd';
import "./card.css"
import Split from "../split/split"

function Card() {
    return (
        <div className="card">
            <div className="card-header clearFix">
                <div>威海校区办公部门一</div>
            </div>
            <div className="main">
                {
                    Array(3).fill(1).map((item, i) => {
                        return (<div className="item" key={i}>
                            <div className="name">
                                <p>
                                    主任：
                           </p>
                                <p>
                                    张团结
                           </p>
                            </div>
                            <Button type={i % 2 === 0 ? "primary" : "danger"} shape="round" style={{ backgroundColor: i % 2 === 0 ? "#11ACF7" : "rgba(229, 28, 35, 0.64)" }}>进入评价</Button>
                            {/* <Button type="primary" shape="round" style={{ backgroundColor: "#11ACF7" }}>进入评价</Button> */}
                        </div>)
                    })
                }
            </div>

            <Split />
        </div>
    )
}

export default Card
