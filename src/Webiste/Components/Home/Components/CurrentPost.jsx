import React, { useEffect, useState } from "react";
import "../../CSS/HomeCSS/blogs.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse, STATUSES } from "../../../redux/getReducer/getRaceCourse";
import { fetchRaceCourseToday } from "../../../redux/getReducer/getRaceCourseToday";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import { BsCalendarDate } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Bounce, Fade } from "react-reveal";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DefaulImg from "../../../assets/default.png";
import Animate from "../../../assets/loader.json";
import Lottie from "lottie-react";
import flagimg from "../../../assets/United Arab Emirates.png";

const Match = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const [value, onChange] = useState(new Date());
  const [DayData, setDayData] = useState([]);
  const { data: racecourse, status } = useSelector((state) => state.racecourse);
  const { data: RaceCourseRaceToday } = useSelector(
    (state) => state.RaceCourseRaceToday
  );

  useEffect(() => {
    dispatch(fetchCourse());
    dispatch(fetchRaceCourseToday());
  }, [dispatch]);

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

  function HandleCard(cardid) {
    if (userIsDesktop === true) {
      navigate("/mkscard", {
        state: {
          cardid: cardid,
        },
      });
    } else {
      navigate("/mkscards", {
        state: {
          cardid: cardid,
        },
      });
    }
  }

  if (status === STATUSES.LOADING) {
    return (
      <div>
        <Lottie
          animationData={Animate}
          loop={true}
          className="Lottie compLottie"
        />
      </div>
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
  const cookiedata = Cookies.get("i18next");
  return (
    <div className="match">
      {racecourse === undefined ? (
        <></>
      ) : (
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-4 "
        >
          <Tab eventKey="home" title={t("current")}>
            <div className=" newpost">
              <Bounce bottom>
                <div className="Currentpostdiv">
                  {RaceCourseRaceToday.length === 0 ||
                  RaceCourseRaceToday === undefined ? (
                    <></>
                  ) : (
                    RaceCourseRaceToday.map((item, ind) => {
                      return (
                        <>
                          <div className="Currentpostheader">
                            <h2>
                              {" "}
                              {cookiedata === "en" ? (
                                item.NationalityDataRaceCourse === null ? (
                                  <>N/A</>
                                ) : (
                                  item.NationalityDataRaceCourse.NameEn
                                )
                              ) : item.NationalityDataRaceCourse === null ? (
                                <>N/A</>
                              ) : (
                                item.NationalityDataRaceCourse.NameAr
                              )}
                            </h2>
                            <img
                              src={
                                item.NationalityDataRaceCourse
                                  ? item.NationalityDataRaceCourse.image
                                  : flagimg
                              }
                              alt=""
                              style={{
                                width: "50px",
                                heigth: "50px",
                              }}
                            />
                          </div>
                          <div className="CompetitionData">
                            <Accordion>
                              <div className="Competitionitem">
                                <Accordion.Item eventKey={item._id}>
                                  <Accordion.Header>
                                    <div className="AccordionHeader">
                                      <p onClick={() => HandleCard(item._id)}>
                                        {cookiedata === "en" ? (
                                          item.TrackNameEn === null ? (
                                            <>N/A</>
                                          ) : (
                                            item.TrackNameEn
                                          )
                                        ) : item.TrackNameAr === null ? (
                                          <>N/A</>
                                        ) : (
                                          item.TrackNameAr
                                        )}
                                      </p>
                                      <p></p>
                                    </div>
                                  </Accordion.Header>
                                  {item.RaceCourseData.map((name, ind) => (
                                    <Accordion.Body>
                                      <div
                                        onClick={() => HandleJockey(name._id)}
                                        className="Competition_Matches"
                                      >
                                        <p>
                                          {cookiedata === "en" ? (
                                            name.RaceNameModelData === null ? (
                                              <>N/A</>
                                            ) : (
                                              name.RaceNameModelData.NameEn
                                            )
                                          ) : name.RaceNameModelData ===
                                            null ? (
                                            <>N/A</>
                                          ) : (
                                            name.RaceNameModelData.NameAr
                                          )}
                                        </p>
                                        <p>{ind + 1}</p>
                                      </div>
                                    </Accordion.Body>
                                  ))}
                                </Accordion.Item>
                              </div>
                            </Accordion>
                          </div>
                        </>
                      );
                    })
                  )}
                </div>
              </Bounce>
            </div>
          </Tab>
          <Tab eventKey="ante" title={t("ante_post")} className="Ante_Post">
            <div className=" newpost">
              <Bounce bottom>
                <div className="Currentpostdiv">
                  {racecourse.length === 0 || racecourse === undefined ? (
                    <></>
                  ) : (
                    racecourse.map((item, ind) => {
                      return (
                        <>
                          <div className="Currentpostheader">
                            <h2>
                              {" "}
                              {cookiedata === "en" ? (
                                item.NationalityDataRaceCourse === null ? (
                                  <>N/A</>
                                ) : (
                                  item.NationalityDataRaceCourse.NameEn
                                )
                              ) : item.NationalityDataRaceCourse === null ? (
                                <>N/A</>
                              ) : (
                                item.NationalityDataRaceCourse.NameAr
                              )}
                            </h2>
                            <img
                              src={
                                item.NationalityDataRaceCourse.image
                                  ? item.NationalityDataRaceCourse.image
                                  : DefaulImg
                              }
                              alt=""
                              style={{
                                width: "50px",
                                heigth: "50px",
                              }}
                            />
                          </div>
                          <div className="CompetitionData">
                            <Accordion>
                              <div className="Competitionitem" key={item._id}>
                                <Accordion.Item eventKey={item._id}>
                                  <Accordion.Header>
                                    <div className="AccordionHeader">
                                      <p>
                                        {cookiedata === "en" ? (
                                          item.TrackNameEn === null ? (
                                            <>N/A</>
                                          ) : (
                                            item.TrackNameEn
                                          )
                                        ) : item.TrackNameAr === null ? (
                                          <>N/A</>
                                        ) : (
                                          item.TrackNameAr
                                        )}
                                      </p>
                                      <p></p>
                                    </div>
                                  </Accordion.Header>
                                  {item.RaceCourseData.map((name, ind) => (
                                    <Accordion.Body>
                                      <div className="Competition_Matches">
                                        <p>
                                          {cookiedata === "en" ? (
                                            name.RaceNameModelData === null ? (
                                              <>N/A</>
                                            ) : (
                                              name.RaceNameModelData.NameEn
                                            )
                                          ) : name.RaceNameModelData ===
                                            null ? (
                                            <>N/A</>
                                          ) : (
                                            name.RaceNameModelData.NameAr
                                          )}
                                        </p>
                                        <p>{ind + 1}</p>
                                      </div>
                                    </Accordion.Body>
                                  ))}
                                </Accordion.Item>
                              </div>
                            </Accordion>
                          </div>
                        </>
                      );
                    })
                  )}
                </div>
              </Bounce>
            </div>
          </Tab>
          <Tab eventKey="contact" title={<BsCalendarDate />}>
            <div className=" newpost">
              <Bounce top>
                <Fade>
                  <Calendar
                    onChange={onChange}
                    value={value}
                    classNam="calenderin"
                  />
                </Fade>
              </Bounce>
              <Bounce bottom>
                <div className="Currentpostdiv">
                  {DayData.length === 0 || DayData === undefined ? (
                    <></>
                  ) : (
                    DayData.map((item, ind) => {
                      return (
                        <>
                          <div className="Currentpostheader">
                            <h2>
                              {item.RaceCourseData === null ? (
                                <>N/A</>
                              ) : (
                                item.RaceCourseData.NameEn
                              )}
                            </h2>
                            <img
                              src={item.RaceCourseData.image}
                              alt=""
                              style={{
                                width: "50px",
                                heigth: "50px",
                              }}
                            />
                          </div>
                          <div className="CompetitionData">
                            <Accordion>
                              <div className="Competitionitem" key={item._id}>
                                <Accordion.Item eventKey={item._id}>
                                  <Accordion.Header>
                                    <div className="AccordionHeader">
                                      <p>
                                        {cookiedata === "en" ? (
                                          item.RaceCourseData === null ? (
                                            <>N/A</>
                                          ) : (
                                            item.RaceCourseData.TrackNameEn
                                          )
                                        ) : item.RaceCourseData === null ? (
                                          <>N/A</>
                                        ) : (
                                          item.RaceCourseData.TrackNameAr
                                        )}
                                      </p>
                                      <p>
                                        {/* {" "}
                                        <Moment
                                          add={{ hours: 12 }}
                                          format="hh:mm"
                                        >
                                          {item.DayNTime}
                                        </Moment>
                                        min */}
                                      </p>
                                    </div>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <div
                                      onClick={() => HandleJockey(item._id)}
                                      className="Competition_Matches"
                                    >
                                      <p>
                                        {cookiedata === "en" ? (
                                          item.RaceNameModelData === null ? (
                                            <>N/A</>
                                          ) : (
                                            item.RaceNameModelData.NameEn
                                          )
                                        ) : item.RaceNameModelData === null ? (
                                          <>N/A</>
                                        ) : (
                                          item.RaceNameModelData.NameAr
                                        )}
                                      </p>
                                      <p>{ind + 1}</p>
                                    </div>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </div>
                            </Accordion>
                          </div>
                        </>
                      );
                    })
                  )}
                </div>
              </Bounce>
            </div>
          </Tab>
        </Tabs>
      )}
    </div>
  );
};

export default Match;
