import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from "../actions/sessions";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./Home";
import Login from "./sessions/Login";
// import NewCustomer from "./customer/NewCustomer";
// import NavBar from"./NavBar";

function App() {
  // const [currentUser, setCurrentUser] = useState(null)
  // const [loggedIn, setLoggedIn] = useState(false)
  // const [loading, setLoading] = useState(true)
  
  // const handleCurrentUser = (user) => {
  //   if (user.email) {
  //     setCurrentUser(user);
  //     setLoggedIn(true);
  //     setLoading(false);
  //     console.log(user)
  //   }
  // }

  // useEffect(() => {
  //   getCurrentUser(handleCurrentUser)
  //   setLoading(false)
  // }, [])

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
    {/* <Home/> */}
    {/* <Login /> */}
    {/* <NewCustomer/> */}
      <Router>
        {/* <NavBar/> */}
        <Switch>
          <Route exact path='/login' component={ Login }/>
          <Route exact path='/home' component={ Home } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
