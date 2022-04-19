import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PresenceItem from "./PresenceItem"

function PresenceList() {
  const [presencesAujourdhui,setPresencesAujourdhui]=useState([])
  
  const getPresencesAujourdhui =async ()=>{
    const response =await axios.get('http://localhost:8000/api/presenceAujourdhui')
    setPresencesAujourdhui(response.data)
  }
  useEffect(()=>{
    getPresencesAujourdhui()
  },[])
    return (
    <div>
    {presencesAujourdhui.map((item,index) =>(
     <PresenceItem item={item} index={index+1}/>
     ))}

</div>
  )
}
export default PresenceList