import React, { useEffect } from 'react';

interface IProps {
  name: string;
  age?: number;
  departmentID: number;
  userID: number
}

function List(props: IProps) {
  useEffect(() => {
    handleDepartmentID()
    handleUserID()
  }, [props.departmentID, props.userID])
  return (
    <div>
      list=={props.name}==={props.age}
    </div>
  )

  function handleDepartmentID() { }
  function handleUserID() { }
}

export default List

