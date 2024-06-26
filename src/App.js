// import { Routes, Route, } from "react-router-dom";
import { useState } from "react";
import Login from "./login";
import Users from "./Users";

export const Introduction=({setModalIsOpen})=>{
  const openModel=()=>{
    setModalIsOpen(true)
  }
  return(
    <>
    <button className="login" onClick={openModel}>Log in</button>
    </>
  )
}
const App=() =>{
  const [IsloggedIn,setIsLoggedIn]=useState(false)
  return(
    <div>
   <Login setIsLoggedIn={setIsLoggedIn}/>
   <Users IsloggedIn={IsloggedIn} />
    </div>
  );

}
export default App;
