import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './retardConsultAuj.css';
function RetardItemAuj({item,index}) {
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
    <div className='retard-card'>
          <div id='cinprt'>{item.cin}</div>
          <div ><img src={urlimg} id='imgrt' alt=''/></div>
          <div id='nom-prenomprt'>{personnel.nom} {personnel.prenom}</div>
          <div id='heure_entreeprt'>{item.heure_entree}</div>
    </div>
  )
}

export default RetardItemAuj