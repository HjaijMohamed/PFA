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
          <div>#{index}</div>
          <div><img src={urlimg} id='img' alt=''/></div>
          <div>{personnel.nom} {personnel.prenom}</div>
          <div>{item.cin}</div>
          <div>{item.heure_entree}</div>
          <div>{item.date_entree}</div> 
    </div>
  )
}

export default RetardItemAuj