import React from 'react';
import Split from "../../component/split/split"
import Card from "../../component/card/card"

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
        <p>
          需完成所有评价才可提交投票
        </p>
      </div>
    </div>
  )
}

export default List

