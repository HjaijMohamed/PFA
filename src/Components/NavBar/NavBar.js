import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import SwitchCamera from './SwitchCamera'

function NavBar() {
  return (
    <div className='navbar'>
      <div className='logo'>Attendance System</div>
      
      <div className='actions'>
      <Link to="/" className='linkStyle'>
        <div className='actionElem'>Liste Présences</div>
      </Link>
      <Link to="/retardAuj" className='linkStyle'>
        <div className='actionElem'>Liste Retards</div>
      </Link>
      <Link to="/absenceAuj" className='linkStyle'>
        <div className='actionElem'>Liste Absences</div>
      </Link>
      <Link to="/congeAuj" className='linkStyle'>
        <div className='actionElem'>Liste Congés</div>
      </Link>
      </div>
      <SwitchCamera />
      <div className='logout'>Logout</div>
    </div>
  )
}

export default NavBar