import Layout from "../../Components/Reuseable/layout";
import "../../Components/CSS/pagesCSS/about.css";
import Footer from "../../Components/Reuseable/Footer.jsx";
import CoptRight from "../../Components/Reuseable/Copyrights";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Components/CSS/pagesCSS/profile.css";
import { fetchProfile, STATUSES } from "../../redux/getReducer/getUserProfile";
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const dispatch = useDispatch();
  const { data: profile, status } = useSelector((state) => state.profile);


  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
     
      </h2>
    );
  }
  if (status === STATUSES.ERROR) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Something went wrong!
      </h2>
    );
  }
  return (
    <>
      <Layout />
      <div className="aboutpage">
        <div className="aboutpageheader">
          <h2>MKS Racing Dashboard</h2>
        </div>
        <div className="coldashboard">
          <div className="card11">
            <h1>
              {profile.FirstName} {profile.LastName}
            </h1>
            <p className="title11">{profile.Email}</p>
            <p>{profile.PassportNo}</p>
            <p>{profile.PhoneNumber}</p>
            <div>
              {/* <p>
                <i className="fa fa-dribbble"></i>
              </p> */}
            </div>
          </div>
        </div>
        <div className="backbtn">
           <button class="button" onClick={() => {navigate('/dashboard')}}>Back</button>
        </div>
      </div>
      <Footer />
      <CoptRight />
    </>
  );
};
export default Profile;
