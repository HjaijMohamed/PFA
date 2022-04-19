import React from 'react'
import PresenceCard from '../../Components/NavBar/PresenceAujourdhui/PresenceCard'
import './presence.css';

function Presence() {
  return (
 
        <div className="presence">
            <div className='list-header'>Liste Presence</div>
            <div className='list-header2'>
              <div>#Rang</div>
              <div>Image</div>
              <div>Nom Prenom</div>
              <div>N° CIN</div>
              <div>Heure d'entrée  </div>
              
            </div>
  <PresenceCard />
        
        </div>
      
  )
}

export default Presence