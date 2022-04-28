import React, {useEffect,useState} from 'react'
import '../style/Header.css'
import logo from '../Img/1_logo.png'
import {RiLoginCircleLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'

function Header() {

  const [status,setStatus] = useState('เข้าสู่ระบบ');
  
  useEffect(()=>{
      if(localStorage.getItem('token')){
        setStatus('ออกจากระบบ');
      }
  })

  const Logout = ()=>{
    if(localStorage.getItem('token')){
      localStorage.removeItem('token');
      alert('ออกจากระบบ')
      setStatus("เข้าสู่ระบบ")
      window.location="/login"
    }
  }

  return (
  <div id="header">
    <div id="wrapper">
      <ul id="container">
        <li>
          <div id="logo">
            <Link to='/'>
              <img src={logo} alt="logo" width="195px" height="60px" style={{textAlign:"center"}}/>
            </Link>
          </div>
        </li>
        <li id="sideBorder">
          <Link to="/login" id='link' style={{marginTop:"0"}} onClick={Logout}>
            <div style={{marginTop:"0" , marginBottom:"0"}}>
              <div ><RiLoginCircleLine style={{fontSize:"30px"}}/></div>
              <div>{status}</div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Header