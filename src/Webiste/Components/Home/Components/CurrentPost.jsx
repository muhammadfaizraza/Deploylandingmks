import React, { useEffect, useState } from "react";
import "../../CSS/HomeCSS/blogs.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse, STATUSES } from "../../../redux/getReducer/getRaceCourse";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import { BsCalendarDate } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import { Bounce, Fade } from "react-reveal";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from 'moment';

const Match = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const [value, onChange] = useState(new Date());
  const [DayData, setDayData] = useState([]);
  const { data: racecourse, status } = useSelector((state) => state.racecourse);

  useEffect(() => {
    dispatch(fetchCourse());
  }, []);

  function HandleJockey(id) {
    navigate("/racedetail", {
      state: {
        id: id,
      },
    });
  }

  const datedata = moment.utc(value).format('YYYY-MM-DD')


  console.log(datedata,'datedata 1')
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${window.env.API_URL}/GetRaceWithStartTime/${datedata}`,
        );
        setDayData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [value]);

  // const submit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await axios.post(`${window.env.API_URL}/GetRaceWithStartTime`, value);

  //   } catch (error) {
  //     const err = error.response.data.message;

  //   }
  // };

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
  const cookiedata = Cookies.get("i18next");
  console.log(DayData, "DayData");
  return (
    <div className="match">
      {racecourse === undefined ? (
        <h2></h2>
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
                                item.NationalityDataRaceCourse ===
                                null ? (
                                  <>N/A</>
                                ) : (
                                  item.NationalityDataRaceCourse.image
                                )
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
                                      <p>
                                        {/* {" "}
                                        <Moment
                                          add={{ hours: 12 }}
                                          format="hh:mm"
                                        >
                                          {item.DayNTime}
                                        </Moment> */}
                                        {/* min */}
                                      </p>
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
                                item.NationalityDataRaceCourse.image ===
                                null ? (
                                  <>N/A</>
                                ) : (
                                  item.NationalityDataRaceCourse.image
                                )
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
