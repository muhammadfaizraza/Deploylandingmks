import { BsCaretDownFill } from "react-icons/bs";
import "../Components/CSS/HomeCSS/auth.css";
import profile from "../assets/profile.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserDetails } from "../redux/postReducer/UserPost";
import { logout } from "../redux/getReducer/UserSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Auth = () => {
  const { userInfo, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if ( token !== null && userInfo === null) {
      dispatch(getUserDetails());
    } 
  }, [userInfo, dispatch]);
  
  function Redirect() {
    navigate("/dashboard");
  }
  

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <div className="cta">
        {userInfo || token ? (
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
                <BsCaretDownFill
                  style={{
                    color: "rgba(0, 0, 0, 0.5)",
                  }}
                />
              </span>
            </div>
            <div className="authhover">
              <ul>
                <li>
                  <Link to="/dashboard" className="LinkStyle">
                    {" "}
                    Dashboard
                  </Link>
                </li>
                <li>
                <Link to="/tracker" className="LinkStyle">
                    {" "}
                    My Tracker
                  </Link>
                </li>
                <li>My Profile</li>
                <li>Setting</li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          </div>
        ) : (
          //   <div className="auth">
          //   <div className="userprofile">
          //     <span className="profilepic">
          //       <img src={profile} alt=""  onClick={Redirect}/>
          //     </span>
          //     <span className="profilename">
          //     <button className="buttonLogout"  onClick={handleLogout}>
          //      Logout
          //   </button>
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
          // <button className="buttonLogout"  onClick={handleLogout}>
          //   Logout
          // </button>
          <div className="auth1 ">
            <NavLink className="buttonLogin" to="/login">
              Login
            </NavLink>
            <NavLink className="buttonSubscribe" to="/register">
              Subscribe
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};
export default Auth;

// <span className="profilepic">
//                    <img src={userInfo.user === null ? <>1</> :userInfo.user.PassportPicture} alt="" />
//                  </span>
//                  <span className="profilename">
//                    <p className="username">{userInfo.user === null ? <>1</> :userInfo.user.FirstName} </p>
//                    <p className="pointuser">1000 pts</p>
//                  </span>
