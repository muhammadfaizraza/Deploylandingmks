import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourse,
  STATUSES,
} from "../../Webiste/redux/getReducer/getRaceCourse";
import {
  fetchRace,
} from "../../Webiste/redux/getReducer/getCard";
import "../Components/CSS/RaceCardCSS/racecard.css";

import Layout from "../Components/Reuseable/layout";
import Footer from "../Components/Reuseable/Footer";
import CopyRight from "../Components/Reuseable/Copyrights";
import Lottie from "lottie-react";
import Animate from "../assets/loader.json";
// import RaceCardDetailPopup from "../Components/Home/Popup/RaceDetails";
import { Modal } from "react-bootstrap";
import Moment from "react-moment";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";


const RaceCourse = () => {
  const cookiedata = Cookies.get("i18next");
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.racecourse);
  const { data: Card } = useSelector((state) => state.Card);

  let id = 'b96c57f6-2c08-408e-8596-69615f5579ac'


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  useEffect(() => {
    dispatch(fetchCourse());
    dispatch(fetchRace({ id }));

  }, [dispatch, id]);




  if (status === STATUSES.LOADING) {


    return <div className="py-4 text-center">
      <div >
        <Lottie animationData={Animate} loop={true} className="load" />
      </div>
    </div>
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
      {Card.length === 0 ? (
        <>
          <div className="NAclass">No Data</div>
        </>
      ) : (
        <>
          <h2>
            {" "}
            <div className="RaceCard">
              {Card.map((item, ind) => {
                const { RaceStatus } = item;
                return (
                  <React.Fragment key={item.id}>
                    <div className="racepagehead">
                      <div className="racepageheadflex">
                        <div className="racepagename">
                          <span>
                            {cookiedata === "en" ? item.RaceCourseData.TrackNameEn : item.RaceCourseData.TrackNameAr}
                            {/* {item.raceName} */}
                          </span>
                          <p>
                            <Moment format="YYYY/MM/DD">
                              {cookiedata === "en" ? item.Day : item.Day}
                            </Moment>
                          </p>
                        </div>

                        <div className="raceStatus">
                          <span
                            className="raceStatusitem"
                            style={{ backgroundColor: "#5EC30F" }}
                          >
                            live
                          </span>
                          <span
                            className="raceStatusitem"
                            style={{ backgroundColor: "#FF9900" }}
                          >
                            due
                          </span>
                          <span
                            className="raceStatusitem"
                            style={{ backgroundColor: "#FF0000" }}
                          >
                            end
                          </span>
                          <span
                            className="raceStatusitem"
                            style={{ backgroundColor: "#000" }}
                          >
                            can
                          </span>
                        </div>
                      </div>
                    </div>
                    {item.RaceNameModelData.length === 0 ? (
                      <>
                        <h6 style={{ textAlign: 'center' }}> There is No race in this racecouse </h6>{" "}
                      </>
                    ) : (
                      <div className="racepagesection" >
                        <div className="racepageitem">
                          <div>
                            <div className="RaceDetailsName">

                              <span
                                style={{
                                  fontWeight: "300",
                                  fontSize: "20px",
                                  lineHeight: "24px",
                                }}
                              >

                                <h5>{t("Race")} {item.RaceNumber}</h5>
                              </span>
                              <h6>{cookiedata === "en" ? item.RaceNameModelData.NameEn : item.RaceNameModelData.NameAr}</h6>
                              <br />
                            </div>
                            <div className="RaceDesc">
                              <p
                                style={{
                                  maxWidth: "400px",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {cookiedata === "en" ? item.HorseKindinRaceData.NameEn : item.HorseKindinRaceData.NameAr}
                              </p>
                            </div>
                            <div className="racedown">
                              {/* <p>Distance : {item.RaceCourseData === null ? <></> : <>{item.RaceCourseData.TrackLength}</>}</p> */}

                              <p>
                                {t("Distance")} :{" "}
                                {item.TrackLengthData.TrackLength === null ? <>N/A</> : item.TrackLengthData.TrackLength}
                              </p>
                              {/* <p> {cookiedata === "en" ? (data.RaceTypeModelData.NameEn === null ? <></> : data.RaceTypeModelData.NameEn) : (data.RaceTypeModelData.NameAr === null ? <></> : data.RaceTypeModelData.NameAr)} </p> */}
                              <p>{t("Surface")} : {cookiedata === "en" ? !item.GroundData ? <>N/A</> : item.GroundData.NameEn : !item.GroundData ? <>N/A</> : item.GroundData.NameAr}</p>
                              <p>{t("Going")} : {cookiedata === "en" ? !item.RaceKindData ? <>N/A</> : item.RaceKindData.NameEn : !item.GroundData ? <>N/A</> : item.RaceKindData.NameAr}</p>

                            </div>{" "}
                          </div>
                          <span
                            style={{
                              fontWeight: "300",
                              fontSize: "12px",
                              lineHeight: "15px",
                            }}
                          >
                            {/* {item.owner === null ? <>N/A</> : data.owner} */}
                          </span>
                          <span
                            style={{
                              fontWeight: "300",
                              fontSize: "12px",
                              lineHeight: "15px",
                              color: " rgba(0, 0, 0, 0.5)",
                            }}
                          >
                            {/* {item.runner} */}
                          </span>
                          <br />

                          <div className="racestatusright">
                            <span
                              className="racestatusclass"
                              style={{
                                backgroundColor: `${item.RaceStatus === "Cancel"
                                  ? "#000000"
                                  : RaceStatus === "End"
                                    ? "#FF0000"
                                    : RaceStatus === "Live"
                                      ? "#5EC30F"
                                      : "#FF9900"
                                  }`,
                                color: `${RaceStatus === "Cancel"
                                  ? "#ffff"
                                  : RaceStatus === "End"
                                    ? "#00000"
                                    : RaceStatus === "Live"
                                      ? "#00000"
                                      : "#000000"
                                  }`,
                              }}
                            >
                              {/* <p className="racestatusclasstime"><Moment format="hh:mm:ss" className="racestatusclasstime">{item.DayNTime}</Moment></p> */}
                            </span>
                            <div>
                              <p
                                style={{
                                  fontStyle: "normal",
                                  fontWeight: "300",
                                  fontSize: "9px",
                                  lineHeight: "11px",
                                  color: "rgba(0, 0, 0, 0.5)",
                                }}
                              >
                                {t("Favourite")}
                                {/* <h1>{data.RaceAndHorseModelData.NameEn}</h1> */}
                              </p>
                              <p
                                style={{
                                  fontStyle: "normal",
                                  fontWeight: "300",
                                  fontSize: "12px",
                                  lineHeight: "11px",
                                  color: "#000",
                                }}
                              >
                                {/* {item.Favourite} */}
                              </p>
                            </div>
                            <div>
                              <p
                                style={{
                                  fontStyle: "normal",
                                  fontWeight: "300",
                                  fontSize: "9px",
                                  lineHeight: "11px",
                                  color: "rgba(0, 0, 0, 0.5)",
                                }}
                              >
                                Non-Runner
                              </p>
                              <p
                                style={{
                                  fontStyle: "normal",
                                  fontWeight: "300",
                                  fontSize: "12px",
                                  lineHeight: "11px",
                                  color: "#000",
                                }}
                              >
                                {/* {item.runner} */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </h2>
        </>
      )}
      <Footer />
      <CopyRight />
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h2>Color  </h2>
        </Modal.Header>
        <Modal.Body>
          {/* <RaceCardDetailPopup data={modaldata} /> */}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className="modalClosebtn">
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default RaceCourse;
