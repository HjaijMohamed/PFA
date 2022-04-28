import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './presenceCard.css';

function PresenceItem({item,index}) {
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
      
    <div className='presences-card'>
          <div id='cinpr'>{item.cin}</div>
          <div ><img src={urlimg} id='imgpr' alt=''/></div>
          <div id='nom-prenompr'>{personnel.nom} {personnel.prenom}</div>
          <div id='heure_entreepr'>{item.heure_entree}</div>
    </div>
    
  )
}

export default PresenceItem