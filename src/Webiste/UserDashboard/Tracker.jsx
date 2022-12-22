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
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
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
      <Tabs
      defaultActiveKey="1"
      id="fill-tab-example"
      className="mb-3 trackerTab"
      fill
    >
      <Tab eventKey="1" title="Horse" className="tracker">
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
      </Tab>
      <Tab eventKey="2" title="Trainer">
      <div className="userHeader2">
        <div className="trackerhead">
        <h6>Trainer Name</h6>
        <h5>Status</h5>
        </div>
        <h6>Action</h6>
      </div>
      <div>
        {
          singleUser.TrainerModels === undefined ? <></> :  <>
         {
         singleUser.TrainerModels.map((item) => {
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
      </Tab>
      <Tab eventKey="longer-tab" title="Owner">
      <div className="userHeader2">
        <div className="trackerhead">
        <h6>Owner Name</h6>
        <h5>Status</h5>
        </div>
        <h6>Action</h6>
      </div>
      <div>
        {
          singleUser.TrainerModels === undefined ? <></> :  <>
         {
         singleUser.OwnerModels.map((item) => {
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
      </Tab>
     
    </Tabs>
      <div className="ButtonTracker">
            <button className="SubmitButton Trackerbtn">Horse</button>
            <button className="updateButton Trackerbtn">Trainer</button>
            <button className="updateButton Trackerbtn">Jockey</button>
          </div>
     
    </Fragment>
  );
};

export default WinnerList;
