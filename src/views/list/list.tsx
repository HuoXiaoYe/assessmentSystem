import React, { useEffect, useState } from 'react';
import { Button, Icon, message } from 'antd';
import { getDepartmentList, saveAllAssessment } from "./list_ts"
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
        <Button onClick={() => { saveAll(props.match.params.pwd) }} style={{ width: "2.5rem", height: "0.8rem", backgroundColor: "red" }} type="danger" size="large">提交投票</Button>
        <p>
          <Icon style={{ color: "red" }} type="notification" />&nbsp;&nbsp;需完成所有评价才可提交投票
        </p>
      </div>
    </div>
  )
  async function saveAll(pwd: string) {
    let res = await saveAllAssessment(pwd)
    if (res.value.toString() === "-1") { // 未全部提交
      message.error(res.label);
      return
    }
    // 执行跳转工作 
    message.success("已完成全部评测")
    props.history.push("/success")
  }
}
export default List

