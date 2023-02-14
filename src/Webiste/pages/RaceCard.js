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
  const { data: racecourse, status } = useSelector((state) => state.racecourse);
  const { data: Card } = useSelector((state) => state.Card);

  const [modaldata, setmodaldata] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
    setmodaldata(data);
    console.log(data, 'data')
    // await setShow(true);
  };

  useEffect(() => {
    dispatch(fetchCourse());
    dispatch(fetchRace());

  }, []);



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

  console.log(racecourse, 'asaracecourse')

  return (
    <>
      <Layout />
      {racecourse.length === 0 ? (
        <>
          <div className="NAclass">No Data</div>
        </>
      ) : (
        <>
          <h2>
            {" "}
            <div className="RaceCard">
              {racecourse.map((item, ind) => {
                const { RaceStatus } = item;
                return (
                  <React.Fragment key={item.id}>
                    <div className="racepagehead">
                      <div className="racepageheadflex">
                        <div className="racepagename">
                          <span>
                            {cookiedata === "en" ? item.TrackNameEn : item.TrackNameAr}
                            {/* {item.raceName} */}
                          </span>
                          <p>{cookiedata === "en" ? item.NationalityDataRaceCourse.NameEn : item.NationalityDataRaceCourse.NameAr}</p>
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
                    {item.RaceCourseData.length === 0 ? (
                      <>
                        <h6 style={{ textAlign: 'center' }}> There is No race in this racecouse </h6>{" "}
                      </>
                    ) : (
                      item.RaceCourseData.map((data, ind) => (
                        <div className="racepagesection" onClick={() => handleShow(data)}>
                          <div className="racepageitem" key={data._id}>
                            <div>
                              <div className="RaceDetailsName">

                                <span
                                  style={{
                                    fontWeight: "300",
                                    fontSize: "20px",
                                    lineHeight: "24px",
                                  }}
                                >

                                  <h5>{t("Race")} maKA {ind + 1}</h5>
                                </span>
                                <h6>{cookiedata === "en" ? data.RaceNameModelData.NameEn : data.RaceNameModelData.NameAr}</h6>
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
                                  {cookiedata === "en" ? data.DescriptionEn : data.DescriptionAr}
                                </p>
                              </div>
                              <div className="racedown">
                                {/* <p>Distance : {item.RaceCourseData === null ? <></> : <>{item.RaceCourseData.TrackLength}</>}</p> */}

                                <p>
                                  {t("Distance")} :{" "}
                                  {data.TrackLengthData.TrackLength === null ? <>N/A</> : data.TrackLengthData.TrackLength}
                                </p>
                                <p> {cookiedata === "en" ? data.RaceTypeModelData.NameEn : data.RaceTypeModelData.NameAr} </p>
                                <p>{t("Surface")} : {cookiedata === "en" ? !data.GroundData ? <>N/A</> : data.GroundData.NameEn : !data.GroundData ? <>N/A</> : data.GroundData.NameAr}</p>
                                <p>{t("Going")} : {cookiedata === "en" ? !data.RaceKindData ? <>N/A</> : data.RaceKindData.NameEn : !data.GroundData ? <>N/A</> : data.RaceKindData.NameAr}</p>

                              </div>{" "}
                            </div>
                            <span
                              style={{
                                fontWeight: "300",
                                fontSize: "12px",
                                lineHeight: "15px",
                              }}
                            >
                              {item.owner === null ? <>N/A</> : data.owner}
                            </span>
                            <span
                              style={{
                                fontWeight: "300",
                                fontSize: "12px",
                                lineHeight: "15px",
                                color: " rgba(0, 0, 0, 0.5)",
                              }}
                            >
                              {item.runner}
                            </span>
                            <br />

                            <div className="racestatusright">
                              <span
                                className="racestatusclass"
                                style={{
                                  backgroundColor: `${data.RaceStatus === "Cancel"
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
                                <p className="racestatusclasstime"><Moment format="hh:mm:ss" className="racestatusclasstime">{item.DayNTime}</Moment></p>
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
                                  {item.Favourite}
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
                                  {item.runner}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
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
