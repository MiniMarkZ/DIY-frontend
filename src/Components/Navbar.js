import React,{useState,useEffect} from 'react'
import '../CSS/Navbar.css'
function Navbar() {

  const [Sticky,setSticky] = useState("");
  
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setSticky('sticky') : setSticky('');
    }
  };
  
  return (
    <div className= {`Navbar ${Sticky}`}>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </div>
  )
}

export default Navbar