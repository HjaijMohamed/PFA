import React from 'react'
import CongeConsultAuj from '../../Components/NavBar/CongeAujourdhui/CongeConsultAuj'
import './conge.css'
function Conge() {
  return (
    <div className='conge'>
        <div className='list-header'>Liste Congés</div>
        <div className='list-header2'>
              <div>#Rang</div>
              <div>Image </div>
              <div>Nom Prenom </div>
              <div>N° CIN</div>
              
              
              <div>Date debut congé</div>
              <div>Date fin congé </div>
              
            </div>
        <CongeConsultAuj />
    </div>
  )
}

export default Conge