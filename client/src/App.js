import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppContext } from "./AppContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import IndivTag from "./components/IndivTag";
import SubTag from "./components/SubTag";

function App() {

  const [ state1, setState1 ] = useState([]);

  const getterSetters = {
    state1,
    setState1
  }

  const testObject = {
    id: 1, pha_date: Date('2021-03-21'), dental_date: Date('2021-03-21'), hearing_date: Date('2021-03-21') 
  }

  const userObject = {
    id: 10, username: "billy", password: "a;sdkfjn;alkshdfoiajsd;lfj", rank: "SSG", full_name: "Justin Hernandez", status: "TDY"
  }

  const testArrayOfObjects = [
    { id: 2, pha_date: Date('2021-03-21'), dental_date: Date('2021-03-21'), hearing_date: Date('2021-03-21'), vaccination_date: Date('2021-03-21') },
    { id: 3, training_name: Date('2021-03-21'), training_date: Date('2019-02-01') },
  ]

  return (
    <AppContext.Provider value={ getterSetters }>
      <Router>
        <Navbar />
        <IndivTag elements={ testObject } component="medical"/>
        <SubTag elements={ testArrayOfObjects } currentSM= { userObject }/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Dashboard/>} />
            <Route path="/:userid" element={<Profile />} />
          </Routes>
      </Router>
    </AppContext.Provider>    
  );
}

export default App;
