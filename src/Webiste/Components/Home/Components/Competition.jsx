import { useState, useEffect } from "react";
import "../../CSS/HomeCSS/Competition.css";
import { RaceCourse } from "../../../data/data";
import flag from "../../../assets/United Arab Emirates.png";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchcompetition,
  STATUSES,
} from "../../../redux/getReducer/getCompetition";
import Animate from "../../../assets/loader.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Competition = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: competition, status } = useSelector(
    (state) => state.competition
  );
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  console.log(competition, "competition");
  useEffect(() => {
    dispatch(fetchcompetition());
  }, []);
  if (status === STATUSES.LOADING) {
    return (
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
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
  function HandleJockey(id) {
    navigate("/racedetail", {
      state: {
        id: id,
      },
    });
  }
  return (
    <>
      <div className="Competition">
        <div className="CompetitionHeader">
          <h2>{t("competitionHeading")}</h2>
          {/* <img src={flag} alt="" /> */}
        </div>
        <div className="CompetitionData">
          <Accordion defaultActiveKey="1">
            { competition === undefined ? "N/A":
            competition.map((item) => {
              return (
                <div className="Competitionitem" key={item._id}>
                  <Accordion.Item eventKey={item._id}>
                    <Accordion.Header className="AccordionHeader11">
                      <div className="AccordionHeader">
                        <p>{cookiedata === "en" ? <>{item.NameEn}</> : <>{item.NameAr}</>}
                        
                        {/* {cookiedata === "en" ? <>{item.NameEn}</>:<>{item.NameAr}</>  } */}
                        
                        </p>
                        {/* <p>{item.raceNo} Races</p> */}
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      {item.CompetitionRacesPointsModelData.map((data) => {
                        return (
                          <div
                            className="Competition_Matches"
                            onClick={() => HandleJockey(data._id)}
                          >
                            <p>
                            {cookiedata === "en" ? (
                                item.RaceNameModelData === undefined ? (
                                  <>N/A</>
                                ) : (
                                  item.RaceNameModelData.NameEn
                                )
                              ) : item.RaceNameModelData === undefined ? (
                                <>N/A</>
                              ) : (
                                item.RaceNameModelData.NameAr
                              )}
                            
                            </p>
                            <p>{data.WeatherType}</p>
                          </div>
                        );
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default Competition;
