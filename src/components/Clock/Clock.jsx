import React, { use } from 'react'
import { useState,useEffect } from 'react';
import dateTime from 'date-time';   
function Clock() {
    const [currentTime,setCurrentTime]=useState(dateTime());
    const [showClock,setShowClock]=useState(true);
    useEffect(()=>{
        let interval;
        if(showClock){
            interval=setInterval(()=>{
            setCurrentTime(dateTime());
            console.log("Clock Updated");
        },1000);
        }
        
        return ()=>{clearInterval(interval); 
            console.log("Interval cleared");
         }

    },[showClock])
  return (
    <div>
      <header>
        <button onClick={()=>setShowClock(!showClock)}>
            {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        <h1>Clock</h1>
      </header>
      {showClock ? (
      <div>
        
        <img src="https://in.images.search.yahoo.com/images/view;_ylt=Awrx_3c9m3lpEr0pcRi9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2FmMDIwOGYzOGU4MWM0MDc5MTNhZjkyYTM4NTNhMzdmBGdwb3MDNQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dclock%26type%3DG210IN826G91993Mb15dec977f8a98a0964b5d312230ab5d%26fr%3Dmcafee_e-26860_3pc-v%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D5&w=1260&h=1260&imgurl=img.muji.net%2Fimg%2Fitem%2F4549337330030_1260.jpg&rurl=https%3A%2F%2Fwww.muji.com%2Fin%2Fproducts%2Fcmdty%2Fdetail%2F4549337330030&size=131KB&p=clock&oid=af0208f38e81c407913af92a3853a37f&fr2=piv-web&fr=mcafee_e-26860_3pc-v&tt=ANALOG+CLOCK+%2F+L+WALL+CLOCK+%2F+BEECH+%2F+NATURAL+%7C+MUJI&b=0&ni=21&no=5&ts=&tab=organic&sigr=EWgMyW7Joiy8&sigb=eCKxOCXYzs6Q&sigi=JAbKAaVec9sY&sigt=99_xthmxW35d&.crumb=37ywXkZfc.j&fr=mcafee_e-26860_3pc-v&fr2=piv-web&type=G210IN826G91993Mb15dec977f8a98a0964b5d312230ab5d" alt="Clock" />
        <div>
            <h2>Current Time:</h2>  
            <p>
                {currentTime}
            </p>
        </div>
      </div>) : null}
    </div>
  )
}

export default Clock
