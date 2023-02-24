import { useEffect } from "react";
import "../../CSS/HomeCSS/Competition.css";
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
  useEffect(() => {
    dispatch(fetchcompetition());
  }, [dispatch]);
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
            {competition === undefined
              ? "N/A"
              : competition.map((item) => {
                  return (
                    <div className="Competitionitem" key={item._id}>
                      <Accordion.Item eventKey={item._id}>
                        <Accordion.Header className="AccordionHeader11">
                          <div className="AccordionHeader">
                            <p>
                              {cookiedata === "en" ? (
                                <>{item.NameEn}</>
                              ) : (
                                <>{item.NameAr}</>
                              )}

                              {/* {cookiedata === "en" ? <>{item.NameEn}</>:<>{item.NameAr}</>  } */}
                            </p>
                            <p>
                              {item.CompetitionRacesPointsModelData.length}{" "}
                              Races
                            </p>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          {item.CompetitionRacesPointsModelData.map(
                            (data, index) => {
                              return (
                                <div
                                  className="Competition_Matches"
                                  onClick={() => HandleJockey(data._id)}
                                >
                                  <p>
                                    {cookiedata === "en" ? (
                                      data.RaceNameModelData === undefined ? (
                                        <>N/A</>
                                      ) : (
                                        data.RaceNameModelData.NameEn
                                      )
                                    ) : data.RaceNameModelData === undefined ? (
                                      <>N/A</>
                                    ) : (
                                      data.RaceNameModelData.NameAr
                                    )}
                                  </p>
                                  <p>{index + 1}</p>
                                </div>
                              );
                            }
                          )}
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
