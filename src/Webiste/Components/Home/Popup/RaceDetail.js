import React from "react";

import "../../../Components/CSS/RaceCardCSS/racedetail.css";
import flag from "../../../assets/United Arab Emirates.png";

import img from "../../../assets/image 10.png";
import img1 from "../../../assets/image 10 (1).png";

import Moment from 'react-moment';

import { IoCloudyOutline ,IoPartlySunnyOutline } from "react-icons/io5";
import Cookies from "js-cookie";

const RaceDetail = (modaldata) => {
 
   
    
     
      const cookiedata = Cookies.get('i18next')
  return (
    <div className="RaceCardDetail">
          {modaldata.length !== 0 ? (
            <div className="RaceDetailHeader">
              <div>
                <div className="colorheader">
                  <div>
                    <span className="racenameflex">
                      <p>
                        {cookiedata === "en" ? (
                          modaldata.data.RaceCourseData === null ? (
                            <>N/A</>
                          ) : (
                            modaldata.data.RaceCourseData.TrackNameEn
                          )
                        ) : modaldata.data.RaceCourseData === null ? (
                          <>N/A</>
                        ) : (
                          modaldata.data.RaceCourseData.TrackNameAr
                        )}
                      </p>
                      <img src={flag} alt="" />
                    </span>
                    <p className="itemtime">
                      <Moment format='MMMM Do YYYY'>{modaldata.data.DayNTime}</Moment>
                    </p>
               
                  </div>
             
                </div>
                <div className="racedisc">
                  <div className="itemraces">
                    <div className="inner_itemraces">
                      <span className="itemraces_left">
                        <span className="race">
                          <p>Race 1</p>
                        
                        </span>

                        <img
                          className="sponsor"
                          src={modaldata.data.SponsorData === null ? <></> :modaldata.data.SponsorData.image}
                          alt=""
                        />
                      </span>
                      <span className="itemraces_center">
                        <h5>
                          {" "}
                          {cookiedata === "en" ? (
                            modaldata.data.RaceNameModelData === null ? (
                              <>N/A</>
                            ) : (
                              modaldata.data.RaceNameModelData.NameEn
                            )
                          ) : modaldata.data.RaceNameModelData === null ? (
                            <>N/A</>
                          ) : (
                            modaldata.data.RaceNameModelData.NameAr
                          )}{" "}
                        </h5>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "start",
                            width: "60%",
                          }}
                        >
                          <p
                            style={{
                              padding: "5px",
                            }}
                          >
                            {modaldata.data.RaceKindData.NameEn}
                          </p>
                          <p
                            style={{
                              padding: "5px",
                            }}
                          >
                            {modaldata.data.RaceTypeModelData.NameEn}
                          </p>
                        </div>
                      </span>
                      <span className="itemraces_right">
                        <p
                          style={{
                            display: "flex",
                            alignItems: "center",
                            margin: "15px",
                          }}
                        >
                          {
                            modaldata.data.WeatherType === 'Sunny' ? <IoPartlySunnyOutline className="weatherIcon"/> : <IoCloudyOutline className="weatherIcon"/>
                          }
                          {/* <img src={weather} alt="" /> */}
                        </p>
                        <span className="distance">
                          <p>
                            {modaldata.data.TrackLengthData.TrackLength}m{" "}
                            a{modaldata.data.WeatherDegree}F
                          </p>
                        </span>
                        <div className="Favourite">
                          <div>
                            <p>Favourite</p>
                            <br />
                            {/* <div
                              style={{
                                display: "flex",
                                width:'100px',
                                justifyContent:'space-between'
                              }}
                            >
                              <p>Notre Dame</p>
                              <img src={arrow} alt="" className="videoicon" />
                            </div>
                            <p>4.40</p> */}
                          </div>
                        </div>
                      </span>
                    </div>
                    <p>
                      <b>DESCRIPTION</b> :{modaldata.data.DescriptionEn}
                    </p>
                  </div>
                </div>
                <div className="prizecard">
                  <div className="prizecardheaders">
                    <p>
                      Total Prize:
                      <b>
                        {modaldata.data.FirstPrice +
                          modaldata.data.SecondPrice +
                          modaldata.data.ThirdPrice +
                          modaldata.data.FourthPrice +
                          modaldata.data.FifthPrice +
                          modaldata.data.SixthPrice}
                      </b>
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      {/* <button
                        style={btnNew}
                        onClick={() => {
                          alert("Tricast");
                        }}
                      >
                        Tricast
                      </button>
                      <button>
                        Pick Six
                      </button> */}
                    </div>
                  </div>
                  <div className="Competitiontrophy">
                    <div className="Trophydata">
                      <span>1st</span>
                      <span>
                        <img src={img1} alt="" />
                      </span>
                      <div className="Trophydata_P">
                        <h6>{modaldata.data.FirstPrice} AED</h6>
                      </div>
                    </div>
                    <div className="Trophydata">
                      <span>2nd</span>
                      <span>
                        <img src={img} alt="" />
                      </span>
                      <div className="Trophydata_P">
                        <h6>{modaldata.data.SecondPrice} AED</h6>
                      </div>
                    </div>
                    <div className="Trophydata">
                      <span>3rd</span>
                      <span>
                        <img src={img} alt="" />
                      </span>
                      <div className="Trophydata_P">
                        <h6>{modaldata.data.ThirdPrice} AED</h6>
                      </div>
                    </div>
                    <div className="Trophydata">
                      <span>4th</span>
                      <span>
                        <img src={img} alt="" />
                      </span>
                      <div className="Trophydata_P">
                        <h6>{modaldata.data.FourthPrice} AED</h6>
                      </div>
                    </div>
                    <div className="Trophydata">
                      <span>5th</span>
                      <span>
                        <img src={img} alt="" />
                      </span>
                      <div className="Trophydata_P">
                        <h6>{modaldata.data.FifthPrice} AED</h6>
                      </div>
                    </div>
                    <div className="Trophydata">
                      <span>6th</span>
                      <span>
                        <img src={img} alt="" />
                      </span>
                      <div className="Trophydata_P">
                        <h6>{modaldata.data.SixthPrice} AED</h6>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          ) : (
            <div className="nodata">No Data</div>
          )}
          
        </div>
  )
}

export default RaceDetail
