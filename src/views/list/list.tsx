import React from 'react';
import Split from "../../component/split/split"
import Card from "../../component/card/card"
import { Button, Icon } from 'antd';
import "./list.css"

function List() {
  return (
    <div className="list-container">
      <Split />
      {
        Array(5).fill(1).map((item, i) => {
          return <Card key={i} />
        })
      }
      <Split />
      <div className="list-footer">
        <Button style={{ width: "2.5rem", height: "0.8rem",backgroundColor:"red" }} type="danger" size="large">提交投票</Button>
        <p> 
          <Icon style={{color:"red"}} type="notification" />&nbsp;&nbsp;需完成所有评价才可提交投票
        </p>
      </div>
    </div>
  )
}
export default List

