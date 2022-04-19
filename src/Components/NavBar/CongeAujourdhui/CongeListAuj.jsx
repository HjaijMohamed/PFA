import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CongeItemAuj from './CongeItemAuj'

function CongeListAuj() {
  const [congesAujourdhui,setCongesAujourdhui]=useState([])
  
    const getCongesAujourdhui =async ()=>{
      const response =await axios.get('http://localhost:8000/api/congeAujourdhui')
      setCongesAujourdhui(response.data)
    }
    useEffect(()=>{
      getCongesAujourdhui()
    },[])
  return (
    <div>
      {congesAujourdhui.map((item,index) =>(
     <CongeItemAuj item={item} index={index+1}/>
     ))}
    </div>
  )
}

export default CongeListAuj