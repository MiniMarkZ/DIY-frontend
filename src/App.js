import {  Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import Manage from './Components/Manage';
import Import from './Components/Import';
import Login from './login/Login';
import React from 'react';

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/import" element={<Import/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/manage" element={<Manage/>}/>
      </Routes>
    </>
  );
}

export default App;
