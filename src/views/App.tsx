import React, { useState, useEffect } from 'react';


import List from "./list"

function App(props: any) {
  useEffect(() => {
    console.log(123)
  }, [props.userID, props.departmentID])

  const [name, setName] = useState("tuanjie")
  const [age, setAge] = useState(20)
  const [count, setCount] = useState(0)


  return (
    <div>
    </div>
  )
  function handleName() {
    let newName = "tuanjie" + (count + 1).toString()
    setCount(count + 1)
    setName(newName)
  }
  function handleAge() {
    setAge(age + 1)
  }
}

export default App;
