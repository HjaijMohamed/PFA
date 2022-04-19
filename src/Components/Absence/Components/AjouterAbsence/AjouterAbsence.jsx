import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './ajouterAbsence.css'
function AjouterAbsence() {
    const navigate=useNavigate()
    const [message ,setMessage]=useState('')
    const [cin ,setCin]=useState(null)
    const [date_absence,setDate_absence]=useState(null)

    const handleCin =(e)=>{setCin(e.target.value)}
    
    const handleDate_absence=(e)=>{setDate_absence(e.target.value);}
    

    const addAbsenceInfo = async(e)=>{
        e.preventDefault();
        const url='http://localhost:8000/api/absences';
        const formData2 =new FormData();
        
        formData2.append('cin',cin);
        formData2.append('date_absence',date_absence);
       
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
        await axios.post(url, formData2, config).then(res => {
            console.log('Posting..',res);
            navigate("/gererAbsence");
            setMessage('Ajout Terminée..');
            
        }).catch((err) => {
            console.log(err);
            if(cin===null){
                setMessage('Completez N°CIN ..');
            }
            else if(date_absence===null){
                setMessage('Completez date absence ..');
            }
            else {setMessage('Verifier N°CIN et Date absence .. (Le personnel n\'existe pas..ou le personnel est déja absent!!)');}
        })
    }
  return (
    <div className='ajout-absence'>
    <form className='form-ajout'>
        <div id='form-ajout-item'>
            <div id='txt'>Cin :</div>
            <input type='number' name='cin' value={cin} onChange={handleCin} required />
        </div>
        <div id='form-ajout-item'>
            <div id='txt'>Date absence :</div>
            <input type='date' name='date_absence' value={date_absence} onChange={handleDate_absence} required />
        </div>
        <button type='submit' id='btn' onClick={addAbsenceInfo }>Ajouter  </button>
    </form>
    <div id='message'>{message}</div>
</div>
  )
}

export default AjouterAbsence