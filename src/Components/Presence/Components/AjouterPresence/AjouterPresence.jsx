import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './ajouterPresence.css'


function AjouterPresence() {
    
    const navigate=useNavigate()
    const [message ,setMessage]=useState('')
    const [cin ,setCin]=useState(null)
    const [heure_entree,setHeure_entree]=useState(null)
    const [date_entree,setDate_entree]=useState( null)
    const [nb_heures,setNb_heures]=useState(0)

    const handleCin =(e)=>{setCin(e.target.value)}
    
    const handleHeure_entree=(e)=>{
        setHeure_entree(e.target.value);
    }
    
    const handleDate_entree =(e)=>{setDate_entree(e.target.value)}

    /*const handleNb_heure =()=>{setNb_heure(16-heure_entree.getHours())}*/

    const addPresenceInfo = async(e)=>{
        e.preventDefault();
        
        

        const url='http://localhost:8000/api/presences';
        const formData2 =new FormData();
        
        formData2.append('cin',cin);
        formData2.append('heure_entree',heure_entree);
        formData2.append('date_entree',date_entree);
        formData2.append('nb_heures',nb_heures);

        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
        await axios.post(url, formData2, config).then(res => {
            console.log('Posting..',res);
            navigate("/gererPresence");
            setMessage('Ajout Terminée..');
            
        }).catch((err) => {
            console.log(err);
            if(cin===null){
                setMessage('Completez N°CIN ..');
            }
            else if(heure_entree===null){
                setMessage('Completez heure d\'entrée du personnel ..');
            }
            else if(date_entree===null){
                setMessage('Completez date d\'entrée du personnel ..');
            }
            else {setMessage('Verifier N°CIN.. l\'employée est déja présent ou n\'existe pas.');}
        })
    }

  return (
    <div className='ajout-presence'>
        <form className='form-ajout'>
            <div id='form-ajout-item'>
                <div id='txt'>Cin</div>
                <input type='number' name='cin' value={cin} onChange={handleCin} required />
            </div>
            <div id='form-ajout-item'>
                <div id='txt'>Heure d'entrée</div>
                <input type='time' name='heure_entree' value={heure_entree} onChange={handleHeure_entree} required />
            </div>
            <div id='form-ajout-item'>
                <div id='txt'>Date d'entrée</div>
                <input type='date' name='date_entree' value={date_entree} onChange={handleDate_entree} required />
            </div>
            <button type='submit' id='btn' onClick={addPresenceInfo }>Ajouter  </button>
        </form>
        <div id='message'>{message}</div>
    </div>
  )
}

export default AjouterPresence