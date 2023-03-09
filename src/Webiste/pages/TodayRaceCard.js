//.....................Import..........................//
import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRace } from "../redux/getReducer/getCard";
import Cookies from "js-cookie";
import Moment from "react-moment";
import { useTranslation } from "react-i18next";
import Header from "../Components/Reuseable/Header";

const RaceCardDetail = () => {
  const { state } = useLocation();
  const { data: Card } = useSelector((state) => state.Card);
  const { cardid } = state;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const cookiedata = Cookies.get("i18next");
  const navigate = useNavigate();

  function DataOne() {
    if (!state) {
      return (window.location.href = "https://mksracing.vercel.app/");
    }
  }
  DataOne();

  useEffect(() => {
    dispatch(fetchRace({ cardid }));
  }, []);

  const [userIsDesktop, setUserIsDesktop] = useState(true);

  useEffect(() => {
    window.innerWidth > 440 ? setUserIsDesktop(true) : setUserIsDesktop(false);
  }, [userIsDesktop]);



  function HandleJockey(id) {
    if (userIsDesktop === true) {
      navigate("/racedetail", {
        state: {
          id: id,
        },
      });
    } else {
      navigate("/racedetails", {
        state: {
          id: id,
        },
      });
    }
  }
  return (
    <>
      {
        userIsDesktop === false ? <Header /> : <></>
      }

      <Zoom>
        <div className="RaceCardDetail">
          {Card.length === 0 ? (
            <>
              <div className="NAclass">No Data</div>
            </>
          ) : (
            <>
              <div className="RaceCard">
                {Card.map((item, ind) => {

                  return (
                    <React.Fragment key={item.id}>
                      <div className="racepagehead">
                        <div className="racepageheadflex">
                          <div className="racepagename">
                            <span>
                              {cookiedata === "en" ? item.TrackNameEn : item.TrackNameAr}
                              {/* {item.raceName} */}
                            </span>
                            <p>
                              <Moment local>
                                {/* {cookiedata === "en" ? item.Day : item.Day} */}
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
                      {item.RaceCourseData.length === 0 ? (
                        <>
                          <h6 style={{ textAlign: 'center' }}> There is No race in this racecouse </h6>{" "}
                        </>
                      ) : (
                        <>
                          {
                            item.RaceCourseData.map((data) => {
                              return (
                                <>
                                  <div className="racepagesection" >
                                    <div className="racepageitem" onClick={() => HandleJockey(data._id)}>
                                      <div >

                                        <div className="RaceDetailsName">

                                          <span
                                            style={{
                                              fontWeight: "300",
                                              fontSize: "20px",
                                              lineHeight: "24px",
                                            }}
                                          >

                                            <h5>{t("Race")} {data.RaceNumber}</h5>
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
                                             {cookiedata === "en" ? (data.HorseKindinRaceData ? <></> : data.HorseKindinRaceData.NameEn) : (data.HorseKindinRaceData ? <></> : data.HorseKindinRaceData.NameAr)}
                                           </p>
                                          {/* <p>{data.RacehorsesData[0].TotalRunners} Runners</p> */}
                                        </div>
                                        <div className="racedown">
                                          {/* <p>Distance : {item.RaceCourseData === null ? <></> : <>{item.RaceCourseData.TrackLength}</>}</p> */}

                                          <p>
                                            {t("Distance")} :{" "}
                                            {data.TrackLengthData.TrackLength === null ? <>N/A</> : data.TrackLengthData.TrackLength}
                                          </p>
                                          {/* <p> {cookiedata === "en" ? (data.RaceTypeModelData.NameEn === null ? <></> : data.RaceTypeModelData.NameEn) : (data.RaceTypeModelData.NameAr === null ? <></> : data.RaceTypeModelData.NameAr)} </p> */}
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
                                        {/* {item.RacehorsesData[0].TotalRunners} */}
                                      </span>
                                      <br />

                                      <div className="racestatusright">
                                        <span
                                          className="racestatusclass"
                                          style={{
                                            backgroundColor: `${data.RaceStatus === "Cancel"
                                              ? "#000000"
                                              : data.RaceStatus === "Completed"
                                                ? "#FF0000"
                                                : data.RaceStatus === "Live"
                                                  ? "#5EC30F"
                                                  : "#FF9900"
                                              }`,
                                            color: `${data.RaceStatus === "Cancel"
                                              ? "#ffff"
                                              : data.RaceStatus === "End"
                                                ? "#00000"
                                                : data.RaceStatus === "Live"
                                                  ? "#00000"
                                                  : "#000000"
                                              }`,
                                          }}
                                        >
                                          <p className="StartTimeCards">{data.StartTime.slice(11, 16)}</p>
                                          {/* <p className="racestatusclasstime"><Moment format="hh:mm:ss" className="racestatusclasstime">{item.StartTime}</Moment></p> */}
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
                                            {/* Non Runners */}

                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )
                            })
                          }
                        </>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </Zoom>

    </>
  );
};

export default RaceCardDetail;
