import React from "react";
import { BsCaretDownFill } from 'react-icons/bs';
import '../CSS/HomeCSS/auth.css'
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
      </div>
     </div>
    </>
  )
}
export default Auth