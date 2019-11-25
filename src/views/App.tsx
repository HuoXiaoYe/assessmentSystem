import React, { useState, useEffect } from 'react';


import List from "./list"

function App() {
  const [info, setCount] = useState({
    name: "tuanjie",
    age: 20
  })
  useEffect(() => {
    console.log("xixixi")
  }, [info])
  return (
    <div>
      <div onClick={() => { setCount({ age: 30, name: "fdas" }) }}>你点击了{info.age}次===={info.name}</div>
      <List />
    </div>
  )
}

export default App;
