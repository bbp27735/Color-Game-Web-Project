'use client'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Topbar from "./components/TopBar"
import GamePage from "./components/Pages/GamePage"
import StatsPage from "./components/Pages/StatsPage"
import LoginPage from './components/Pages/LoginPage';

export default function Home() {

  const loginHandler = (loginInfo) => {
    console.log("Inside page.js, logininfo!");
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<LoginPage onLoginInfoSubmit={loginHandler} />} />
          <Route path='/game' element={<GamePage/>} />
          <Route path='/stats' element={<StatsPage/>} />
        </Routes>
      </div>
    </Router>
  );
}
