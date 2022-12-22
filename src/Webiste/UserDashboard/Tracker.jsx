import React, { Fragment ,useEffect } from "react";
import Header from "../Components/Reuseable/Header";
import Auth from "../Components/Reuseable/Auth";
import Notification from "../Components/Home/Components/Notification";
import Tracker from "../Components/Home/Components/Tracker";
import Search from "../Components/Home/Components/Search";
import ExNews from "../Components/Home/Components/ExNews";
import Language from "../Components/Home/Components/Language";
import { getUserDetails } from "../redux/postReducer/UserPost";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Animate from '../assets/loader.json'
import Lottie from 'lottie-react';
import { fetchsingleUser ,STATUSES } from "../redux/getReducer/getSingleUser";

const WinnerList = () => {

  const { data: singleUser, status } = useSelector((state) => state.singleUser);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchsingleUser());
  }, [ dispatch]);

  console.log(singleUser,'asadasds1')

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }}
 
 

  if (status === STATUSES.LOADING) {
    return (
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
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
  };

  return (
    <Fragment>
      <div className="d-flex">
        <Header />
        <Auth />
      </div>
      <div className="rightlayoutinner dashboardH">
        <ExNews />
        <Search />
        <Tracker />
        <Notification />
        <Language />
      </div>
      <div className="userHeader">
        <h3>Tracker</h3>
      </div>
      <div className="ButtonTracker">
            <button className="SubmitButton Trackerbtn">Horse</button>
            <button className="updateButton Trackerbtn">Trainer</button>
            <button className="updateButton Trackerbtn">Jockey</button>
          </div>
      <div className="userHeader2">
        <div className="trackerhead">
        <h6>Horse Name</h6>
        <h5>Status</h5>
        </div>
        <h6>Action</h6>
      </div>
      <div>
        {
          singleUser.HorseModels === undefined ? <></> :  <>
         {
         singleUser.HorseModels.map((item) => {
            return(
              <div className="winnerRow">
          <div className="trackerbody">
          <h6>{item.NameEn}</h6>
          <h5>{item.HorseStatus === true ? <>Running</>:<>Not Running</>}</h5>
          </div>
          <h6>Remove</h6>
          </div>
            )
          })
         } 
          </>
                  }
       
       
      </div>
    </Fragment>
  );
};

export default WinnerList;
