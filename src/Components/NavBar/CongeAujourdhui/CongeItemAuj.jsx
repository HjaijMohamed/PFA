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
        <div>#{index}</div>
        <div><img src={urlimg} id='img' alt=''/></div>
        <div>{personnel.nom} {personnel.prenom}</div>
        <div>{item.cin}</div>
        <div>{item.date_debut}</div> 
        <div>{item.date_fin}</div> 
    </div>
  )
}

export default CongeItemAuj