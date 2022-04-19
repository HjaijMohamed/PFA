import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router';
import './supprimerPresence.css'

function SupprimerPresence() {
  const {cin,date}=useParams();
    const navigate=useNavigate()
    const deletePresenceInfo = async(e) =>{
        e.preventDefault();
         axios.delete(`http://localhost:8000/api/presences/${cin}/${date}`
    ).then(response => {
        console.log(response);
        navigate("/gererPresence");
    }).catch(err => {
        console.log(err);
    });
}
  return (
    <div className='supprimer-presence'>
    <div id='txt-del'>Voulez-vous vraiment Supprimer le presence?</div>
    <button onClick={deletePresenceInfo}>Effacer Presence</button>
    </div>
  )
}

export default SupprimerPresence