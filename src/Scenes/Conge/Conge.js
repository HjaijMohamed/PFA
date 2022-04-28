import React from 'react'
import CongeConsultAuj from '../../Components/NavBar/CongeAujourdhui/CongeConsultAuj'
import './conge.css'
function Conge() {
  return (
    <div className='conge'>
        <div className='list-header'>Liste Congés</div>
        <div className='list-header2'>
        <div id='cinp'>N° CIN</div>
              <div id='imgp'>IMAGE</div>
              <div id='nom-prenomp'>NOM PRENOM</div>
              <div id='date_debp'>DATE DEBUT </div>
              <div id='date_finp'>DATE FIN </div>
            </div>
        <CongeConsultAuj />
    </div>
  )
}

export default Conge