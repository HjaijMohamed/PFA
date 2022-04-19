import React from 'react'
import { Link } from 'react-router-dom';
import PersonnelConsultCard from '../../Components/Personnel/Components/PersonnelConsultCard/PersonnelConsultCard';
import './gererPersonnel.css';

function GererPersonnel() {
  return (
    <div className='gerer-personnel'>
      <div className='header-personnel'>
        <div id='personnel'>Personnels</div>
        <Link to="/ajoutPersonnelForm" className='linkStyle'><div id='personnel-ajout'>Nouveau Personnel</div></Link>
      </div>
      <PersonnelConsultCard  />
    </div>
  )
}

export default GererPersonnel