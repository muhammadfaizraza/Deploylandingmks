import Layout from "../Components/Reuseable/layout";
import "../Components/CSS/pagesCSS/about.css";
import Footer from "../Components/Reuseable/Footer.jsx";
import CoptRight from "../Components/Reuseable/Copyrights";
import React, { useEffect, useState } from "react";
import "../Components/CSS/RaceCardCSS/racedetail.css";
import flag from "../assets/United Arab Emirates.png";
import Defaultimg from "../assets/Frame.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchsinglerace, STATUSES } from "../redux/getReducer/getSingleRace";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import Zoom from "react-reveal/Zoom";
import { Modal } from "react-bootstrap";
import Competition from "../Components/Competition/Competition";
import img from "../assets/image 10.png";
import img1 from "../assets/image 10 (1).png";
import Summary from "../Components/RaceCard/Summary";
import Draw from "../Components/RaceCard/Draw";
import Predictor from "../Components/RaceCard/Predictor";
import TrackRecord from "../Components/RaceCard/TrackRecord";
import arrow1 from "../assets/image 13 (Traced).png";
import arrow2 from "../assets/arrow1.png";

import Moment from "react-moment";
import PrintOut from "../Components/RaceCard/Printout";
import { IoPartlySunnyOutline, IoCloudyOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import axios from "axios";
import { Lottie } from "lottie-react";
import Animate from "../assets/loader.json";

const Result = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { data: singlerace, status } = useSelector((state) => state.singlerace);

  const [Disable, setDisable] = useState(false);
  const [CastData, setCastData] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // function DataOne(){
  //   if (!state) {
  //     return (
  //       window.location.href = "http://localhost:3000/"
  //     );
  //   }
  // }
  // DataOne();

  const id = "3aa15a95-7b98-4150-b48b-2c5d4855483b";

  useEffect(() => {
    dispatch(fetchsinglerace({ id }));
  }, []);

  if (status === STATUSES.LOADING) {
    <div className="py-4 text-center">
      <div>
        <Lottie animationData={Animate} loop={true} className="load" />
      </div>
    </div>;
  }

  if (status === STATUSES.ERROR) {
    return (
      <h2
        style={{
          margin: "100px",
          width: "50%",
        }}
      >
        Something went wrong!
      </h2>
    );
  }

  const myPara = {
    fontWeight: "400",
    fontSize: "12px",
    color: "rgba(0, 0, 0, 0.5)",
    paddingLeft: "3px",
  };

  const cookiedata = Cookies.get("i18next");

  let menuItems = [];
  for (var i = 0; i < 4; i++) {
    menuItems.push(
      <form>
        <input type="radio" name="contact" />
      </form>
    );
  }

  return (
    <>
      <Layout />
      <div className="aboutpage">
        <div className="aboutpageheader">
          <h2>MKS Racing Result</h2>
        </div>
        <div className="aboutpagesection resultdata">
          <>
            <Zoom>
              <div className="RaceCardDetail">
                {singlerace.length !== 0 ? (
                  <div className="RaceDetailHeader">
                    <div>
                      <div className="colorheader">
                        <div>
                          <span className="racenameflex">
                            <p>
                              {cookiedata === "en" ? (
                                singlerace.RaceCourseData === null ? (
                                  <>N/A</>
                                ) : (
                                  singlerace.RaceCourseData.TrackNameEn
                                )
                              ) : singlerace.RaceCourseData === null ? (
                                <>N/A</>
                              ) : (
                                singlerace.RaceCourseData.TrackNameAr
                              )}
                            </p>
                            <img src={flag} alt="" />
                          </span>
                          <p className="itemtime">
                            <Moment format="D MMM YYYY" withTitle>
                              {singlerace.Day}
                            </Moment>
                          </p>
                          {/* <p className="itemtime"> 
                    <Moment filter={toUpperCaseFilter}> {singlerace.DayNTime}
                          </Moment>  </p> */}
                        </div>
                        {/* <div className="racestatuscolor">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                 
                  </div> */}
                      </div>
                      <div className="racedisc">
                        <div className="itemraces">
                          <div className="inner_itemraces">
                            <span className="itemraces_left">
                              <span
                                className="race"
                                style={{
                                  backgroundColor: `${
                                    singlerace.RaceStatus === "Cancel"
                                      ? "#000000"
                                      : singlerace.RaceStatus === "End"
                                      ? "#FF0000"
                                      : singlerace.RaceStatus === "Live"
                                      ? "#5EC30F"
                                      : "#FF9900"
                                  }`,
                                  color: `${
                                    singlerace.RaceStatus === "Cancel"
                                      ? "#ffff"
                                      : singlerace.RaceStatus === "End"
                                      ? "#00000"
                                      : singlerace.RaceStatus === "Live"
                                      ? "#00000"
                                      : "#000000"
                                  }`,
                                }}
                              >
                                <p>Race 1</p>
                                <Moment add={{ hours: 12 }} format="mm:ss">
                                  {singlerace.DayNTime}
                                </Moment>
                              </span>

                              <img
                                className="sponsor"
                                src={
                                  singlerace.SponsorData.image
                                    ? singlerace.SponsorData.image
                                    : Defaultimg
                                }
                                alt=""
                              />
                            </span>
                            <span className="itemraces_center">
                              <h5>
                                {" "}
                                {cookiedata === "en" ? (
                                  singlerace.RaceNameModelData === null ? (
                                    <>N/A</>
                                  ) : (
                                    singlerace.RaceNameModelData.NameEn
                                  )
                                ) : singlerace.RaceNameModelData === null ? (
                                  <>N/A</>
                                ) : (
                                  singlerace.RaceNameModelData.NameAr
                                )}
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
                                  {cookiedata === "en" ? (
                                    singlerace.RaceKindData === null ? (
                                      <>N/A</>
                                    ) : (
                                      singlerace.RaceKindData.NameEn
                                    )
                                  ) : singlerace.RaceKindData === null ? (
                                    <>N/A</>
                                  ) : (
                                    singlerace.RaceKindData.NameAr
                                  )}
                                </p>
                                <p
                                  style={{
                                    padding: "5px",
                                  }}
                                >
                                  {cookiedata === "en" ? (
                                    singlerace.RaceTypeModelData === null ? (
                                      <>N/A</>
                                    ) : (
                                      singlerace.RaceTypeModelData.NameEn
                                    )
                                  ) : singlerace.RaceTypeModelData === null ? (
                                    <>N/A</>
                                  ) : (
                                    singlerace.RaceTypeModelData.NameAr
                                  )}
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
                                {singlerace.WeatherType === "Sunny" ? (
                                  <IoPartlySunnyOutline className="weatherIcon" />
                                ) : (
                                  <IoCloudyOutline className="weatherIcon" />
                                )}
                                {/* <img src={weather} alt="" /> */}
                              </p>
                              <span className="distance">
                                <p>
                                  {singlerace.TrackLengthData === null ? (
                                    <>N/A</>
                                  ) : (
                                    singlerace.TrackLengthData.TrackLength
                                  )}
                                  m a{singlerace.WeatherDegree}F
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
                          <div className="resultimages">
                            <span className="resultimagesRunningTime">
                              <p>Running Time</p>
                              <h4>02:52:31</h4>
                            </span>
                            <span className="resultimagebox"></span>
                            <span className="resultimagebox"></span>
                            <span className="resultimagebox"></span>
                            <span className="resultimagebox"></span>
                            <span className="resultimagevideo">
                              <img src={arrow2} alt="img" />
                              <p>Watch Now</p>
                            </span>
                          </div>
                          <p>
                            <b>{t("Description")}</b> :
                            {cookiedata === "en" ? (
                              <>{singlerace.DescriptionEn}</>
                            ) : (
                              <>{singlerace.DescriptionAr}</>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="prizecard">
                        <div className="prizecardheaders">
                          <p>
                            {t("Total Prize")}:
                            <b>
                              {singlerace.FirstPrice +
                                singlerace.SecondPrice +
                                singlerace.ThirdPrice +
                                singlerace.FourthPrice +
                                singlerace.FifthPrice +
                                singlerace.SixthPrice}
                            </b>
                          </p>
                          {singlerace.CompetitionRacesPointsModelData.length >
                          0 ? (
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                              }}
                            ></div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="Competitiontrophy">
                          <div className="Trophydata">
                            <span>1st</span>
                            <span>
                              <img src={img1} alt="" />
                            </span>
                            <div className="Trophydata_P">
                              <h6>{singlerace.FirstPrice} AED</h6>
                            </div>
                          </div>
                          <div className="Trophydata">
                            <span>2nd</span>
                            <span>
                              <img src={img} alt="" />
                            </span>
                            <div className="Trophydata_P">
                              <h6>{singlerace.SecondPrice} AED</h6>
                            </div>
                          </div>
                          <div className="Trophydata">
                            <span>3rd</span>
                            <span>
                              <img src={img} alt="" />
                            </span>
                            <div className="Trophydata_P">
                              <h6>{singlerace.ThirdPrice} AED</h6>
                            </div>
                          </div>
                          <div className="Trophydata">
                            <span>4th</span>
                            <span>
                              <img src={img} alt="" />
                            </span>
                            <div className="Trophydata_P">
                              <h6>{singlerace.FourthPrice} AED</h6>
                            </div>
                          </div>
                          <div className="Trophydata">
                            <span>5th</span>
                            <span>
                              <img src={img} alt="" />
                            </span>
                            <div className="Trophydata_P">
                              <h6>{singlerace.FifthPrice} AED</h6>
                            </div>
                          </div>
                          <div className="Trophydata">
                            <span>6th</span>
                            <span>
                              <img src={img} alt="" />
                            </span>
                            <div className="Trophydata_P">
                              <h6>{singlerace.SixthPrice} AED</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="RaceNav">
                        <Tabs
                          defaultActiveKey="Card"
                          id="uncontrolled-tab-example"
                          className="mb-3 RaceNavItem"
                        >
                          <Tab
                            eventKey="Card"
                            title="Card"
                            tabClassName="profile-tabitem"
                          >
                            <div className="RaceDetailCard">
                              <div className="forfexclass">
                                <Accordion defaultActiveKey="0">
                                  <div className="RaceAndHorseModelDataCSSFlex">
                                    {singlerace.RaceAndHorseModelData ===
                                    undefined ? (
                                      <div className="NAclass">N/A</div>
                                    ) : (
                                      singlerace.RaceAndHorseModelData.map(
                                        (data, index) => {
                                          return (
                                            <div className="RaceAndHorseModelDataCSS">
                                              <Accordion.Item eventKey={index}>
                                                <Accordion.Header>
                                                  <div className="cardracesAccordion">
                                                    <p className="resultcardposition">
                                                      {index + 1}st
                                                    </p>
                                                    <div className="cardraces1">
                                                      <img
                                                        src={data.HorseImage}
                                                        alt=""
                                                      />
                                                      <span className="cardraces1box">
                                                        <p>
                                                          <Moment format="DD-MM-YY">
                                                            {data.DOB}
                                                          </Moment>
                                                        </p>
                                                        <h3>0{data.Foal}</h3>
                                                      </span>
                                                    </div>
                                                    <div className="cardraces2">
                                                      <div
                                                        style={{
                                                          display: "flex",
                                                          gap: "10px",
                                                        }}
                                                      >
                                                        <p
                                                          style={{
                                                            fontWeight: "700",
                                                            fontSize: "19.6px",
                                                            lineHeight: "24px",
                                                            color: "#19469D",
                                                          }}
                                                        >
                                                          <span>
                                                            {cookiedata === "en"
                                                              ? data.NameEn
                                                              : data.NameAr}
                                                          </span>
                                                        </p>
                                                        <img
                                                          src={
                                                            data.NationalityData
                                                              .image
                                                              ? data
                                                                  .NationalityData
                                                                  .image
                                                              : Defaultimg
                                                          }
                                                          alt=""
                                                        />

                                                        <p style={myPara}>
                                                          <Moment fromNow ago>
                                                            {data.DOB}
                                                          </Moment>{" "}
                                                          GR H ({data.Height})
                                                        </p>
                                                      </div>
                                                      <div
                                                        style={{
                                                          display: "flex",
                                                          lineHeight: "1px",
                                                          flexWrap: "wrap",
                                                        }}
                                                      >
                                                        <p style={myPara}>
                                                          {t("Dam")}
                                                          <b>
                                                            :
                                                            {cookiedata ===
                                                            "en" ? (
                                                              data.DamData ===
                                                              null ? (
                                                                <>N/A</>
                                                              ) : (
                                                                data.DamData
                                                                  .NameEn
                                                              )
                                                            ) : data.DamData ===
                                                              null ? (
                                                              <>N/A</>
                                                            ) : (
                                                              data.DamData
                                                                .NameAr
                                                            )}
                                                          </b>
                                                        </p>
                                                        <p style={myPara}>
                                                          {t("Sire")}
                                                          <b>
                                                            :
                                                            {cookiedata ===
                                                            "en" ? (
                                                              data.SireData ===
                                                              null ? (
                                                                <>N/A</>
                                                              ) : (
                                                                data.SireData
                                                                  .NameEn
                                                              )
                                                            ) : data.SireData ===
                                                              null ? (
                                                              <>N/A</>
                                                            ) : (
                                                              data.SireData
                                                                .NameAr
                                                            )}
                                                          </b>
                                                        </p>
                                                        <p style={myPara}>
                                                          {t("GSire")}
                                                          <b
                                                            style={{
                                                              marginLeft:
                                                                "12px",
                                                            }}
                                                          >
                                                            :
                                                            {cookiedata ===
                                                            "en" ? (
                                                              data.GSireData ===
                                                              null ? (
                                                                <>N/A</>
                                                              ) : (
                                                                data.GSireData
                                                                  .NameEn
                                                              )
                                                            ) : data.GSireData ===
                                                              null ? (
                                                              <>N/A</>
                                                            ) : (
                                                              data.GSireData
                                                                .NameAr
                                                            )}
                                                          </b>
                                                        </p>
                                                      </div>
                                                      <div
                                                        style={{
                                                          display: "flex",
                                                        }}
                                                      >
                                                        <p
                                                          style={{
                                                            fontWeight: "400",
                                                            fontSize: "12px",
                                                            lineHeight: "15px",
                                                            color: "#FF0000",
                                                            margin:
                                                              "0px 10px 0px 3px",
                                                          }}
                                                        >
                                                          O
                                                        </p>
                                                        <p
                                                          style={{
                                                            fontWeight: "400",
                                                            fontSize: "12px",
                                                            lineHeight: "15px",
                                                            color: "#FF0000",
                                                          }}
                                                        >
                                                          {cookiedata ===
                                                          "en" ? (
                                                            data.ActiveOwnerData ===
                                                            null ? (
                                                              <>N/A</>
                                                            ) : (
                                                              data
                                                                .ActiveOwnerData
                                                                .NameEn
                                                            )
                                                          ) : data.ActiveOwnerData ===
                                                            null ? (
                                                            <>N/A</>
                                                          ) : (
                                                            data.ActiveOwnerData
                                                              .NameAr
                                                          )}
                                                        </p>
                                                        <p
                                                          style={{
                                                            fontWeight: "300",
                                                            fontSize: "9px",
                                                            lineHeight: "15px",
                                                            color:
                                                              "rgba(0, 0, 0, 0.5)",
                                                          }}
                                                        >
                                                          (8 - 3 - 2 - 8 - 4)
                                                        </p>
                                                      </div>
                                                      <div className="trainerbreader_section">
                                                        <img
                                                          src={
                                                            data.ActiveOwnerData
                                                              .image
                                                              ? data
                                                                  .ActiveOwnerData
                                                                  .image
                                                              : Defaultimg
                                                          }
                                                          alt=""
                                                          className="trainerbreader_image"
                                                        />{" "}
                                                        <div className="race_trainerbreader">
                                                          <p>
                                                            T{" "}
                                                            <b
                                                              style={{
                                                                marginLeft:
                                                                  "9px",
                                                              }}
                                                            >
                                                              {cookiedata ===
                                                              "en" ? (
                                                                data.ActiveTrainerData ===
                                                                undefined ? (
                                                                  <>N/A</>
                                                                ) : (
                                                                  data
                                                                    .ActiveTrainerData
                                                                    .NameEn
                                                                )
                                                              ) : data.ActiveTrainerData ===
                                                                undefined ? (
                                                                <>N/A</>
                                                              ) : (
                                                                data
                                                                  .ActiveTrainerData
                                                                  .NameAr
                                                              )}
                                                            </b>
                                                          </p>
                                                          <p>
                                                            B
                                                            <b
                                                              style={{
                                                                marginLeft:
                                                                  "12px",
                                                              }}
                                                            >
                                                              {cookiedata ===
                                                              "en" ? (
                                                                data.BreederData ===
                                                                null ? (
                                                                  <>N/A</>
                                                                ) : (
                                                                  data
                                                                    .BreederData
                                                                    .NameEn
                                                                )
                                                              ) : data.BreederData ===
                                                                null ? (
                                                                <>N/A</>
                                                              ) : (
                                                                data.BreederData
                                                                  .NameAr
                                                              )}
                                                            </b>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    {/* <div className="cardraces3">
                                          <div>
                                            <p style={myPara1}>{singlerace.Horses.map((data) => data.GSire)}</p>
                                            <p style={myPara1}>56kg</p>
                                          </div>
                                          <div>
                                            <img src={singlerace.Owner.map((data) => data.image)} alt="" />
                                          </div>
                                        </div> */}

                                                    <div className="cardraces4">
                                                      <p
                                                        style={{
                                                          fontWeight: "300",
                                                          fontSize: "12px",
                                                          lineHeight: "15px",
                                                          color:
                                                            "rgba(0, 0, 0, 0.5)",
                                                          textAlign: "end",
                                                        }}
                                                      >
                                                        TT OR:
                                                        {singlerace.JockeyModels
                                                          .length === 0 ? (
                                                          <>N/A</>
                                                        ) : singlerace
                                                            .JockeyModels[index]
                                                            .Rating ===
                                                          undefined ? (
                                                          <>N/A</>
                                                        ) : (
                                                          singlerace
                                                            .JockeyModels[index]
                                                            .Rating
                                                        )}
                                                      </p>
                                                      <div className="cardracesjockey">
                                                        <div className="cardracesjockeyleft">
                                                          <p>
                                                            J
                                                            <b
                                                              style={{
                                                                margin:
                                                                  "0px 12px",
                                                              }}
                                                            >
                                                              {cookiedata ===
                                                              "en" ? (
                                                                singlerace
                                                                  .JockeyModels
                                                                  .length <
                                                                1 ? (
                                                                  <>N/A</>
                                                                ) : singlerace
                                                                    .JockeyModels[
                                                                    index
                                                                  ].NameEn ===
                                                                  undefined ? (
                                                                  <>N/A</>
                                                                ) : (
                                                                  singlerace
                                                                    .JockeyModels[
                                                                    index
                                                                  ].NameEn
                                                                )
                                                              ) : (
                                                                singlerace
                                                                  .JockeyModels[
                                                                  index
                                                                ].NameAr
                                                              )}
                                                            </b>
                                                          </p>
                                                          <p>
                                                            {singlerace
                                                              .JockeyModels
                                                              .length < 1 ? (
                                                              <>N/A</>
                                                            ) : singlerace
                                                                .JockeyModels[
                                                                index
                                                              ]
                                                                .MaximumJockeyWeight ===
                                                              undefined ? (
                                                              <>N/A</>
                                                            ) : (
                                                              singlerace
                                                                .JockeyModels[
                                                                index
                                                              ]
                                                                .MaximumJockeyWeight
                                                            )}
                                                            kg
                                                          </p>
                                                          <p
                                                            style={{
                                                              fontWeight: "300",
                                                              fontSize: "9px",
                                                              lineHeight:
                                                                "15px",
                                                              color:
                                                                "rgba(0, 0, 0, 0.5)",
                                                            }}
                                                          >
                                                            47 (8 - 3 - 2 - 8 -
                                                            4)
                                                          </p>
                                                        </div>
                                                        <img
                                                          src={
                                                            singlerace
                                                              .JockeyModels
                                                              .length < 1 ? (
                                                              <>N/A</>
                                                            ) : singlerace
                                                                .JockeyModels[
                                                                index
                                                              ].image ===
                                                              undefined ? (
                                                              <>N/A</>
                                                            ) : singlerace
                                                                .JockeyModels[
                                                                index
                                                              ].image ? (
                                                              singlerace
                                                                .JockeyModels[
                                                                index
                                                              ].image
                                                            ) : (
                                                              Defaultimg
                                                            )
                                                          }
                                                          alt=""
                                                          className="cardracesjockeyimg"
                                                        />
                                                      </div>
                                                      <div className="cardracesjockeycards">
                                                        <ul>
                                                          <li>C</li>
                                                          <li>D</li>
                                                          <li>CL</li>
                                                          <li>BF</li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div className="pmclass">
                                                      <p>
                                                        PM: AED{" "}
                                                        <b>
                                                          {data.PurchasePrice}
                                                        </b>
                                                      </p>
                                                      <p>
                                                        BTO: AED <b>55,000</b>
                                                      </p>
                                                      <p>
                                                        SP: AED <b>55,000</b>
                                                      </p>
                                                    </div>
                                                    <div className="uaecareer">
                                                      <p>
                                                        UAE Career: 47 (2 - 8 -
                                                        4)
                                                      </p>
                                                      <p>
                                                        Lifetime: 47 (2 - 8 - 4)
                                                      </p>
                                                      <p>
                                                        Turf :47 (2 - 8 - 4){" "}
                                                      </p>
                                                      <p>
                                                        Durt :47 (2 - 8 - 4){" "}
                                                      </p>
                                                      <p>
                                                        Dist: 47 (2 - 8 - 4){" "}
                                                      </p>
                                                      <p>AW :47 (2 - 8 - 4) </p>
                                                    </div>
                                                  </div>
                                                </Accordion.Header>
                                                <Accordion.Body className="AccordionBody11">
                                                  <div className="mycardclass1">
                                                    <div className="BodyNew">
                                                      <table className="customers">
                                                        <thead>
                                                          <tr>
                                                            <th>Date</th>
                                                            <th>Cr</th>
                                                            <th>Dist</th>
                                                            <th>TC</th>
                                                            <th>Type</th>
                                                            <th>Dts</th>
                                                            <th>time</th>
                                                            <th>Jockey</th>
                                                            <th>Wgt</th>
                                                            <th>FP</th>
                                                            <th>Les</th>
                                                            <th>RS</th>
                                                            <th>BtBy</th>
                                                            <th>Kgs</th>
                                                            <th>Draw</th>
                                                          </tr>
                                                        </thead>
                                                      </table>
                                                    </div>
                                                    <div className="BodyNew1">
                                                      <table className="customers2">
                                                        <thead>
                                                          <tr>
                                                            <th>12 Oct 22</th>
                                                            <th>Wol (T)</th>
                                                            <th>2400</th>
                                                            <th>D</th>
                                                            <th>S</th>
                                                            <th>Novice</th>
                                                            <th>02:05:55</th>
                                                            <th>Miss </th>
                                                            <th>58</th>
                                                            <th>6</th>
                                                            <th>16.25</th>
                                                            <th>5</th>
                                                            <th>67</th>
                                                            <th>5</th>
                                                            <th>
                                                              <img
                                                                src={arrow1}
                                                                alt=""
                                                              />
                                                            </th>
                                                          </tr>
                                                        </thead>
                                                      </table>
                                                    </div>
                                                    <div className="BodyNew2">
                                                      <table className="customers2">
                                                        <tr>
                                                          <th>12 Oct 22</th>
                                                          <th>Wol (T)</th>
                                                          <th>2400</th>
                                                          <th>D</th>
                                                          <th>S</th>
                                                          <th>Novice</th>
                                                          <th>02:05:55</th>
                                                          <th>Miss </th>
                                                          <th>58</th>
                                                          <th>6</th>
                                                          <th>16.25</th>
                                                          <th>5</th>
                                                          <th>67</th>
                                                          <th>5</th>
                                                          <th>
                                                            <img
                                                              src={arrow1}
                                                              alt=""
                                                            />
                                                          </th>
                                                        </tr>
                                                      </table>
                                                    </div>
                                                    <div className="BodyNew3">
                                                      <table className="customers2">
                                                        <tr>
                                                          <th>12 Oct 22</th>
                                                          <th>Wol (T)</th>
                                                          <th>2400</th>
                                                          <th>D</th>
                                                          <th>S</th>
                                                          <th>Novice</th>
                                                          <th>02:05:55</th>
                                                          <th>Miss </th>
                                                          <th>58</th>
                                                          <th>6</th>
                                                          <th>16.25</th>
                                                          <th>5</th>
                                                          <th>67</th>
                                                          <th>5</th>
                                                          <th>
                                                            <img
                                                              src={arrow1}
                                                              alt=""
                                                            />
                                                          </th>
                                                        </tr>
                                                      </table>
                                                    </div>
                                                  </div>
                                                </Accordion.Body>
                                              </Accordion.Item>
                                            </div>
                                          );
                                        }
                                      )
                                    )}
                                  </div>
                                </Accordion>
                              </div>
                            </div>
                          </Tab>
                          <Tab
                            eventKey="Predictor"
                            title="Predictor"
                            tabClassName="profile-tabitem"
                          >
                            <div className="RaceDetailCard">
                              <Predictor />
                            </div>
                          </Tab>
                          <Tab
                            eventKey="Draw"
                            title="Draw"
                            tabClassName="profile-tabitem"
                          >
                            <div className="RaceDetailCard">
                              <Draw />
                            </div>
                          </Tab>
                          <Tab
                            eventKey="Summary"
                            title="Summary"
                            tabClassName="profile-tabitem"
                          >
                            <div className="RaceDetailCard">
                              <Summary />
                            </div>
                          </Tab>
                          <Tab
                            eventKey="Track Record"
                            title="Track Record"
                            tabClassName="profile-tabitem"
                          >
                            <div className="RaceDetailCard">
                              <TrackRecord />
                            </div>
                          </Tab>
                          <Tab
                            eventKey="Printout"
                            title="Printout"
                            tabClassName="profile-tabitem"
                          >
                            <PrintOut />
                          </Tab>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="NAclass">No Data</div>
                )}
                <Modal
                  show={show}
                  onHide={handleClose}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <Competition data={CastData} />
                  </Modal.Body>
                  <Modal.Footer>
                  </Modal.Footer>
                </Modal>

               
              </div>
            </Zoom>
          </>
        </div>
      </div>
      <Footer />
      <CoptRight />
    </>
  );
};
export default Result;
