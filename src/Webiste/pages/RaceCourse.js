import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourse,
  STATUSES,
} from "../../Webiste/redux/getReducer/getRaceCourse";
import "../Components/CSS/RaceCardCSS/racecard.css";
import { Link } from "react-router-dom";
import Layout from "../Components/Reuseable/layout";
import Footer from "../Components/Reuseable/Footer";
import CopyRight from "../Components/Reuseable/Copyrights";

const RaceCourse = () => {
  const dispatch = useDispatch();
  const { data: racecourse, status } = useSelector((state) => state.racecourse);

  useEffect(() => {
    dispatch(fetchCourse());
  }, []);

  console.log(racecourse,'racecourse')
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
          <h2>MKS Racing Race Course</h2>
        </div>
        <div className="aboutpagesection">
          <div className="horseTable">
            <div class="row11">
              {racecourse.map((item) => {
                return (
                  <>
                    <div class="column11">
                      <div class="card11">
                        <h6><b>TrackName :</b>{item.TrackName}</h6>
                        <p><b>Country :</b>{item.Country}</p>
                        <p><b>TrackLength :</b>{item.TrackLength}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default RaceCourse;
