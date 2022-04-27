import React ,{useEffect,useState}from 'react'
import { Link } from 'react-router-dom'
// import {RiLogoutBoxRLine} from 'react-icons/ri'
import '../Style/Navbar.css'

// const Logout = ()=>{
//   if(localStorage.getItem('token')){
//     localStorage.removeItem('token');
//     alert('ออกจากระบบ')
//   }else{
//     alert('ยังไม่ได้ login นะไอตู่')
//   }
// }

function Navbar() {
  const [navList,setNavList] = useState("Navlist");

  useEffect(()=>{
      if(localStorage.getItem('token')){
        setNavList('Navlist');
      }
      else{
        setNavList('HideNav');
      }
  
  })
  return (
    <div className= "Navbar">
      {/* <div><img src={logo2} alt="logo2" width="60px"/></div> */}
      <ul>
        {/* <li><img src={logo2} alt="logo2" width="60px"/></li> */}
        <li><Link to="/">หน้าหลัก</Link></li>
        <li className={navList}><Link to="#">จัดการสินค้า</Link></li>
        <li className={navList}><Link to="/import">นำเข้าสินค้า</Link></li>
        {/* <li onClick={Logout}><Link to="/"><RiLogoutBoxRLine/> ออกจากระบบ</Link></li> */}
      </ul>
    </div>
  )
}

export default Navbar