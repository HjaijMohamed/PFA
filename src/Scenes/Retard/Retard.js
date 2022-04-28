import React from 'react'
import RetardConsultAuj from '../../Components/NavBar/ReatrdAujourdhui/RetardConsultAuj'
import './retard.css'
function Retard() {
  return (
    <div className='retard'>
        <div className='list-header'>Liste Retards</div>
        <div className='list-header2'>

               <div id='cinp'>N° CIN</div>
              <div id='imgp'>IMAGE</div>
              <div id='nom-prenomp'>NOM PRENOM</div>
              <div id='heure_entreep'>HEURE D'ENTREE  </div>
        </div>
        <RetardConsultAuj />
    </div>

  )
}

export default Retard