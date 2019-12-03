import React, { useEffect, useState } from 'react';
import { Button, Icon } from 'antd';
import { getDepartmentList } from "./list_ts"
import { IProps, IDepartment } from "../../interface/list"
import "./list.css"
import Split from "../../component/split/split"
import Card from "../../component/card/card"

function List(props: IProps) {
  const [departmentListData, setDepartmentListData] = useState<IDepartment[]>([])
  useEffect(() => {
    (async () => {
      let departmentList = await getDepartmentList(props.match.params.pwd)
      setDepartmentListData(departmentList)
      console.log(departmentList)
    })()
    console.log("请求列表数据")
  }, [])
  return (
    <div className="list-container">
      <Split />
      {
        departmentListData.map((item, i) => {
          return <Card key={i} data={item} pwd={props.match.params.pwd} />
        })
      }
      <Split />
      <div className="list-footer">
        <Button style={{ width: "2.5rem", height: "0.8rem", backgroundColor: "red" }} type="danger" size="large">提交投票</Button>
        <p>
          <Icon style={{ color: "red" }} type="notification" />&nbsp;&nbsp;需完成所有评价才可提交投票
        </p>
      </div>
    </div>
  )
}
export default List

