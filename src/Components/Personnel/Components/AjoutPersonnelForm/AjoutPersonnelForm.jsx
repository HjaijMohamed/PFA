import './ajoutPersonnelForm.css'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

function AjoutPersonnelForm() {
    const navigate = useNavigate();

    const [nom,setNom]=useState('');
    const [prenom,setPrenom]=useState('');
    const [cin,setCin]=useState();
    const [date_nais, setDate_nais]=useState('');
    const [tel, setTel]=useState();
    const [email, setEmail]=useState('');
    const [heure_trav, setHeure_trav]=useState('');
    const [img, setImg]=useState('');
    
    const updateNom=(e)=>{setNom(e.target.value);}
    
    const updatePrenom=(e)=>{setPrenom(e.target.value);}

    const updateCin=(e)=>{setCin(e.target.value);}
    
    const updateDate_nais = (e) =>{setDate_nais(e.target.value);}

    const updateTel = (e) =>{setTel(e.target.value);}

    const updateEmail = (e) =>{setEmail(e.target.value);}

    const updateHeure_trav = (e) =>{setHeure_trav(e.target.value);}

    const updateImg = (e) =>{setImg(e.target.files[0]);}
    
    const addPersonnelInfo = async(e) =>{
        e.preventDefault();
        const url = 'http://localhost:8000/api/personnels';
        const formData = new FormData();
       
        formData.append('cin',cin);
        formData.append('nom',nom);
        formData.append('prenom',prenom);
        formData.append('date_nais',date_nais);
        formData.append('tel',tel);
        formData.append('email',email);
        formData.append('heure_trav',heure_trav);
        formData.append('img',img);

        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
        await axios.post(url, formData, config).then(res => {
            console.log('Posting..',res);
            navigate("/gererPersonnel");
        
        }).catch(err => console.log(err))
    }

  return (
    <div className='ajout-personnel-form'>
        <div id="top-form">Formulaire</div>
        <form className='form'>
            <div className='form-left' >
                <div id='item'>
                  <div id='txt'>N°CIN</div>
                  <div><input type='number' name="cin" value={cin} onChange={updateCin} placeholder='Numero CIN' required /></div>
                </div>
                <div id='item'>
                  <div id='txt'>Nom</div>
                  <div><input type='text' name="nom" value={nom} onChange={updateNom} placeholder='Nom' required /></div>
                </div>
                <div id='item'>
                  <div id='txt'>Prenom</div>
                  <div><input type='text' name="prenom" value={prenom} onChange={updatePrenom} placeholder='Prenom' required/></div>
                </div>
                <div id='item'>
                  <div id='txt'>Heure debut travAail</div>
                  <div><input type='time'name="heure_trav" value={heure_trav} onChange={updateHeure_trav} required /></div>
                </div>
            </div>
            <div className='form-middle' >
                <div id='item'>
                  <div id='txt'>N°Tel</div>
                  <div><input type='number'name="tel" value={tel} onChange={updateTel} placeholder='Numero Telephone' required/></div>
                </div>
                <div id='item'>
                  <div id='txt'>Email</div>
                  <div><input type='email'name="email" value={email} onChange={updateEmail} placeholder='Email' required/></div>
                </div>
                <div id='item'>
                  <div id='txt'>Date naissance</div>
                  <div><input type='date'name="date_nais" value={date_nais} onChange={updateDate_nais} required /></div>
                </div>
                <div id='item'>
                  <div id='txt'>Photo Personnel</div>
                  <div><input type='file' name='img'  onChange={updateImg} required/></div>
                </div>
            </div>
        </form >
        <div><button onClick={addPersonnelInfo} id='btn-ajout'>Ajouter Personnel</button></div>
    </div>
  )
}

export default AjoutPersonnelForm