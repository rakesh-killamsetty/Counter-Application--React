import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route} from 'react-router-dom';

import './App.css'
import Counter from './components/Counter'
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx'
import Users from './components/Users/Users.jsx'
import BMICalculator from './components/BMICalculator/BMICalculator.jsx'
import Header from './components/Header/header.jsx'
import Userlist from './components/Userlist/Userlist.jsx'
import Clock from './components/Clock/Clock.jsx'
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const changeState=()=>{
    setIsLoggedIn(!isLoggedIn);
  }
  // let authButton;
  // if(isLoggedIn===true){
  //   authButton=<button onClick={changeState}>Logout</button>
  // }else{
  //   authButton=<button onClick={changeState}>Login</button>
  // }
  
  return (
      // <Counter />
      // <div>
      //   <h1>Hello User</h1>
      //   {/* {authButton} */}
      //   {isLoggedIn && <button onClick={changeState}>Logout</button>}
      //   {!isLoggedIn && <button onClick={changeState}>Login</button>}
      // </div>
    // <VideoPlayer/>
    // <Users/>
    //<BMICalculator/>
    //<Header/>
    //<Clock/>
    <Routes>
      <Route path='/' element={<Header isLoggedIn={isLoggedIn} changeState={changeState}/>}/>
      <Route path='/userlist' element={<Userlist/>}/>
      <Route path='/bmi-calculator' element={<BMICalculator/>}/>
      <Route path='/clock' element={<Clock/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/video-player' element={<VideoPlayer/>}/>
      <Route path='/users' element={<Users/>}/> 
      <Route path='*' element={<h1>404 Not Found</h1>}/>
    </Routes>

  )
}

export default App
