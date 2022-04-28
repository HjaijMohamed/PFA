import React from 'react'
import AbsenceConsultAuj from '../../Components/NavBar/AbsenceAujourdhui/AbsenceConsultAuj'
import './absence.css'

function Absence() {
  return (
    <div className='absence'>
        <div className='list-header'>Liste Absences</div>
        <div className='list-header2'>
        <div id='cinp'>N° CIN</div>
              <div id='imgp'>IMAGE</div>
              <div id='nom-prenomp'>NOM PRENOM</div>
              
            </div>
        <AbsenceConsultAuj />
    </div>
  )
}

export default Absence