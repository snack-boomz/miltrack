import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppContext } from "./AppContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from './components/dashboard';
import Profile from "./components/profile";
import Navbar from "./components/Navbar";
import IndivTag from "./components/IndivTag";
import SubTag from "./components/SubTag";
import styled from 'styled-components';

function App() {
  const [loggedUser, setLoggedUser] = useState([]);
  const [ allUsers, setAllUsers ] = useState([]);
  const [ loggedUserOrg, setLoggedUserOrg ] = useState([]);
  const [ loggedUserToggle, setLoggedUserToggle ] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then(response => response.json())
    .then(data => setAllUsers(data))
  }, [])
  // Temporary use effect to set hardcoded LoggedInUser until we have logging in functionality
  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then(response => response.json())
    .then(data => setLoggedUser([{"id":1,"username":null,"name":"Russell Annis","password":"1234","rank":"E4", "mos": "17C", "current_status": "PDY", "supervisor_id" : null,"organization_id":1}]))
    .then(data => {
        console.log(loggedUser)
        console.log("Hello!")
    
    })
    .then(data => {
      setLoggedUserToggle(loggedUserToggle + 1)
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3001/organization/1`)
    .then(response => response.json())
    .then(data => setLoggedUserOrg(data[0].organization_name))
    .then(data => {
      console.log(loggedUserOrg)
      console.log(typeof loggedUserOrg)
      console.log("logged user org")
    })

  }, [])

  const getterSetters = {
    allUsers, 
    setAllUsers,
    loggedUser,
    setLoggedUser,
    loggedUserOrg,
    setLoggedUserOrg,
    loggedUserToggle,
    setLoggedUserToggle
  }

  // const testObject = {
  //   id: 1, pha_date: new new Date('2021-03-21').toString().toString(), dental_date: new Date('2021-03-21').toString(), hearing_date: new Date('2021-03-21').toString() 
  // }

  // const userObject = {
  //   id: 10, username: "billy", password: "a;sdkfjn;alkshdfoiajsd;lfj", rank: "SSG", full_name: "Justin Hernandez", status: "TDY"
  // }

  // const testArrayOfObjects = [
  //   { id: 2, pha_date: new Date('2021-03-21').toString(), dental_date: new Date('2021-03-21').toString(), hearing_date: new Date('2021-03-21').toString(), vaccination_date: new Date('2021-03-21').toString() },
  //   { id: 3, training_name: new Date('2021-03-21').toString(), training_date: Date('2019-02-01') },
  // ]

  return (
    <AppContext.Provider value={ getterSetters }>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/:userid" element={<Profile />} />
          </Routes>
      </Router>
    </AppContext.Provider>    
  )
};

export default App;
