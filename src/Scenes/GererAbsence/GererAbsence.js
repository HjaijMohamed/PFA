import React from 'react'
import './gererAbsence.css'
import AjouterAbsence from '../../Components/Absence/Components/AjouterAbsence/AjouterAbsence'
import AbsenceConsult from '../../Components/Absence/Components/ConsulterAbsence/AbsenceConsult'

function GererAbsence() {
  return (
    <div className='gerer-absence-content'>
        <AjouterAbsence />
        <AbsenceConsult />
    </div>
  )
}

export default GererAbsence