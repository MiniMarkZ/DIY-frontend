import React from 'react'
import "../CSS/Header.css"
import Logo from './Logo'

function Header(props) {
  return (
    <div >
      <div className='Header'>
        <ul>
          <li>
            <a href='https://www.mrdiy.com/th/' target='_blank' rel='noreferrer'>
              <Logo/>
            </a>
          </li>
          <li className='Logging_in'>
              Logging In as <b>{props.name}</b>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header