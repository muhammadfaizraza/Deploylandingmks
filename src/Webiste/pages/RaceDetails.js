import React, { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../Components/CSS/RaceCardCSS/racedetail.css";
import { toast } from "react-toastify";
import flag from "../assets/United Arab Emirates.png";
import axios from "axios";
import prizeImage from "../assets/image 10 (1).png";
import RaceNav from "../Components/RaceCard/RaceNav";
import Layout from "../Components/Reuseable/layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchsinglerace, STATUSES } from "../redux/getReducer/getSingleRace";
import Accordion from "react-bootstrap/Accordion";
import shirt from "../../Webiste/assets/image 5.png";
import pic from "../../Webiste/assets/Ellipse 7.png";
import { RaceCardData } from "../data/data";
import { useLocation } from "react-router-dom";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import { Modal } from "react-bootstrap";
import Competition from "../Components/Competition/Competition";
import TriCompetition from "../Components/Competition/TriCompetition";
import Card from "react-bootstrap/Card";
import img from "../assets/image 10.png";
import img1 from "../assets/image 10 (1).png";
import Summary from "../Components/RaceCard/Summary";
import Draw from "../Components/RaceCard/Draw";
import Predictor from "../Components/RaceCard/Predictor";
import TrackRecord from "../Components/RaceCard/TrackRecord";
import arrow1 from "../assets/image 13 (Traced).png";
import Moment from 'react-moment';
import PrintOut from "../Components/RaceCard/Printout"
import Header from "../Components/Reuseable/Header";
import ScrollContainer from "react-indiana-drag-scroll";
import { IoPartlySunnyOutline, IoCloudyOutline } from 'react-icons/io5'
import Defaultimg from "../assets/default.jpg"


const RaceDetails = () => {


  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { state } = useLocation();
  const { data: singlerace, status } = useSelector((state) => state.singlerace);


  const [Disable, setDisable] = useState(false);
  const [show, setShow] = useState(false);
  const [showtri, setShowtri] = useState(false);
  const [PositionNumber, setPositionNumber] = useState("1");


  const handleClose = () => setShow(false);
  const handleCloseTri = () => setShowtri(false);

  const handleShow = async (data) => {
    await setShow(true);
  };
  const handleShowTri = async (data) => {
    await setShowtri(true);
  };

  function DataOne() {
    if (!state) {
      return (
        window.location.href = "http://localhost:3000/"
      );
    }
  }
  DataOne();
  const { id } = state;
  console.log(id, 'detail id')

  console.log(singlerace, "singlerace");
  useEffect(() => {
    dispatch(fetchsinglerace({ id }));
  }, [id]);

  if (status === STATUSES.LOADING) {
    return <h2 className="loader1">



    </h2>;
  }

  if (status === STATUSES.ERROR) {
    return (
      <h2
        style={{
          margin: "100px",
          width: '50%'
        }}
      >
        Something went wrong!
      </h2>
    );
  }
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );
  }
  const castClick = async (event, horseid, compid) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `/voting/${compid}/${id}/${PositionNumber}`,
        { Horse: horseid },
        {
          withCredentials: true,
        }
      );
      const msgdata = response.data.data.message;
      toast(msgdata);
      setDisable(false);
    } catch (error) {
      const err = error.response.data.message;
      toast(err);
      setDisable(false);
    }
  };
  const pickClick = async (event, compid, horseid) => {
    event.preventDefault();
    console.log(horseid, 'horse')
    try {
      setDisable(true);
      const response = await axios.post(
        `/voting/${compid}/${id}/${PositionNumber}`,
        { Horse: horseid },
        {
          withCredentials: true,

        }
      );
      console.log(response.data.message, 'response')
      const msgdata = response.data.message;
      toast(msgdata);
      setDisable(false);
    } catch (error) {
      const err = error.response.data.message;
      toast(err);
      setDisable(false);
    }
  };
  let menuItems = [];
  for (var i = 0; i < 4; i++) {
    menuItems.push(
      <form>
        <input type="radio" name="contact" />
      </form>
    );
  }

  const runCallback = (cb) => {
    return cb();
  };


  const myPara = {
    fontWeight: "700",
    fontSize: "12px",
    color: "rgba(0, 0, 0, 0.5)",
    paddingLeft: '3px'
  };
  const myPara1 = {
    fontWeight: "700",
    fontSize: "12px",
    color: "#000",
  };
  const btnNew = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "13px 10px",
    gap: "10px",
    width: "139px",
    height: "24px",
    background: "#19469D",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    marginLeft: "10px",
  };
  const btnNew1 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "13px 10px",
    gap: "10px",
    width: "139px",
    height: "24px",
    background: "#FF0000",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
  };

  console.log(singlerace, "single")
  const cookiedata = Cookies.get('i18next')
  return (
    <>
      <Header />
      <Zoom>
        <div className="RaceCardDetail">
          {singlerace.length !== 0 ? (
            <>
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
                        <Moment format='MMMM Do YYYY'>{singlerace.DayNTime}</Moment>
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

                          <span className="race">
                            <p>Race 1</p>
                            {/* <p><b>16:35</b></p> */}
                          </span>

                          <img
                            className="sponsor"
                            src={singlerace.SponsorData === null ? <></> : singlerace.SponsorData.image}
                            alt=""
                          />
                        </span>
                        <span className="itemraces_center">

                          <div
                            style={{

                              justifyContent: "start",
                              width: "60%",
                            }}
                          >
                            <p

                            >
                              {singlerace.RaceTypeModelData.NameEn}
                            </p>
                            <p

                            >
                              {singlerace.RaceKindData.NameEn}
                            </p>
                            <p className="h6">
                              {singlerace.HorseKindinRaceData.NameEn}
                            </p>

                          </div>
                        </span>
                        {
                          singlerace.WeatherType === 'Sunny' ? <IoPartlySunnyOutline className="weatherIcon" /> : <IoCloudyOutline className="weatherIcon" />
                        }

                      </div>
                      <div className="raceName">

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
                          )}{" "}
                        </h5>
                      </div>
                      <div className="d-flex">
                        <span className="itemraces_right my-2 mx-4 ml-5">






                          <span className="distance">
                            <p>
                              {singlerace.TrackLengthData.TrackLength}m{" "}
                              a{singlerace.WeatherDegree}F
                            </p>
                          </span>

                        </span>

                        <div className="mt-4 mx-3">
                          <p>Favourite</p>
                          <br />
                        </div>
                      </div>
                      <div className="itemsraces">

                        <p>
                          <b>DESCRIPTION</b> :{singlerace.DescriptionEn}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="prizecard">
                    <div className="prizecardheaders">
                      <p>
                        Total Prize:
                        <b>
                          {singlerace.FirstPrice +
                            singlerace.SecondPrice +
                            singlerace.ThirdPrice +
                            singlerace.FourthPrice +
                            singlerace.FifthPrice +
                            singlerace.SixthPrice}
                        </b>
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <button
                          style={btnNew}
                          onClick={() => handleShowTri()}
                        >
                          Tricast
                        </button>
                        <button style={btnNew1} onClick={() => handleShow()}>
                          Pick Six
                        </button>
                      </div>
                    </div>
                    <ScrollContainer className="scroll-container">
                      <div>
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

                    </ScrollContainer>
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
                            <div>
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
                                                <div className="cardracesAccordion1">
                                                  <div className="cardraces1">
                                                    <img
                                                      src={data.HorseModelIdData1.HorseImage}
                                                      alt=""
                                                    />
                                                    <span className="cardraces1box">
                                                      <p>
                                                        <Moment format="DD-MM-YY">
                                                          {data.HorseModelIdData1.DOB}
                                                        </Moment>
                                                      </p>
                                                      <h3>0{data.HorseNo}</h3>
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

                                                      {/* <img
                                                      src={
                                                        data.HorseModelIdData1.NationalityData
                                                          .image
                                                          ? data.HorseModelIdData1.NationalityData
                                                              .image
                                                          : Defaultimg
                                                      }
                                                      alt=""
                                                    /> */}


                                                    </div>

                                                    {/* <div
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
                                                          data.JockeyOnRaceData1 ===
                                                            null ? (
                                                            <>N/A</>
                                                          ) : (
                                                            data.JockeyOnRaceData1
                                                              .NameEn
                                                          )
                                                        ) : data.JockeyOnRaceData1 ===
                                                          null ? (
                                                          <>N/A</>
                                                        ) : (
                                                          data.JockeyOnRaceData1
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
                                                    </div> */}
                                                    {/* <div className="trainerbreader_section">
                                                      <img
                                                        src={
                                                          data.JockeyOnRaceData1
                                                            .image
                                                            ? data.JockeyOnRaceData1
                                                              .image
                                                            : Defaultimg
                                                        }
                                                        alt=""
                                                        className="trainerbreader_image"
                                                      />{" "}

                                                    </div> */}
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
                                                      {data.EquipmentData1 === null ? <>N/A</> : data.EquipmentData1.NameEn} OR:
                                                      {data.JockeyOnRaceData1 === null ? (
                                                        <>N/A</>
                                                      ) : data.JockeyOnRaceData1.Rating === undefined ? (
                                                        <>0</>
                                                      ) : (
                                                        data.JockeyOnRaceData1.Rating
                                                      )}
                                                    </p>
                                                    <div className="cardracesjockey">
                                                      <div className="cardracesjockeyleft">
                                                        <p>
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
                                                        src={Defaultimg}
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
                                                <div className="d-flex">
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
                                                        ? data.HorseModelIdData1.NameEn
                                                        : data.HorseModelIdData1.NameAr}
                                                    </span>
                                                  </p>
                                                  <p style={myPara}>
                                                    <Moment fromNow ago>
                                                      {data.HorseModelIdData1.DOB}
                                                    </Moment>{" "}
                                                    GR H ({data.HorseModelIdData1.Height})
                                                  </p>


                                                </div>
                                                <div
                                                  style={{
                                                    display: "flex",
                                                    lineHeight: "1px",
                                                    flexWrap: "wrap",
                                                  }}
                                                >
                                                  <p style={myPara} className="mx-4">
                                                    {t("Dam")}
                                                    <b className="text-dark ">
                                                      :
                                                      {cookiedata === "en" ? (
                                                        data.HorseModelIdData1.DamEn ===
                                                          null ? (
                                                          <>N/A</>
                                                        ) : (
                                                          data.HorseModelIdData1.NameEn
                                                        )
                                                      ) : data.HorseModelIdData1.Dam ===
                                                        null ? (
                                                        <>N/A</>
                                                      ) : (
                                                        data.HorseModelIdData1.DamAr
                                                      )}
                                                    </b>
                                                  </p>
                                                  <p style={myPara} className="mx-4">
                                                    {t("Sire")}
                                                    <b className="text-dark ">
                                                      :
                                                      {cookiedata === "en" ? (
                                                        data.HorseModelIdData1.SireNameEn ===
                                                          null ? (
                                                          <>N/A</>
                                                        ) : (
                                                          data.HorseModelIdData1.SireNameEn
                                                        )
                                                      ) : data.HorseModelIdData1.SireNameAr ===
                                                        null ? (
                                                        <>N/A</>
                                                      ) : (
                                                        data.HorseModelIdData1.SireNameAr
                                                      )}
                                                    </b>
                                                  </p>
                                                  <p style={myPara} className="mx-4">
                                                    {t("GSire")}
                                                    <b
                                                      className="text-dark "
                                                    >
                                                      :
                                                      {cookiedata === "en" ? (
                                                        data.HorseModelIdData1.GSireNameEn ===
                                                          null ? (
                                                          <>N/A</>
                                                        ) : (
                                                          data.HorseModelIdData1.GSireNameEn

                                                        )
                                                      ) : data.HorseModelIdData1.GSireNameEn ===
                                                        null ? (
                                                        <>N/A</>
                                                      ) : (
                                                        data.HorseModelIdData1.GSireNameAr
                                                      )}
                                                    </b>
                                                  </p>
                                                </div>
                                                <div className="race_trainerbreader">
                                                  <p>
                                                    O
                                                    <b
                                                      style={{
                                                        marginLeft: "9px",
                                                      }}
                                                      className="text-danger"
                                                    >
                                                      {cookiedata ===
                                                        "en" ? (
                                                        data.OwnerOnRaceData1
                                                          ===
                                                          undefined ? (
                                                          <>N/A</>
                                                        ) : (
                                                          data
                                                            .OwnerOnRaceData1

                                                            .NameEn
                                                        )
                                                      ) : data.OwnerOnRaceData1 ===
                                                        undefined ? (
                                                        <>N/A</>
                                                      ) : (
                                                        data
                                                          .OwnerOnRaceData1

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
                                                            data.BreederData ===
                                                            null ? (
                                                              <>N/A</>
                                                            ) : (
                                                              data.BreederData
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
                                                      </p> */}
                                                </div>


                                                <div className="race_trainerbreader ">
                                                  <div>
                                                    <img src={Defaultimg} alt="" className="h-25 w-25" />
                                                  </div>
                                                  <div>
                                                    <p>
                                                      T
                                                      <b
                                                        style={{
                                                          marginLeft: "9px",
                                                        }}
                                                        className="text-dark"
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
                                                    <p>
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
                                                          null ? (
                                                          <>N/A</>
                                                        ) : (
                                                          data.HorseModelIdData1.BreederData
                                                            .NameAr
                                                        )}
                                                      </b>
                                                    </p>
                                                  </div>
                                                </div>


                                                <div>
                                                  <div className="pmclass">
                                                    <p>
                                                      PM: AED{" "}
                                                      <b>{data.HorseModelIdData1.PurchasePrice}</b>
                                                    </p>
                                                    <p>
                                                      BTO: AED <b>55,000</b>
                                                    </p>
                                                    <p>
                                                      SP: AED <b>55,000</b>
                                                    </p>
                                                  </div>
                                                  <ScrollContainer>
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
                                                  </ScrollContainer>
                                                </div>

                                                <div
                                                  style={{
                                                    display: "flex",
                                                  }}
                                                >
                                                  {singlerace
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
                                                          onClick={(event) =>
                                                            pickClick(
                                                              event,
                                                              singlerace
                                                                .CompetitionRacesPointsModelData[0]
                                                                ._id,
                                                              data._id
                                                            )
                                                          }
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
                                                          {!showtri ? (
                                                            <button
                                                              style={btnNew}
                                                              onClick={() =>
                                                                handleShowTri()
                                                              }
                                                            >
                                                              {
                                                                singlerace
                                                                  .CompetitionRacesPointsModelData[0]
                                                                  .CompetitionCategory
                                                              }
                                                            </button>
                                                          ) : (
                                                            <></>
                                                          )}
                                                          {showtri ? (
                                                            <span>
                                                              <form
                                                                className="CastCompetitionCategory"
                                                                onClick={
                                                                  castClick
                                                                }
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
                                                                          onClick={(
                                                                            event
                                                                          ) =>
                                                                            castClick(
                                                                              event,
                                                                              data._id,
                                                                              singlerace
                                                                                .CompetitionRacesPointsModelData[0]
                                                                                ._id
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
                                                  )}

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
                                                </div>
                                                {/* <CustomToggle eventKey={index}>
                                                  Show History
                                                </CustomToggle> */}
                                              </Card.Header>
                                              <Accordion.Collapse eventKey={index}>
                                                <Card.Body>
                                                  <ScrollContainer>
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

                                                  </ScrollContainer>
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


            </>
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
              <Competition />
            </Modal.Body>
            <Modal.Footer>
              {/* <button onClick={handleClose}>Close</button> */}
            </Modal.Footer>
          </Modal>

          <Modal
            show={showtri}
            onHide={handleCloseTri}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <TriCompetition />
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        </div>
      </Zoom >


    </>
  )
}

export default RaceDetails