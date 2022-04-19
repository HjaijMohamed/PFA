import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AbsenceItemAuj from './AbsenceItemAuj'

function AbsenceListAuj() {
    const [absencesAujourdhui,setAbsencesAujourdhui]=useState([])
  
    const getAbsencesAujourdhui =async ()=>{
      const response =await axios.get('http://127.0.0.1:8000/api/absenceAujourdhui')
      setAbsencesAujourdhui(response.data)
    }
    useEffect(()=>{
      getAbsencesAujourdhui()
    },[])
    return (
      <div>
        {absencesAujourdhui.map((item,index) =>(
       <AbsenceItemAuj item={item} index={index+1}/>
       ))}
      </div>
    )
}

export default AbsenceListAuj