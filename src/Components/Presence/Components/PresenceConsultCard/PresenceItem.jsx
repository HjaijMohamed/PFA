
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import './presenceItem.css'


function PresenceItem({item,index}) {    
    const [personnel,setPersonnel] = useState([])
    const [test,setTest] =useState(true)
    const getPersonnel =async ()=>{
    const response =await axios.get(`http://localhost:8000/api/personnels/${item.cin}`)
      setPersonnel(response.data)
    }
    useEffect(()=>{
      getPersonnel()
    },[])
    const urlimg=`http://127.0.0.1:8000${personnel.img}`
    
    const urlSuprim=`/supprimerPresence/${item.cin}/${item.date_entree}`    
    const submit = () => {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom_ui'>
              <button id='btn-no' onClick={onClose}>X</button>
              <h1>Confirmer</h1>
              <p>Voulez-vous vraiment Supprimer le presence?</p>
              <button id='btn-conf'
                onClick={() => { 
                  axios.delete(`http://localhost:8000/api/presences/${item.cin}/${item.date_entree}`
              ).then(response => {
                console.log(response);
                onClose();
                setTest(false);
              }).catch(err => {
                  console.log(err);
              });
              
            }
                  }>Supprimer</button>
            </div>
          );
        }
       });}
     
        return (
          <div  >
            {test ? 
            <div className='presence-item' id= {index%2 ===0  ?'impairPresence'  : 'pairPresence'}>
                <div id='cin'>{item.cin}</div>
                <div id='img-icon'><img src={urlimg} id='img' alt=''/></div>
                <div id='date_entree'>{item.date_entree}</div>
                <div id='nom-prenom'>{personnel.prenom} {personnel.nom}</div>
                <div id='heure_entree'>{item.heure_entree}</div>
                <button id ='btn-del' onClick={submit}>Supprimer</button>
            </div>
            :<div></div>}
            </div>
        )
}

export default PresenceItem