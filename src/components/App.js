import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from "../actions/sessions";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./Home";
import Login from "./sessions/Login";
import SalespersonProfile from "./employee/SalespersonProfile";

function App() {

  const requesting = useSelector(state => state.requesting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  if (requesting) {
    return <h1>loading...</h1>
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/login' component={ Login }/>
          <Route exact path='/home' component={ Home } />
          <Route exact path='/me' component={ SalespersonProfile }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
