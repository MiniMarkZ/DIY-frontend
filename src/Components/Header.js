import React from 'react'
import '../Style/Header.css'
import logo from '../Img/1_logo.png'
import {IoSearchOutline} from 'react-icons/io5'
function Header() {
  return (
  <div id="header">
    <div id="wrapper">
      <ul id="container">
        <li>
          <div id="logo">
            <a href='https://www.mrdiy.com/th/' target='_blank' rel='noreferrer'>
              <img src={logo} alt="logo" width="195px" height="60px"/>
            </a>
          </div>
        </li>
        <li id="sideBorder">
          <a href="#" id='link' style={{marginTop:"0"}}>
            <div style={{marginTop:"0" , marginBottom:"0"}}>
              <div style={{marginBottom:"0.5rem"}}><IoSearchOutline style={{fontSize:"30px"}}/></div>
              <div>คำค้นหา</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Header