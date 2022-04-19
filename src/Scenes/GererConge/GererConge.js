import React from 'react'
import AjouterConge from '../../Components/Conge/Components/AjouterConge/AjouterConge'
import CongeConsult from '../../Components/Conge/Components/ConsulterConge/CongeConsult'
import './gererConge.css'

function GererConge() {
  return (
    <div className='gerer-conge-content'>
        <AjouterConge />
        <CongeConsult />
    </div>
  )
}

export default GererConge