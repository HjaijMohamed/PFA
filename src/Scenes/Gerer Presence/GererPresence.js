import React from 'react'
import AjouterPresence from '../../Components/Presence/Components/AjouterPresence/AjouterPresence'
import PresenceConsultCard from '../../Components/Presence/Components/PresenceConsultCard/PresenceConsultCard'
import './gererPresence.css'

function GererPresence() {
  return (
       <div className='gerer-presence-content'>
            <AjouterPresence />
            <PresenceConsultCard  />
            
        </div>
  )
}

export default GererPresence