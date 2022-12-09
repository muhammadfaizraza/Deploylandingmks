import React, { useEffect ,useState } from "react";
import "../../CSS/HomeCSS/blogs.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse, STATUSES } from "../../../redux/getReducer/getRaceCourse";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import Calendar1 from "./Calendar";
import { BsCalendarDate } from "react-icons/bs";
import flag from "../../../assets/United Arab Emirates.png";
import { useParams, useNavigate } from "react-router-dom";
import { Bounce ,Fade } from "react-reveal";
import { useTranslation } from "react-i18next";
import Moment from "react-moment";
import Cookies from "js-cookie";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Match = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const [value, onChange] = useState(new Date());
  const [DayData , setDayData] = useState([])
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




  useEffect(() => {
    (async () => {
      try {
        const res = axios.post(`${window.env.API_URL}/GetRaceWithDayntime`, {DayNTime:value});
        setDayData(res.data.data)
      } catch (err) {
        console.log('Error occured');
      }
    })();
  }, []);


  console.log(DayData,'res')
  // const submit = async (event) => {

  //   event.preventDefault();
  //   try {  
  //     await axios.post(`${window.env.API_URL}/GetRaceWithDayntime`, value);

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
      ></h2>
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
        <h2></h2>
      ) : (
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-4 "
        >
          <Tab eventKey="home" title={t("current")}>
            <div className=" newpost">
              <Accordion defaultActiveKey="0" flush>
                <Bounce bottom>
                  <div className="Currentpostdiv">
                    <div className="Currentpostheader">
                      <h2>{t("United Arab Emirates")}</h2>
                      <img src={flag} alt="" />
                    </div>
                    <div className="CompetitionData">
                      <Accordion>
                        {
                          racecourse.length === 0 || racecourse === undefined ? <></> : racecourse.map((item, ind) => {
                            return (
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
                                        {" "}
                                        <Moment
                                          add={{ hours: 12 }}
                                          format="hh:mm"
                                        >
                                          {item.DayNTime}
                                        </Moment>
                                        min
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
                                          {cookiedata === "en"
                                            ? (name.RaceNameModelData === null ? <>N/A</> : name.RaceNameModelData.NameEn)
                                            : (name.RaceNameModelData === null ? <>N/A</> : name.RaceNameModelData.NameAr)}
                                        </p>
                                        <p>{ind + 1}</p>
                                      </div>
                                    </Accordion.Body>
                                  ))}
                                </Accordion.Item>
                              </div>
                            );
                          })
                        }
                      </Accordion>
                    </div>
                  </div>
                </Bounce>
              </Accordion>
            </div>
          </Tab>
          <Tab eventKey="ante" title={t("ante_post")} className="Ante_Post">
            <div className=" newpost">
              <Bounce bottom>
              <div className="Currentpostdiv">
                    <div className="Currentpostheader">
                      <h2>{t("United Arab Emirates")}</h2>
                      <img src={flag} alt="" />
                    </div>
                    <div className="CompetitionData">
                      <Accordion>
                        {
                          racecourse.length === 0 || racecourse === undefined ? <></> : racecourse.map((item, ind) => {
                            return (
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
                                        {" "}
                                        <Moment
                                          add={{ hours: 12 }}
                                          format="hh:mm"
                                        >
                                          {item.DayNTime}
                                        </Moment>
                                        min
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
                                          {cookiedata === "en"
                                            ? (name.RaceNameModelData === null ? <>N/A</> : name.RaceNameModelData.NameEn)
                                            : (name.RaceNameModelData === null ? <>N/A</> : name.RaceNameModelData.NameAr)}
                                        </p>
                                        <p>{ind + 1}</p>
                                      </div>
                                    </Accordion.Body>
                                  ))}
                                </Accordion.Item>
                              </div>
                            );
                          })
                        }
                      </Accordion>
                    </div>
                  </div>
              </Bounce>
            </div>
          </Tab>
          <Tab eventKey="contact" title={<BsCalendarDate />}>
            <div className=" newpost">
              <Bounce top>
              <Fade>
                <Calendar onChange={onChange} value={value} classNam="calenderin" />
              </Fade>
              </Bounce>
              <Bounce bottom>
              <div className="Currentpostdiv">
                    <div className="Currentpostheader">
                      <h2>{t("United Arab Emirates")}</h2>
                      <img src={flag} alt="" />
                    </div>
                    <div className="CompetitionData">
                      <Accordion>
                        {
                          DayData.length === 0 || DayData === undefined ?<div className="NAclass">No Race</div> : DayData.map((item, ind) => {
                            return (
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
                                        {" "}
                                        <Moment
                                          add={{ hours: 12 }}
                                          format="hh:mm"
                                        >
                                          {item.DayNTime}
                                        </Moment>
                                        min
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
                                          {cookiedata === "en"
                                            ? (name.RaceNameModelData === null ? <>N/A</> : name.RaceNameModelData.NameEn)
                                            : (name.RaceNameModelData === null ? <>N/A</> : name.RaceNameModelData.NameAr)}
                                        </p>
                                        <p>{ind + 1}</p>
                                      </div>
                                    </Accordion.Body>
                                  ))}
                                </Accordion.Item>
                              </div>
                            );
                          })
                        }
                      </Accordion>
                    </div>
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
