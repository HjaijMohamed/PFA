import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import './modifierPersonnel.css'

function ModifierPersonnel() {
  const {id}=useParams()
  const navigate=useNavigate()
  const [tel,setTel]=useState();
  const [email,setEmail]=useState();
  const [heure_trav,setHeure_trav]=useState();
  
  const updateTel=(e)=>{
      setTel(e.target.value);
  }
  const updateEmail=(e)=>{
    setEmail(e.target.value);
}
const updateHeure_trav=(e)=>{
    setHeure_trav(e.target.value);
}

  const updatePersonnelTel = async(e) =>{
          e.preventDefault();
          axios.put(`http://127.0.0.1:8000/api/personnels/${id}`, {
          tel
        }).then(response => {
          console.log(response);
          navigate("/gererPersonnel");
        }).catch(err => {
          console.log(err);
      });
  }
  const updatePersonnelEmail = async(e) =>{
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/personnels/${id}`, {
        email
    }).then(response => {
        console.log(response);
        navigate("/gererPersonnel");
    }).catch(err => {
        console.log(err);
    });
    }
    const updatePersonnelHeure_trav = async(e) =>{
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/personnels/${id}`, {
        heure_trav
    }).then(response => {
        console.log(response);
        navigate("/gererPersonnel");

    }).catch(err => {
        console.log(err);
    });
    }
  return (
    <div className='modifier-personnel'>
        <form className='form-content'>
          <div className='form-item'>
              <div>Tel:</div>
              <div>
                <input type='number' name='tel' value={tel} onChange={updateTel}/>
                <button onClick={updatePersonnelTel} id='btn-mo'>changer N°Tel</button>
              </div>
              
          </div>
          <div  className='form-item'>
              <div>Email:</div>
              <div>
              <input type='email' name='email' value={email} onChange={updateEmail}/>
              <button onClick={updatePersonnelEmail} id='btn-mo'>changer Email</button>
              </div>
           </div>
          <div  className='form-item'>
              <div>Heure_trav:</div>
              <div>
              <input type='time' name='heure_trav' value={heure_trav} onChange={updateHeure_trav}/>
              <button onClick={updatePersonnelHeure_trav} id='btn-mo'>changer Heure</button>
              </div>
         </div>
       </form>
    </div>
  )
}

export default ModifierPersonnel