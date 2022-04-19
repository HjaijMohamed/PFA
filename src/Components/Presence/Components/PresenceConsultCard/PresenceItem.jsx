
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import './presenceItem.css'


function PresenceItem({item,index}) {    
    const [personnel,setPersonnel] = useState([])
    const [test,setTest] =useState(true)
    const [message,setMessage]=useState()
    const navigate=useNavigate()
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
                navigate("/gererPresence");
                alert("la presence du personnel a été supprimer avec succés!!");
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
          <div>
            
            <div className={test ? 'presence-item':'presence-item-sup'}>
                <div id='cin'>CIN:{item.cin}</div>
                <div id='img-icon'><img src={urlimg} id='img' alt=''/></div>
                <div id='date_entree'>Le {item.date_entree}</div>
                <div id='nom-prenom'>{personnel.prenom} {personnel.nom}</div>
                <div id='heure_entree'>Heure d'entrée: {item.heure_entree}</div>
                <div id='nb_heures'>{item.nb_heures } Heures de travail</div>
                <div id='cin'></div>
                {/*<Link className='linkStyle' to={urlSuprim}> <div id ='btn-del' >Supprimer</div></Link>*/}
                {test ? 
                <button id ='btn-del' onClick={submit}>Supprimer</button>
                :<div id='non-dispo'>Element n'est pas disponible</div>
                }
            </div>
            {/*:<div className='presence-item-sup'></div>*/}
            
            <div>{message}</div>
            </div>
        )
}

export default PresenceItem