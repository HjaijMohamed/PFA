import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './absenceItem.css'

function AbsenceItem({item,index}) {
    const [personnel,setPersonnel] = useState([])
    const getPersonnel =async ()=>{
    const response =await axios.get(`http://localhost:8000/api/personnels/${item.cin}`)
      setPersonnel(response.data)
    }
    useEffect(()=>{
      getPersonnel()
    },[])
    const urlimg=`http://127.0.0.1:8000${personnel.img}`
    const urlSuprim=`/supprimerAbsence/${item.id}`   
  return (
    <div className='absence-item'>
            <div id='id'>#0{index}</div>
            <div id='img-icon'><img src={urlimg} id='img' alt=''/></div>
            <div id='nom-prenom'>{personnel.prenom} {personnel.nom}</div>
            <div id='date_debut'>Date absence: {item.date_absence}</div>
            <div id='cin'>CIN: {item.cin}</div>
            <Link className='linkStyle' to={urlSuprim}> <div id ='btn-del' >Supprimer</div></Link>
        </div>
  )
}

export default AbsenceItem