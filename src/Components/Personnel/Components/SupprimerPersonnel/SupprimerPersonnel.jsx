import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router'
import './supprimerPersonnel.css'

function SupprimerPersonnel() {
    const {id}=useParams();
    const navigate=useNavigate()
    const deletePersonnelInfo = async(e) =>{
        e.preventDefault();
         axios.delete(`http://localhost:8000/api/personnels/${id}`
    ).then(response => {
        console.log(response);
        navigate("/gererPersonnel");
    }).catch(err => {
        console.log(err);
    });
}

  return (
      <div className='supprimer-personnel'>
    <div id='txt-del'>Voulez-vous vraiment Supprimer le personnel?</div>
    <button onClick={deletePersonnelInfo}>Effacer Personnel</button>
    </div>
  )
}

export default SupprimerPersonnel