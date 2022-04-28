import React from 'react'
import CongeList from './CongeList'
import './congeConsult.css'
function CongeConsult() {
  return (

    <div className='congeConsultCard-content'>
    <div className='congeItem-content3' >
          
          <div id='cinc'>N°CIN</div>
          <div id='imgc'> IMAGE</div>
          <div id='nom-prenomc'>NOM PRENOM</div>
          <div id='date_debc'>DATE DEB</div>
          <div id='date_finc'>DATE FIN</div>
          <div></div>
          
      </div>
        <CongeList />
    </div>
  )
}

export default CongeConsult