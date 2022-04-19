import React from 'react'
import AbsenceConsultAuj from '../../Components/NavBar/AbsenceAujourdhui/AbsenceConsultAuj'
import './absence.css'

function Absence() {
  return (
    <div className='absence'>
        <div className='list-header'>Liste Absences</div>
        <div className='list-header2'>
              <div>#Rang</div>
              <div>Image</div>
              <div>Nom Prenom</div>
              <div>N° CIN</div>
              
            </div>
        <AbsenceConsultAuj />
    </div>
  )
}

export default Absence