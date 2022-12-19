import React, { Fragment } from "react";
import Header from "../Components/Reuseable/Header";
import Auth from "../Components/Reuseable/Auth";
import Notification from "../Components/Home/Components/Notification";
import Tracker from "../Components/Home/Components/Tracker";
import Search from "../Components/Home/Components/Search";
import ExNews from "../Components/Home/Components/ExNews";
import Language from "../Components/Home/Components/Language";

const WinnerList = () => {
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
            <button className="updateButton Trackerbtn">Horse</button>
            <button className="updateButton Trackerbtn">Trainer</button>
            <button className="updateButton Trackerbtn">Jockey</button>
          </div>
      <div className="userHeader2">
        <div className="trackerhead">
        <h6>Horse Name</h6>
        <h5>Status</h5>
        </div>
        <h6>Edit</h6>
      </div>
      <div>
        <div className="winnerRow">
        <div className="trackerbody">
        <h6>Horse Name</h6>
        <h5>Status</h5>
        </div>
        <h6>Remove</h6>
        </div>
       
      </div>
    </Fragment>
  );
};

export default WinnerList;
