import React ,{useEffect,useState}from 'react'
import {NavbarCon, NavList , NavItem , NavLink , NavLinkShow} from '../Style/styledElement'
// import {RiLogoutBoxRLine} from 'react-icons/ri'

// const Logout = ()=>{
//   if(localStorage.getItem('token')){
//     localStorage.removeItem('token');
//     alert('ออกจากระบบ')
//   }else{
//     alert('ยังไม่ได้ login นะไอตู่')
//   }
// }

function Navbar() {
  const [show,setShow] = useState(false);

  useEffect(()=>{
      if(localStorage.getItem('token')){
        setShow(true);
      }
      else{
        setShow(false);
      }
  })
  return (
    <NavbarCon>

      <NavList>

        <NavItem>
          <NavLink to="/">หน้าหลัก</NavLink>
        </NavItem>

        <NavItem>
          <NavLinkShow show={show} to="/import">นำเข้าสินค้า</NavLinkShow>
        </NavItem>

        <NavItem>
          <NavLinkShow show={show} to="/manage">จัดการสินค้า</NavLinkShow>
        </NavItem>

        {/* <li onClick={Logout}><Link to="/"><RiLogoutBoxRLine/> ออกจากระบบ</Link></li> */}
      </NavList>
    </NavbarCon>
  )
}

export default Navbar