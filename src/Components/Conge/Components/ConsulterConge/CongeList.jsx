import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CongeItem from './CongeItem'

function CongeList() {
    const [conges,setConges]=useState([])
    const getConges =async ()=>{
        const response =await axios.get('http://localhost:8000/api/conges')
        setConges(response.data)
    }
    useEffect(()=>{
        getConges(); 
    },[])
   
    return (
      <div>
          {conges.map((item,index)=>(
              <CongeItem item={item} index={index}/>
          ))}
      </div>
)
}

export default CongeList