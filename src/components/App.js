import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getCurrentUser } from "../actions/sessions";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./Home";
import Login from "./sessions/Login";
import SalespersonProfile from "./employee/SalespersonProfile";
import NewCustomer from "./customer/NewCustomer";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/login' component={ Login }/>
          <Route exact path='/home' component={ Home } />
          <Route exact path='/me' component={ SalespersonProfile }/>
          <Route exact path='/new-customer' component={ NewCustomer}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
