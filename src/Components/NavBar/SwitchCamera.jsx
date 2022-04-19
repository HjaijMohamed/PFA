import axios from 'axios'
import React, { useState } from 'react'
import './switchCamera.css'
function SwitchCamera() {
    const [check,setCheck]=useState(false)
    const [test,setTest]=useState('f')
    const getRecognitionOn=async ()=>{
        const response =await axios.get('http://localhost:8000/api/recognition')
    }
    const RecognitionOff=async ()=>{
        const response =await axios.get('http://localhost:8000/api/recognitionOff')
    }
    const handleChack =()=>{
        if(!check){
            setCheck(true);
            setTest('t');
            getRecognitionOn();
        }    
        else if(check){
            setCheck(false);
            setTest('f');
            RecognitionOff();
        }
    }
  return (
    <div className='switch-camera'>
        <div class="container">
        
        
        <div class="switch-holder">
            <div class="switch-label">
                <span>Camera</span>
            </div>
            <div class="switch-toggle">
                <input type="checkbox" id="camera" onChange={handleChack} />
                <label for="camera"></label>
            </div>
            {test}
        </div>
    </div>


    </div>

)
}
export default SwitchCamera