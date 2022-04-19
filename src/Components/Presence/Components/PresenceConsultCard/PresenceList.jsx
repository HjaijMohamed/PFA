import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PresenceItem from './PresenceItem'

function PresenceList() {
    const [presences,setPresences]=useState([])
    const getPresences =async ()=>{
        const response =await axios.get('http://localhost:8000/api/presences')
        setPresences(response.data)
    }
    useEffect(()=>{
        getPresences(); 
    },[])
   
  return (
    <div>
        {presences.map((item,index)=>(
            <PresenceItem item={item} index={index}/>
        ))}
    </div>

  )
}

export default PresenceList