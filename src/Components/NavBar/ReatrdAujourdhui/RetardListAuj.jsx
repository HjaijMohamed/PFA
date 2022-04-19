import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RetardItemAuj from './RetardItemAuj'

function RetardListAuj() {
    const [retardsAujourdhui,setRetardsAujourdhui]=useState([])
  
    const getRetardsAujourdhui =async ()=>{
      const response =await axios.get('http://localhost:8000/api/retardAujourdhui')
      setRetardsAujourdhui(response.data)
    }
    useEffect(()=>{
      getRetardsAujourdhui()
    },[])
    return (
      <div>
        {retardsAujourdhui.map((item,index) =>(
       <RetardItemAuj item={item} index={index+1}/>
       ))}
      </div>
    )
}

export default RetardListAuj