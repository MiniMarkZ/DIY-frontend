import {  Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import './App.css';
import Home from './Components/Home';
import Import from './Components/Import';
import Login from './login/Login';
import React from 'react';
function App() {
  return (
    <div>
      <Admin/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/import" element={<Import/>}/>
        <Route path="/login" element={<Login/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
