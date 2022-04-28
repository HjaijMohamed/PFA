import React from 'react'
import PresenceCard from '../../Components/NavBar/PresenceAujourdhui/PresenceCard'
import './presence.css';

function Presence() {
  return (
 
        <div className="presence">
            <div className='list-header'>LISTE DES PRESNECES</div>
            <div className='list-header2'>
              <div id='cinp'>N° CIN</div>
              <div id='imgp'>IMAGE</div>
              <div id='nom-prenomp'>NOM PRENOM</div>
              <div id='heure_entreep'>HEURE D'ENTREE  </div>
            </div>
  <PresenceCard />
        
        </div>
      
  )
}

export default Presence