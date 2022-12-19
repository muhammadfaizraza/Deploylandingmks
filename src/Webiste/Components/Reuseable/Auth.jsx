import { BsCaretDownFill } from "react-icons/bs";
import "../CSS/HomeCSS/auth.css";
import profile from "../../assets/profile.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {NavLink } from "react-router-dom";
import { getUserDetails } from "../../redux/postReducer/UserPost";
import { logout } from '../../redux/getReducer/UserSlice'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {useTranslation} from 'react-i18next';

const Auth = () => {
  const {t} = useTranslation()
  const { userInfo, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    if (userInfo === null) {
      dispatch(getUserDetails());
    }
   
  }, [userInfo, dispatch]);
function Redirect(){
  navigate('/dashboard')
}
  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  console.log(userInfo,'userInfo')
  return (
    <>
 
     
      <div className="cta">
        {userInfo || userToken ? (
               <div className="auth">
               <div className="userprofile">
               <span className="profilepic">
                   <img src={userInfo === null ? <>Loading ... </> : userInfo.data.PassportPicture} alt="" />
                 </span>
                 <span className="profilename">
                   <p className="username">{userInfo === null ? <> </> : userInfo.data.FirstName} {userInfo === null ? <> </> :userInfo.data.LastName}</p>
                   {/* <p className="pointuser">{t('1000 pts')}</p> */}
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
                  <li><Link to='/dashboard' className="LinkStyle">{t('Dashboard')}</Link></li>
                  <li>{t('My Tracker')}</li>
                  <li><Link to='/myprofile' className="LinkStyle">{t('My Profile')}</Link></li>
                  <li>{t('Setting')}</li>
                  <li onClick={handleLogout}>{t('LOGOUT')}</li>
                </ul>
               </div>
             </div>
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
        ) : (
          <div className="auth1 ">
            <NavLink className="buttonLogin" to="/login">
            {t("Login")}
          </NavLink>
          <NavLink className="buttonSubscribe" to="/registration">
          {t("Subscibe")}
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