import React, { Fragment ,useEffect } from "react";
import Header from "../Components/Reuseable/Header";
import Auth from "../Components/Reuseable/Auth";
import Notification from "../Components/Home/Components/Notification";
import Tracker from "../Components/Home/Components/Tracker";
import Search from "../Components/Home/Components/Search";
import ExNews from "../Components/Home/Components/ExNews";
import Language from "../Components/Home/Components/Language";
import { useDispatch, useSelector } from "react-redux";
import Animate from '../assets/loader.json'
import Lottie from 'lottie-react';

import { fetchsingleUser ,STATUSES } from "../redux/getReducer/getSingleUser";
import { useState } from "react";

const WinnerList = () => {
  const [horseDetail, sethorseDetail] = useState(true)
  const [traineDetail, settraineDetail] = useState(false)
  const [ownerDetail, setownerDetail] = useState(false)


  const { data: singleUser, status } = useSelector((state) => state.singleUser);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchsingleUser());
  }, [ dispatch]);

  console.log(singleUser,'asadasds1')

 
 

  if (status === STATUSES.LOADING) {
    return (
      <Lottie 
      animationData={Animate}
      className="homeLottie"
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
const handleHorse= ()=>{

  sethorseDetail(true);
  settraineDetail(false);
  setownerDetail(false);
}
const handleTrainer= ()=>{
  settraineDetail(true);
  sethorseDetail(false);
  setownerDetail(false);

}
const handleOwner = ()=>{

  setownerDetail(true);
  settraineDetail(false);
  sethorseDetail(false);
}
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
            <button   className={horseDetail ? 'SubmitButton' : 'updateButton'} onClick={handleHorse}>Horse</button>
            <button  className={traineDetail ? 'SubmitButton' : 'updateButton'}  onClick={handleTrainer}>Trainer</button>
            <button  className={ownerDetail ? 'SubmitButton' : 'updateButton'}  onClick={handleOwner}>Owner</button>
          </div>
        
          
          {
    horseDetail ? 
    <>
<div className="userHeader2">

<div className="trackerhead">
<h6>Horse Name</h6>
<h5>Status</h5>
</div>
<h6>Action</h6>
</div>

<div>
{      
          singleUser.TrackHorses === undefined ? <></> :  <>
         {
         singleUser.TrackHorses.map((item) => {
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
</> :<></> }

   
{
    traineDetail ? 
    <>
<div className="userHeader2">

<div className="trackerhead">
<h6>Trainer Name</h6>
    <h5>Status</h5>
    </div>
    <h6>Action</h6>
</div>

<div>
{      
          singleUser.TrackTrainers === undefined ? <></> :  <>
         {
         singleUser.TrackTrainers.map((item) => {
            return(
              <div className="winnerRow">
          <div className="trackerbody">
          <h6>{item.NameEn}</h6>
          <h5>Not Running</h5>
          </div>
          <h6>Remove</h6>
          </div>
            )
          })
         } 
          </>
                  }
       
       
      </div>
</> :<></> }
{/* {traineDetail ? 
  <div className="userHeader2">
    <div className="trackerhead">
    <h6>Trainer Name</h6>
    <h5>Status</h5>
    </div>
    <h6>Action</h6>

  </div> 
  
  
  :<></>} */}
 

 {
    ownerDetail ? 
    <>
<div className="userHeader2">

<div className="trackerhead">
<h6>Owner Name</h6>
<h5>Status</h5>
</div>
<h6>Action</h6>
</div>

<div>
{      
          singleUser.TrackOwners === undefined ? <></> :  <>
         {
         singleUser.TrackOwners.map((item) => {
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
</> :<></> }

  
    </Fragment>
  );
};

export default WinnerList;
