import React, { useState, useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import NewCustomer from "./customer/NewCustomer";
import NavBar from"./NavBar";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { getCurrentUser } from "./actions/auth"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  
  const handleCurrentUser = (user) => {
    if (user.email) {
      setCurrentUser(user);
      setLoggedIn(true);
      setLoading(false);
      console.log(user)
    }
  }

  useEffect(() => {
    getCurrentUser(handleCurrentUser)
    setLoading(false)
  }, [])


  return (
    <div>
    {/* <Home/> */}
    {/* <NavBar/> */}
    {/* <Login /> */}
    {/* <NewCustomer/> */}
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Login {...props} handleCurrentUser={handleCurrentUser}/>}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
