import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router';
import './supprimerConge.css'

function SupprimerConge() {
    const {id}=useParams();
    const navigate=useNavigate()
    const deletePresenceInfo = async(e) =>{
        e.preventDefault();
         axios.delete(`http://localhost:8000/api/conges/${id}`
    ).then(response => {
        console.log(response);
        navigate("/gererConge");
    }).catch(err => {
        console.log(err);
    });
}
  return (
    <div className='supprimer-presence'>
    <div id='txt-del'>Voulez-vous vraiment Supprimer le conge?</div>
    <button onClick={deletePresenceInfo}>Effacer Conge</button>
    </div>
  )
}

export default SupprimerConge