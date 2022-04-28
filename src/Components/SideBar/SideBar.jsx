import React from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css';

function SideBar() {
  return (
    <div className='sidebar'>
     <Link to="/gererPersonnel" className='linkStyle'>
        <div className='options'>Gérer Persnonnel</div>
      </Link>
      <Link to="/gererPresence" className='linkStyle'>
      <div className='options'>Gérer Présences</div>
      </Link>
     
      <Link to="/gererConge" className='linkStyle'>
      <div className='options'>Gérer Congés</div>
      </Link>
      {/*<Link to="/gererAbsence" className='linkStyle'>
      <div className='options'>Gérer Absences</div>
  </Link>*/}
    </div>
  )
}

export default SideBar