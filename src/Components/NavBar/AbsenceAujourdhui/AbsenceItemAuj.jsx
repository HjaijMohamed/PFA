import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './absenceConsultAuj.css';

function AbsenceItemAuj({item,index}) {
    const urlimg=`http://127.0.0.1:8000${item.img}`
    
  return (
    <div className='absence-card'>
       
       <div id='cinpr'>{item.cin}</div>
          <div ><img src={urlimg} id='imgpr' alt=''/></div>
          <div id='nom-prenompr'>{item.nom} {item.prenom}</div>
    </div>
  )
}

export default AbsenceItemAuj