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
  const [ loggedUser, setLoggedUser ] = useState([{"id":1,"username":null,"name":"Loading...","password":"1234","rank":"E4", "mos": "Loading...", "current_status": "PDY", "supervisor_id" : null,"organization_id":1}]);
  const [ allUsers, setAllUsers ] = useState([]);
  const [ loggedUserOrg, setLoggedUserOrg ] = useState([]);
  const [ loggedUserToggle, setLoggedUserToggle ] = useState(0);
  const [ loggedUserSummary, setLoggedUserSummary ] = useState([]);
  const [ loggedUserServiceMembers, setLoggedUserServiceMembers ] = useState([]);
  const [ loggedUserServiceMemberSummaries, setLoggedUserServiceMemberSummaries ] = useState([]);
  const [ loggedUserServiceMemberPromiseChainComplete, setLoggedUserServiceMemberPromiseChainComplete ] = useState(false);
  





  // set loggedUser's subordinates if he/she has any

  const getterSetters = {
    allUsers, 
    setAllUsers,
    loggedUser,
    setLoggedUser,
    loggedUserOrg,
    setLoggedUserOrg,
    loggedUserToggle,
    setLoggedUserToggle,
    loggedUserSummary,
    setLoggedUserSummary,
    loggedUserServiceMembers,
    setLoggedUserServiceMembers,
    loggedUserServiceMemberSummaries, 
    setLoggedUserServiceMemberSummaries,
    loggedUserServiceMemberPromiseChainComplete, 
    setLoggedUserServiceMemberPromiseChainComplete
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
            <Route path="/dashboard" element={loggedUser === [] ? <>Loading...</> : <Dashboard/>} />
            <Route path="/:userid" element={<Profile />} />
          </Routes>
      </Router>
    </AppContext.Provider>    
  )
};

export default App;
