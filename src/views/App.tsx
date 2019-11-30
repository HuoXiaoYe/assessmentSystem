import React from 'react';
import "../assets/css/app-reset.css"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import List from "./list/list"
import 'antd/dist/antd.css'



import Header from "../component/header/header"

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={List} />
    </Router>
  )
}

export default App;
