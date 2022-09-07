import React from "react";
import { BsCaretDownFill } from 'react-icons/bs';
import '../CSS/auth.css'
import profile from '../../assets/profile.jpg'

const Auth = () => {
  return (
    <>
     <div className="auth">
      <div className="userprofile">
      <span className="profilepic">
         <img src={profile} alt="" />
       </span>
       <span className="profilename">
        <p className="username">John Doe Elizebth</p>
        <p className="pointuser">1000 pts</p>
       </span>
       <span>
        <BsCaretDownFill style={{
         color:'rgba(0, 0, 0, 0.5)'
        }}/>
       </span>
       {/* <div className="dropdown-content">
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      </div> */}
      </div>
      
     </div>
    </>
  )
}
export default Auth