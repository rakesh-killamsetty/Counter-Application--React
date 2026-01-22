import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx'
import Users from './components/Users/Users.jsx'

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
    <Users/>
  )
}

export default App
