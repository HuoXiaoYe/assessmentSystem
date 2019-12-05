import React from 'react';
import "../assets/css/app-reset.css"
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Store } from "../store"
import List from "./list/list"

import Detail from "./detail/detail"
import Success from "./success/success"



import Header from "../component/header/header"

function App() {
  return (
    <Store>
      <Router>
        <Header />
        <Switch >
          <Route path="/detail/:pwd/:candidate_id/:department_id/:desc" component={Detail} exact />
          <Route path="/success" component={Success} exact />
          <Route path="/:pwd" component={List} exact />

        </Switch>
      </Router>
    </Store>
  )
}

export default App;
