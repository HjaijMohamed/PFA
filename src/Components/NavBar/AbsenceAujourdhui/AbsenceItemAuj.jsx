import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './absenceConsultAuj.css';

function AbsenceItemAuj({item,index}) {
    const urlimg=`http://127.0.0.1:8000${item.img}`
    
  return (
    <div className='absence-card'>
       
        <div>#{index}</div>
        <div><img src={urlimg} id='img' alt=''/></div>
        <div>{item.nom} {item.prenom}</div>
        <div>{item.cin}</div>
    </div>
  )
}

export default AbsenceItemAuj