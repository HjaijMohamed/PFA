import axios from 'axios'
import { useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { Link } from 'react-router-dom'
import {  useParams } from 'react-router'

function PersonnelItem({item,index}) {
  const urlModif=`/modifierPersonnel/${item.cin}`
  const urlimg=`http://127.0.0.1:8000${item.img}`
  const urlSuprim=`/supprimerPersonnel/${item.cin}`

  const {id}=useParams();
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
                axios.delete(`http://localhost:8000/api/personnels/${item.cin}`
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

  
  
  return (
    <div className='personnelItem-content' id= {index%2 ===0  ?'impair'  : 'pair'}>
        
        <div id='img-id'>
            <div id='id-item'>#0{index}</div>
            <div > <img src={urlimg} id='img-icon' /> </div>
        </div>
        <div id='nom-email'><div>
            <div >{item.nom} {item.prenom}</div>
            <div id='email'>{item.email}</div>
        </div></div>
        <div id='tel'>{item.tel}</div>
        <div id='cin'>{item.cin}</div>
        <div id='heure_trav'>{item.heure_trav}</div>
        <div id='btn'>
        <div></div>
          <div id='btn-div'>
          <Link className='linkStyle' to={urlModif}> <button className='btn-modify'>Modifier</button> </Link>
        {/*<div><Link className='linkStyle' to={urlSuprim}> <div className='btn-delete' >Supprimer</div></Link></div>*/}
        <button className='btn-delete'onClick={submit}>Supprimer</button>
        </div>
        </div>
      
    </div>
            
  )
}

export default PersonnelItem