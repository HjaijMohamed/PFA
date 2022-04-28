import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { Link } from 'react-router-dom'
import './congeItem.css'

function CongeItem({item,index}) {
    const [personnel,setPersonnel] = useState([])
    const getPersonnel =async ()=>{
    const response =await axios.get(`http://localhost:8000/api/personnels/${item.cin}`)
      setPersonnel(response.data)
    }
    const [test,setTest] =useState(true)

  const submit = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div>
          {test ? <div className='custom_ui'>
            <button id='btn-no' onClick={onClose}>X</button>
            <h1>Confirmer</h1>
            <p>Voulez-vous vraiment Supprimer le presence?</p>
            <button id='btn-conf'
              onClick={() => { 
                axios.delete(`http://localhost:8000/api/conges/${item.id}`
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
          :<div></div>}
          </div>
        );
      }
     });}

    useEffect(()=>{
      getPersonnel()
    },[])
    const urlimg=`http://127.0.0.1:8000${personnel.img}`
    const urlSuprim=`/supprimerConge/${item.id}`   
    return (
        <div>
        {test ? 
        <div className='conge-item'  id= {index%2 ===0  ?'impairConge'  : 'pairConge'}>
            <div id='cin'>CIN: {item.cin}</div>
            <div id='img-icon'><img src={urlimg} id='img' alt=''/></div>
            <div id='nom-prenom'> {personnel.nom} {personnel.prenom}</div>
            <div id='date_debut'> {item.date_debut}</div>
            <div id='date_fin'>{item.date_fin}</div>
            <button div id ='btn-del' onClick={submit}>Supprimer</button>
        </div>
        :<div></div>}
        </div>
    )
}

export default CongeItem