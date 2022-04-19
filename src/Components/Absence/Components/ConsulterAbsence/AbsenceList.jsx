import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import AbsenceItem from './AbsenceItem'

function AbsenceList() {
    const [absences,setAbsences]=useState([])
    const getAbsences =async ()=>{
        const response =await axios.get('http://localhost:8000/api/absences')
        setAbsences(response.data)
    }
    useEffect(()=>{
        getAbsences(); 
    },[])
  return (
    <div>
          {absences.map((item,index)=>(
              <AbsenceItem item={item} index={index}/>
          ))}
      </div>
  )
}

export default AbsenceList