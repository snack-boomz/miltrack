import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppContext } from "./AppContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from './components/dashboard';
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Medical from './components/medical';
import IndivTag from "./components/IndivTag";
import SubTag from "./components/SubTag";
import styled from 'styled-components';

function App() {
  const [loggedUser, setLoggedUser] = useState({});
  const [ state1, setState1 ] = useState([]);

  const getterSetters = {
    state1,
    loggedUser,
    setLoggedUser,
    setState1
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
            <Route path="/medical" element={<Medical/>} />
          </Routes>
      </Router>
    </AppContext.Provider>    
  )
};

export default App;
