import {  Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Manage from './components/Manage';
import Import from './components/Import';
import Login from './login/Login';
import React from 'react';
import Footer from './components/Footer';

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
      <Footer/>
    </>
  );
}

export default App;
