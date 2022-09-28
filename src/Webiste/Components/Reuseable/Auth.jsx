import React from "react";
import { BsCaretDownFill } from "react-icons/bs";
import "../CSS/HomeCSS/auth.css";
import profile from "../../assets/profile.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {NavLink } from "react-router-dom";
import { getUserDetails } from "../../redux/postReducer/UserPost";
import { logout } from '../../redux/getReducer/UserSlice'
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { userInfo, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails());
    }
   
  }, [userToken, dispatch]);

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <>
     
      <div className="cta">
        {userInfo ? (
        //   <div className="auth">
        //   <div className="userprofile">
        //     <span className="profilepic">
        //       <img src={profile} alt="" />
        //     </span>
        //     <span className="profilename">
        //       <p className="username">John Doe Elizebth</p>
        //       <p className="pointuser">1000 pts</p>
        //     </span>
        //     <span>
        //       <BsCaretDownFill
        //         style={{
        //           color: "rgba(0, 0, 0, 0.5)",
        //         }}
        //       />
        //     </span>
        //   </div>
        // </div>
          <button className="button"  onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <div className="auth1 ">
            <NavLink className="buttonLogin" to="/login">
            Login
          </NavLink>
          <NavLink className="buttonSubscribe" to="/registration">
            Subscribe
          </NavLink>
          </div>
        )}
      </div>
      
    </>
  );
};
export default Auth;
