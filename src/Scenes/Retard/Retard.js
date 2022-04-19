import React from 'react'
import RetardConsultAuj from '../../Components/NavBar/ReatrdAujourdhui/RetardConsultAuj'
import './retard.css'
function Retard() {
  return (
    <div className='retard'>
        <div className='list-header'>Liste Retards</div>
        <div className='list-header2'>
              <div>#Rang</div>
              <div>Image</div>
              <div>Nom Prenom</div>
              <div>N° CIN</div>
              <div>Heure d'entrée </div>
              <div>Date d'entrée </div>
        </div>
        <RetardConsultAuj />
    </div>

  )
}

export default Retard