
import "../Components/CSS/pagesCSS/about.css";
import React, { useEffect, useState } from "react";
import "../Components/CSS/RaceCardCSS/racedetail.css";
import flag from "../assets/United Arab Emirates.png";
import Defaultimg from "../assets/Frame.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchsinglerace, STATUSES } from "../redux/getReducer/getSingleRace";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import Cookies from "js-cookie";
import Zoom from "react-reveal/Zoom";
import img from "../assets/image 10.png";
import img1 from "../assets/image 10 (1).png";
import Summary from "../Components/RaceCard/Summary";
import Draw from "../Components/RaceCard/Draw";
import Predictor from "../Components/RaceCard/Predictor";
import TrackRecord from "../Components/RaceCard/TrackRecord";
import arrow2 from "../assets/arrow1.png";
import Card from "react-bootstrap/Card";
import Moment from "react-moment";
import PrintOut from "../Components/RaceCard/Printout";
import { IoPartlySunnyOutline, IoCloudyOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Lottie } from "lottie-react";
import Animate from "../assets/loader.json";

import { useAccordionButton } from "react-bootstrap/AccordionButton";


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      className="ShowPreviousHistory"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}


const Result = (data) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // const { state } = useLocation();
  const { data: singlerace, status } = useSelector((state) => state.singlerace);

  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState()
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
    setmodaldata(data)

    await setShow(true)
  };
  const [PositionNumber, setPositionNumber] = useState("1");

  const [Disable, setDisable] = useState(false);
  const [showtri, setShowtri] = useState(false);

  const [showJockey, setShowJockey] = useState(false);
  const [modaldataJockey, setmodaldataJockey] = useState()
  const [History, setHistory] = useState([])


  const handleShowJockey = async (data) => {
    setmodaldataJockey(data)
    await setShowJockey(true)
  };
  const runCallback = (cb) => {
    return cb();
  };

  const btnNew1 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
    gap: "10px",
    width: "112px",

    height: "24px",
    background: "#FF0000",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
  };





  const showHorseHistory = async (horseid) => {

    const res =
      await
        axios.get(`${window.env.API_URL}/horsehistory/${horseid}`)
    setHistory(res.data.data)


  }
  const id = data.data;

  useEffect(() => {
    dispatch(fetchsinglerace({ id }));
  }, [dispatch, id]);

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
  console.log(singlerace, 'data')

  return (
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
                          singlerace.RaceCourseData ? (
                            singlerace.RaceCourseData.TrackNameEn
                          ) :
                            <></>
                        ) : singlerace.RaceCourseData ? (
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
                            backgroundColor: `${singlerace.RaceStatus === "Cancel"
                              ? "#000000"
                              : singlerace.RaceStatus === "End"
                                ? "#FF0000"
                                : singlerace.RaceStatus === "Live"
                                  ? "#5EC30F"
                                  : "#FF9900"
                              }`,
                            color: `${singlerace.RaceStatus === "Cancel"
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
                        <h4>{singlerace.RaceResultData.RaceTime ? singlerace.RaceResultData[0].RaceTime : "N/A"}</h4>
                      </span>
                      <span className="resultimagebox"></span>
                      <span className="resultimagebox"></span>
                      <span className="resultimagebox"></span>
                      <span className="resultimagebox"></span>
                      <span className="resultimagevideo">
                        <a href={singlerace.RaceResultData[0].VideoLink} target="_">
                          <img src={arrow2} alt="img" />
                        </a>

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
                    {/* {singlerace.CompetitionRacesPointsModelData.length >
                      0 ? (
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                        }}
                      ></div>
                    ) : (
                      <></>
                    )} */}
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
                          <Accordion defaultActiveKey={0}>
                            <div className="RaceAndHorseModelDataCSSFlex">
                              {singlerace.RacehorsesData ===
                                undefined ? (
                                <div className="NAclass">N/A</div>
                              ) : (
                                singlerace.RacehorsesData.map(
                                  (data, index) => {
                                    return (
                                      <div className="RaceAndHorseModelDataCSS">
                                        <Card>
                                          <Card.Header>
                                            <div className="cardracesAccordion">
                                              <div className="cardraces1">
                                                <p style={{
                                                  fontWeight: "700",
                                                  fontSize: "19.6px",
                                                  lineHeight: "24px",
                                                  color: "#19469D",
                                                }}>{data.HorseNo}</p>
                                                <img
                                                  src={data.HorseModelIdData1 ? data.HorseModelIdData1.HorseImage : Defaultimg}
                                                  alt=""
                                                />
                                                <span className="cardraces1box">
                                                  <p>
                                                    <Moment format="DD-MM-YY">
                                                      {data.HorseModelIdData1 ? data.HorseModelIdData1.DOB : <></>}
                                                    </Moment>
                                                  </p>

                                                  <h3>{data.HorseNo}</h3>
                                                  <p style={{
                                                    float: "right"
                                                  }}>({data.GateNo})</p>
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
                                                    <span onClick={() =>
                                                      handleShow(data)} style={
                                                        {
                                                          cursor: 'pointer'
                                                        }
                                                      }>
                                                      {cookiedata === "en"
                                                        ? (data.HorseModelIdData1 ? data.HorseModelIdData1.NameEn : <></>)
                                                        : (data.HorseModelIdData1 ? data.HorseModelIdData1.NameAr : <></>)}
                                                    </span>
                                                  </p>

                                                  <p style={myPara}>
                                                    <Moment fromNow ago>
                                                      {data.HorseModelIdData1 ? data.HorseModelIdData1.DOB : <></>}
                                                    </Moment>{" "}
                                                    {data.CapColorData1 === null ? <></> : data.CapColorData1.NameEn}
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
                                                      {cookiedata === "en" ? (
                                                        data.HorseModelIdData1 ? data.HorseModelIdData1.NameEn : <></>

                                                      ) : data.HorseModelIdData1 ? data.HorseModelIdData1.NameAr : <></>}
                                                    </b>
                                                  </p>
                                                  <p style={myPara}>
                                                    {t("Sire")}
                                                    <b>
                                                      :
                                                      {cookiedata === "en" ? (
                                                        data.HorseModelIdData1 ? data.HorseModelIdData1.SireNameEn : <></>
                                                      ) : data.HorseModelIdData1 ? data.HorseModelIdData1.SireNameAr : <></>}
                                                    </b>
                                                  </p>
                                                  <p style={myPara}>
                                                    {t("GSire")}
                                                    <b
                                                      style={{
                                                        marginLeft: "12px",
                                                      }}
                                                    >
                                                      :
                                                      {cookiedata === "en" ? (
                                                        data.HorseModelIdData1 ? data.HorseModelIdData1.GSireNameEn : <></>
                                                      ) : data.HorseModelIdData1 ? data.HorseModelIdData1.GSireNameAr : <></>}
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
                                                    {cookiedata === "en" ? (
                                                      data.OwnerOnRaceData1 ===
                                                        undefined ? (
                                                        <>N/A</>
                                                      ) : (
                                                        data.OwnerOnRaceData1
                                                          .NameEn
                                                      )
                                                    ) : data.OwnerOnRaceData1 ===
                                                      undefined ? (
                                                      <>N/A</>
                                                    ) : (
                                                      data.OwnerOnRaceData1
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
                                                      data.JockeyOnRaceData1 === null ? <></> : (data.JockeyOnRaceData1.image === null
                                                        ? Defaultimg : data.JockeyOnRaceData1
                                                          .image)
                                                    }
                                                    alt=""
                                                    className="trainerbreader_image"
                                                  />{" "}
                                                  <div className="race_trainerbreader">
                                                    <p>
                                                      T
                                                      <b
                                                        style={{
                                                          marginLeft: "9px",
                                                        }}
                                                      >
                                                        {cookiedata ===
                                                          "en" ? (
                                                          data.TrainerOnRaceData1
                                                            ===
                                                            undefined ? (
                                                            <>N/A</>
                                                          ) : (
                                                            data
                                                              .TrainerOnRaceData1

                                                              .NameEn
                                                          )
                                                        ) : data.TrainerOnRaceData1 ===
                                                          undefined ? (
                                                          <>N/A</>
                                                        ) : (
                                                          data
                                                            .TrainerOnRaceData1

                                                            .NameAr
                                                        )}
                                                      </b>
                                                    </p>
                                                    {/* <p>
                                                      B
                                                      <b
                                                        style={{
                                                          marginLeft: "12px",
                                                        }}
                                                      >
                                                        {cookiedata ===
                                                          "en" ? (
                                                          data.HorseModelIdData1.BreederData ===
                                                            undefined ? (
                                                            <>N/A</>
                                                          ) : (
                                                            data.HorseModelIdData1.BreederData
                                                              .NameEn
                                                          )
                                                        ) : data.HorseModelIdData1.BreederData ===
                                                          undefined ? (
                                                          <>N/A</>
                                                        ) : (
                                                          data.HorseModelIdData1.BreederData
                                                            .NameAr
                                                        )}
                                                      </b>
                                                    </p> */}
                                                  </div>
                                                </div>
                                              </div>


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
                                                  {data.EquipmentData1 === null ? <>N/A</> : data.EquipmentData1.NameEn} OR:
                                                  {data.JockeyOnRaceData1 === null ? (
                                                    <>N/A</>
                                                  ) : data.Rating === undefined ? (
                                                    <>0</>
                                                  ) : (
                                                    data.Rating
                                                  )}
                                                </p>
                                                <div className="cardracesjockey">
                                                  <div className="cardracesjockeyleft">
                                                    <p onClick={() =>
                                                      handleShowJockey(data)} style={
                                                        {
                                                          cursor: 'pointer'
                                                        }
                                                      }>
                                                      J
                                                      <b
                                                        style={{
                                                          margin: "0px 12px",
                                                        }}
                                                      >
                                                        {cookiedata ===
                                                          "en" ? (
                                                          data.JockeyOnRaceData1 === null ? (
                                                            <>N/A</>
                                                          ) : data.JockeyOnRaceData1 ===
                                                            undefined ? (
                                                            <>N/A</>
                                                          ) : (
                                                            data.JockeyOnRaceData1.NameEn
                                                          )
                                                        ) : (
                                                          data.JockeyOnRaceData1.NameAr
                                                        )}
                                                      </b>
                                                    </p>
                                                    <p>
                                                      {data.JockeyOnRaceData1 === null ? (
                                                        <>N/A</>
                                                      ) : data
                                                        .JockeyRaceWeight ===
                                                        undefined ? (
                                                        <>N/A</>
                                                      ) : (
                                                        data.JockeyRaceWeight
                                                      )}
                                                      kg
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
                                                      47 (8 - 3 - 2 - 8 - 4)
                                                    </p>
                                                  </div>
                                                  <img
                                                    src={
                                                      data.JockeyOnRaceData1 === null ? (
                                                        <>N/A</>
                                                      ) : data.JockeyOnRaceData1
                                                        .image ===
                                                        undefined ? (
                                                        <>N/A</>
                                                      ) : data.JockeyOnRaceData1
                                                        .image ? (
                                                        data.JockeyOnRaceData1
                                                          .image
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


                                            </div>
                                            <div>
                                              <div className="pmclass">
                                                <p>
                                                  PM: AED{" "}
                                                  <b>{data.HorseModelIdData1 ? data.HorseModelIdData1.PurchasePrice : <></>}</b>
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
                                                  UAE Career: 47 (2 - 8 - 4)
                                                </p>
                                                <p>
                                                  Lifetime: 47 (2 - 8 - 4)
                                                </p>
                                                <p>Turf :47 (2 - 8 - 4) </p>
                                                <p>Durt :47 (2 - 8 - 4) </p>
                                                <p>Dist: 47 (2 - 8 - 4) </p>
                                                <p>AW :47 (2 - 8 - 4) </p>
                                              </div>
                                            </div>
                                            <div
                                              style={{
                                                display: "flex",
                                                justifyContent: "space-between"
                                              }}
                                            >
                                              {/* {singlerace
                                                .CompetitionRacesPointsModelData
                                                .length === 0 ? (
                                                <></>
                                              ) : (
                                                <>
                                                  {singlerace
                                                    .CompetitionRacesPointsModelData[0]
                                                    .CompetitionCategory ===
                                                    "pick" ? (
                                                    <button
                                                      style={btnNew1}

                                                      disabled={Disable}
                                                    >
                                                      {
                                                        singlerace
                                                          .CompetitionRacesPointsModelData[0]
                                                          .CompetitionCategory
                                                      }
                                                    </button>
                                                  ) : (
                                                    <>
                                                      
                                                      {showtri ? (
                                                        <span>
                                                          <form
                                                            className="CastCompetitionCategory"

                                                            id={index}
                                                          >
                                                            {runCallback(
                                                              () => {
                                                                const row =
                                                                  [];
                                                                const total =
                                                                  singlerace
                                                                    .CompetitionRacesPointsModelData[0]
                                                                    .CategoryCount;
                                                                for (
                                                                  var i = 0;
                                                                  i < total;
                                                                  i++
                                                                ) {
                                                                  row.push(
                                                                    <input
                                                                      type="radio"
                                                                      name={t(
                                                                        "cast"
                                                                      )}
                                                                      value={
                                                                        i + 1
                                                                      }
                                                                      onChange={(
                                                                        e
                                                                      ) =>
                                                                        setPositionNumber(
                                                                          e
                                                                            .target
                                                                            .value
                                                                        )
                                                                      }

                                                                    />
                                                                  );
                                                                }
                                                                return row;
                                                              }
                                                            )}
                                                          </form>
                                                        </span>
                                                      ) : (
                                                        <></>
                                                      )}
                                                    </>
                                                  )}
                                                </>
                                              )} */}

                                              {/* <button
                                              style={btnNew1}
                                              onClick={() =>
                                                handleShow(
                                                  singlerace.CompetitionRacesPointsModelData
                                                )
                                              }
                                            >
                                            {t("Pick Six")}
                                            </button> */}

                                              {/* {data.HorseModelIdData1.TrackHorses && data.HorseModelIdData1.TrackHorses.length > 0 ? <></>:<></>} */}
                                              <div div className="trackBtn">
                                                {/* <button className="w-100 px-10" style={btnNew1} onClick={() => handleTrack(data.HorseModelIdData1._id)}>Track Horse</button> */}
                                              </div>

                                              <></>
                                              {/* <div div className="trackBtn">
                                                   <button className="w-100 px-10" style={btnNew1}>UnTrack Horse</button>
                                                 </div> */}

                                            </div>
                                            <CustomToggle eventKey={index}>
                                              <button className="showMore" onClick={() => showHorseHistory(data.HorseModelIdData1._id)}>   Show History </button>
                                            </CustomToggle>
                                          </Card.Header>
                                          <Accordion.Collapse eventKey={index}>
                                            <Card.Body>
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

                                                    {
                                                      History !== undefined ?

                                                        History.map((history, index) => (
                                                          // <tbody>

                                                          //   <tr>

                                                          //     <td>
                                                          //       {history.HorseIDData.NameEn}
                                                          //     </td>
                                                          //     <td>
                                                          //       {history.HorseIDData.NameEn}
                                                          //     </td>
                                                          //     <td>
                                                          //       {history.Distance}
                                                          //     </td>
                                                          //     <td>
                                                          //       {history.HorseIDData.NameEn}
                                                          //     </td>
                                                          //     <td>
                                                          //       {history.HorseIDData.NameEn}
                                                          //     </td>
                                                          //     <td>
                                                          //       {history.HorseIDData.NameEn}
                                                          //     </td>
                                                          //     <td>
                                                          //       {history.HorseIDData.NameEn}
                                                          //     </td>
                                                          //     <td>
                                                          //       {history.HorseIDData.NameEn}
                                                          //     </td>
                                                          //     <td>
                                                          //       {history.HorseIDData.NameEn}
                                                          //     </td>
                                                          //     <td>
                                                          //       {history.HorseIDData.NameEn}
                                                          //     </td>
                                                          //     <td>
                                                          //       {history.HorseIDData.NameEn}
                                                          //     </td>
                                                          //     <td>
                                                          //       {history.HorseIDData.NameEn}
                                                          //     </td>
                                                          //     <td>
                                                          //       {history.BeatenByData.NameEn}
                                                          //     </td>
                                                          //     <td>
                                                          //       {history.HorseIDData.NameEn}
                                                          //     </td>
                                                          //     <td>

                                                          //       <a href={history.HorseIDData.VideoLink}>
                                                          //         <img
                                                          //           src={arrow1}
                                                          //           alt=""
                                                          //         />
                                                          //       </a>

                                                          //     </td>

                                                          //   </tr>



                                                          // </tbody>

                                                          <></>


                                                        ))
                                                        : <></>
                                                    }


                                                  </table>
                                                </div>



                                                {/* <>
                                                  {
                                                    data.HorseIDData.map((item,index) => {
                                                      return(
                                                        <div className="BodyNew1" key={index}>
                                                    <table className="customers2">
                                                      <thead>
                                                        <tr>
                                                          <th><Moment format="D MMM YYYY" withTitle></Moment></th>
                                                          <th>Wol (T)</th>
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
                                                          <th>{item.Distance}</th>
                                                          <th>5</th>
                                                          <th>
                                                            <a href={item.VideoLink} target="_blank">
                                                            <img
                                                              src={arrow1}
                                                              alt=""
                                                            />
                                                            </a>
                                                          </th>
                                                        </tr>
                                                      </thead>
                                                    </table>
                                                  </div>
                                                      )
                                                    })
                                                  }
                                                  </> */}


                                                {/* <div className="BodyNew2">
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
                                                  </div> */}
                                              </div>
                                            </Card.Body>
                                          </Accordion.Collapse>
                                        </Card>
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
        </div>
      </Zoom>
    </>
  );
};
export default Result;
