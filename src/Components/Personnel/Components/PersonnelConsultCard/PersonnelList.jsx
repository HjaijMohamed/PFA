import PersonnelItem from './PersonnelItem'
import { useEffect, useState } from 'react'
import axios from 'axios'

function PersonnelList() {
  const [personnels,setPersonnels]=useState([])
    const getPersonnels =async ()=>{
        const response =await axios.get('http://localhost:8000/api/personnels')
        setPersonnels(response.data)
    }
    useEffect(()=>{
        getPersonnels(); 
    },[])
  return (
    <div>
        
        {personnels.map((item,index) =>(
          
         <PersonnelItem item={item} index={index+1}/>
        ))}
    </div>
  )
}

export default PersonnelList