import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './congeConsult.css'

function CongeItemAuj({item,index}) {
  const [personnel,setPersonnel] = useState([])
    const getPersonnel =async ()=>{
    const response =await axios.get(`http://localhost:8000/api/personnels/${item.cin}`)
      setPersonnel(response.data)
    }
    useEffect(()=>{
      getPersonnel()
    },[])
    const urlimg=`http://127.0.0.1:8000${personnel.img}`
    
  return (
    <div className='conge-card'>
                 <div id='cinpr'>{item.cin}</div>
          <div ><img src={urlimg} id='imgpr' alt=''/></div>
          <div id='nom-prenompr'>{personnel.nom} {personnel.prenom}</div>
          <div id='date_debr'>{item.date_debut}</div>
          <div id='date_finr'>{item.date_fin}</div>
    </div>
  )
}

export default CongeItemAuj