import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../Img/logo_sticky.png'
import {RiLogoutBoxRLine} from 'react-icons/ri'
import '../Style/Navbar.css'

function Navbar() {
  
  return (
    <div className= "Navbar">
      {/* <div><img src={logo2} alt="logo2" width="60px"/></div> */}
      <ul>
        {/* <li><img src={logo2} alt="logo2" width="60px"/></li> */}
        <li><Link to="/">หน้าหลัก</Link></li>
        <li><Link to="#">จัดการสินค้า</Link></li>
        <li><Link to="/import">นำเข้าสินค้า</Link></li>
        <li><Link to="#"><RiLogoutBoxRLine/> ออกจากระบบ</Link></li>
      </ul>
    </div>
  )
}

export default Navbar