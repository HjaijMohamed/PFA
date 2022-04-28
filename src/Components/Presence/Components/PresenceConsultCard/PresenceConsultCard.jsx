import React from 'react'
import './presenceConsultCard.css'
import PresenceList from './PresenceList'

function PresenceConsultCard() {
  return (
    <div className='presencelConsultCard-content'>
        <div className='presence-consult-card' >

          <div id='cint'>N°CIN</div>
          <div id='imgt'>IMAGE</div>
          <div id='date_entreet'>DATE D'ENTREE</div>
          <div id='nom-prenomt'>NOM PRENOM</div>
          <div id='heure_entreet'>HEURE D'ENTREE</div>
      </div>
   
        <PresenceList />
    </div>
  )
}

export default PresenceConsultCard