import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './ajouterConge.css'

function AjouterConge() {
    const navigate=useNavigate()
    const [message ,setMessage]=useState('')
    const [cin ,setCin]=useState(null)
    const [date_debut,setDate_debut]=useState(null)
    const [date_fin,setDate_fin]=useState( null)

    const handleCin =(e)=>{setCin(e.target.value)}
    
    const handleDate_debut=(e)=>{setDate_debut(e.target.value);}
    
    const handleDate_fin =(e)=>{setDate_fin(e.target.value)}

    const addCongeInfo = async(e)=>{
        e.preventDefault();
        const url='http://localhost:8000/api/conges';
        const formData2 =new FormData();
        
        formData2.append('cin',cin);
        formData2.append('date_debut',date_debut);
        formData2.append('date_fin',date_fin);
       
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
        await axios.post(url, formData2, config).then(res => {
            console.log('Posting..',res);
            navigate("/gererConge");
            setMessage('Ajout Terminée..');
            
        }).catch((err) => {
            console.log(err);
            if(cin===null){
                setMessage('Completez N°CIN ..');
            }
            else if(date_debut===null){
                setMessage('Completez date debut du conge ..');
            }
            else if(date_fin===null){
                setMessage('Completez date fin du conge ..');
            }
            else {setMessage('Verifier N°CIN et Date debut .. (Le personnel n\'existe pas..ou le congé est déja fixé!!)');}
        })
    }

  return (
    <div className='ajout-conge'>
    <form className='form-ajout'>
        <div id='form-ajout-item'>
            <div id='txt'>Cin :</div>
            <input type='number' name='cin' value={cin} onChange={handleCin} required />
        </div>
        <div id='form-ajout-item'>
            <div id='txt'>Date debut :</div>
            <input type='date' name='date_debut' value={date_debut} onChange={handleDate_debut} required />
        </div>
        <div id='form-ajout-item'>
            <div id='txt'>Date fin :</div>
            <input type='date' name='date_fin' value={date_fin} onChange={handleDate_fin} required />
        </div>
        <button type='submit' id='btn' onClick={addCongeInfo }>Ajouter  </button>
    </form>
    <div id='message'>{message}</div>
</div>
  )
}

export default AjouterConge