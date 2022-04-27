import {  Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import './App.css';
import Home from './Components/Home';
import Import from './Components/Import';
import Login from './login/Login';
import React from 'react';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/import" element={<Import/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
