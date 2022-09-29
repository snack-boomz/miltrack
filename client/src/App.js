import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppContext } from "./AppContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from './components/dashboard';
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";



function App() {

  return (
    <AppContext.Provider /*value={gettersSetters}*/>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/:userid" element={<Profile />} />
          </Routes>
      </Router>
    </AppContext.Provider>    
  );
}

export default App;
