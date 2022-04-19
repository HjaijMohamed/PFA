import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router';
import './supprimerAbsence.css'


function SupprimerAbsence() {
    const {id}=useParams();
    const navigate=useNavigate()
    const deleteAbsenceInfo = async(e) =>{
        e.preventDefault();
         axios.delete(`http://localhost:8000/api/absences/${id}`
    ).then(response => {
        console.log(response);
        navigate("/gererAbsence");
    }).catch(err => {
        console.log(err);
    });
}
  return (
    <div className='supprimer-presence'>
    <div id='txt-del'>Voulez-vous vraiment Supprimer le conge?</div>
    <button onClick={deleteAbsenceInfo}>Effacer Conge</button>
    </div>
  )
}

export default SupprimerAbsence