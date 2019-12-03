import React from 'react';
import "../assets/css/app-reset.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import List from "./list/list"
import 'antd/dist/antd.css'
import Detail from "./detail/detail"



import Header from "../component/header/header"

function App() {
  return (
    <Router>
      <Header />
      <Switch >
        <Route path="/detail/:pwd/:candidate_id/:department_id/:desc" component={Detail} exact />
        <Route path="/:pwd" component={List} exact />
      </Switch>

    </Router>
  )
}

export default App;
