import axios from 'axios';
import { createContext, useState,useEffect } from 'react';



export const PersonnelContext=createContext ();


export const PersonnelProvider = ({children})=>{
   
    /*const [personnels,setPersonnels]=useState([])
    const [presences,setPresences]=useState([])
    const [conges,setConges]=useState([])
    const [absences,setAbsences]=useState([])

    const getPersonnels =async ()=>{
        const response =await axios.get('http://localhost:8000/api/personnels')
        setPersonnels(response.data)
    }
    
    const getPresences =async ()=>{
        const response =await axios.get('http://localhost:8000/api/presences')
        setPresences(response.data)
    }
    const getConges =async ()=>{
        const response =await axios.get('http://localhost:8000/api/conges')
        setConges(response.data)
    }
    const getAbsences =async ()=>{
        const response =await axios.get('http://localhost:8000/api/absences')
        setAbsences(response.data)
    }


    /*const getRecognition=async ()=>{
        const response =await axios.get('http://localhost:8000/api/recognition')
    }*/
    /*
    useEffect(()=>{
        getPersonnels();
        getPresences();
        getConges();
        getAbsences(); 
       {/*getRecognition();*/
    /*},[])*/
   
    return (
    <PersonnelContext.Provider value={[]}>
        {children}
    </PersonnelContext.Provider>
    )
}

export default PersonnelContext
