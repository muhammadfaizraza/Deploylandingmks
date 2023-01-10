import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import { RaceCardData } from "../../data/data";
import { toast } from "react-toastify";
import ScrollContainer from "react-indiana-drag-scroll";
import { useSelector, useDispatch } from "react-redux";
import arrow1 from "../../assets/image 3 (Traced).png";
import Moment from "react-moment";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";
const Card = () => {
  const [Disable, setDisable] = useState(false);
  const [showtri, setShowtri] = useState(false);
  const [PositionNumber, setPositionNumber] = useState("1");
  const myPara = {
    fontWeight: "700",
    fontSize: "12px",
    color: "rgba(0, 0, 0, 0.5)",
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
    padding: "3px 10px",
    gap: "10px",
    width: "96px",
    height: "21px",
    background: "#19469D",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
  };
  const btnNew1 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "3px 10px",
    gap: "10px",
    width: "96px",
    height: "21px",
    background: "#FF0000",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
  };
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const id = "abc";
  const handleShowTri = async (data) => {
    await setShowtri(true);
  };
  const castClick = async (event, horseid, compid) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `/voting/${compid}/${id}/${PositionNumber}`,
        { Horse: horseid },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
  const runCallback = (cb) => {
    return cb();
  };
  const pickClick = async (event, compid, horseid) => {
    event.preventDefault();
    try {
      setDisable(true);
      const response = await axios.post(
        `/voting/${compid}/${id}/${PositionNumber}`,
        { Horse: horseid },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
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

  const { data: singlerace, status } = useSelector((state) => state.singlerace);
  const cookiedata = Cookies.get("i18next");
  return (
    <div className="RaceDetailCard">
      <div className="forfexclass">
        <Accordion defaultActiveKey="0">
          <div className="RaceAndHorseModelDataCSSFlex">
            <>
              {singlerace.JockeyModels.length ===
              singlerace.RaceAndHorseModelData.length ? (
                <>N/A</>
              ) : (
                <>
                  {singlerace.RaceAndHorseModelData === undefined ? (
                    <div className="NAclass">N/A</div>
                  ) : (
                    singlerace.RaceAndHorseModelData.map((data, index) => {
                      return (
                        <div className="RaceAndHorseModelDataCSS">
                          <Accordion.Item eventKey={index}>
                            <Accordion.Header>
                              <div className="cardracesAccordion">
                                <div className="cardraces1">
                                  <img src={data.HorseImage} alt="" />
                                  <span className="cardraces1box">
                                    <p>
                                      <Moment format="DD-MM-YY">
                                        {data.DOB}
                                      </Moment>
                                    </p>
                                    <h3>0{data.Foal}</h3>
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
                                      <span>
                                        {cookiedata === "en"
                                          ? data.NameEn
                                          : data.NameAr}
                                      </span>
                                    </p>
                                    <p style={myPara}>
                                      <Moment fromNow ago>
                                        {data.DOB}
                                      </Moment>{" "}
                                      GR H ({data.Height})
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
                                          data.DamData === null ? (
                                            <>N/A</>
                                          ) : (
                                            data.DamData.NameEn
                                          )
                                        ) : data.DamData === null ? (
                                          <>N/A</>
                                        ) : (
                                          data.DamData.NameAr
                                        )}
                                      </b>
                                    </p>
                                    <p style={myPara}>
                                      {t("Sire")}
                                      <b>
                                        :
                                        {cookiedata === "en" ? (
                                          data.SireData === null ? (
                                            <>N/A</>
                                          ) : (
                                            data.SireData.NameEn
                                          )
                                        ) : data.SireData === null ? (
                                          <>N/A</>
                                        ) : (
                                          data.SireData.NameAr
                                        )}
                                      </b>
                                    </p>
                                    <p style={myPara}>
                                      {t("GSire")}
                                      <b>
                                        :
                                        {cookiedata === "en" ? (
                                          data.GSireData === null ? (
                                            <>N/A</>
                                          ) : (
                                            data.GSireData.NameEn
                                          )
                                        ) : data.GSireData === null ? (
                                          <>N/A</>
                                        ) : (
                                          data.GSireData.NameAr
                                        )}
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
                                      }}
                                    >
                                      {cookiedata === "en" ? (
                                        data.ActiveOwnerData === null ? (
                                          <>N/A</>
                                        ) : (
                                          data.ActiveOwnerData.NameEn
                                        )
                                      ) : data.ActiveOwnerData === null ? (
                                        <>N/A</>
                                      ) : (
                                        data.ActiveOwnerData.NameAr
                                      )}
                                    </p>
                                    <p
                                      style={{
                                        fontWeight: "300",
                                        fontSize: "9px",
                                        lineHeight: "15px",
                                        color: "rgba(0, 0, 0, 0.5)",
                                      }}
                                    >
                                      (8 - 3 - 2 - 8 - 4)
                                    </p>
                                  </div>
                                  <div className="trainerbreader_section">
                                    <img
                                      src={data.ActiveOwnerData.image}
                                      alt=""
                                      className="trainerbreader_image"
                                    />{" "}
                                    <div className="race_trainerbreader">
                                      <p>
                                        T{" "}
                                        <b>
                                          {cookiedata === "en" ? (
                                            data.ActiveTrainerData ===
                                            undefined ? (
                                              <>N/A</>
                                            ) : (
                                              data.ActiveTrainerData.NameEn
                                            )
                                          ) : data.ActiveTrainerData ===
                                            undefined ? (
                                            <>N/A</>
                                          ) : (
                                            data.ActiveTrainerData.NameAr
                                          )}
                                        </b>
                                      </p>
                                      <p>
                                        B
                                        <b>
                                          {cookiedata === "en" ? (
                                            data.BreederData === null ? (
                                              <>N/A</>
                                            ) : (
                                              data.BreederData.NameEn
                                            )
                                          ) : data.BreederData === null ? (
                                            <>N/A</>
                                          ) : (
                                            data.BreederData.NameAr
                                          )}
                                        </b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="cardraces3">
                                  {/* <div>
                                                        <p style={myPara1}>{singlerace.Horses && singlerace.Horses.map((data) => (data.GSire))}</p>
                                                        <p style={myPara1}>56kg</p>
                                                      </div> */}
                                  {/* <div>
                                                        <img src={singlerace.Owner && singlerace.ActiveOwnerData.map((data) => data.image[index])} alt="" />
                                                      </div> */}
                                </div>

                                <div className="cardraces4">
                                  {/* <p
                                                  style={{
                                                    fontWeight: "300",
                                                    fontSize: "12px",
                                                    lineHeight: "15px",
                                                    color: "rgba(0, 0, 0, 0.5)",
                                                    textAlign: "end",
                                                  }}
                                                >
                                                  TT OR:
                                                  {singlerace.JockeyModels
                                                    === undefined ? (
                                                    <>N/A</>
                                                  ) : singlerace.JockeyModels[
                                                    index
                                                  ].Rating === undefined ? (
                                                    <>N/A</>
                                                  ) : (
                                                    singlerace.JockeyModels[
                                                      index
                                                    ].Rating
                                                  )}
                                                </p> */}
                                  <div className="cardracesjockey">
                                    <div className="cardracesjockeyleft">
                                      J
                                      {cookiedata === "en" ? (
                                        singlerace.JockeyModels.NameEn ? (
                                          singlerace.JockeyModels[index].NameEn
                                        ) : (
                                          <>N/A</>
                                        )
                                      ) : singlerace.JockeyModels.NameAr ? (
                                        singlerace.JockeyModels[index].NameAr
                                      ) : (
                                        <>N/A</>
                                      )}
                                      {/* <b>
                                                        {cookiedata === "en" ? singlerace.JockeyModels.NameEn && singlerace.JockeyModels[index].NameEn : singlerace.JockeyModels[index].NameAr && singlerace.JockeyModels[index].NameAr}</b>
                                                    </p> */}
                                      <p>
                                        {singlerace.JockeyModels
                                          .MaximumJockeyWeight ? (
                                          singlerace.JockeyModels[index]
                                            .MaximumJockeyWeight
                                        ) : (
                                          <>N/A </>
                                        )}
                                        kg
                                      </p>
                                      <p
                                        style={{
                                          fontWeight: "300",
                                          fontSize: "9px",
                                          lineHeight: "15px",
                                          color: "rgba(0, 0, 0, 0.5)",
                                        }}
                                      >
                                        47 (8 - 3 - 2 - 8 - 4)
                                      </p>
                                    </div>
                                    <img
                                      src={
                                        singlerace.JockeyModels.image ? (
                                          singlerace.JockeyModels.image
                                        ) : (
                                          <></>
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
                                <div className="pmclass">
                                  <p>
                                    PM: AED <b>{data.PurchasePrice}</b>
                                  </p>
                                  <p>
                                    BTO: AED <b>55,000</b>
                                  </p>
                                  <p>
                                    SP: AED <b>55,000</b>
                                  </p>
                                </div>
                                <div className="uaecareer">
                                  <p>UAE Career: 47 (2 - 8 - 4)</p>
                                  <p>Lifetime: 47 (2 - 8 - 4)</p>
                                  <p>Turf :47 (2 - 8 - 4) </p>
                                  <p>Durt :47 (2 - 8 - 4) </p>
                                  <p>Dist: 47 (2 - 8 - 4) </p>
                                  <p>AW :47 (2 - 8 - 4) </p>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                }}
                              >
                                {singlerace.CompetitionRacesPointsModelData
                                  .length === 0 ? (
                                  <></>
                                ) : (
                                  <>
                                    {singlerace
                                      .CompetitionRacesPointsModelData[0]
                                      .CompetitionCategory === "pick" ? (
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
                                            onClick={() => handleShowTri()}
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
                                              onClick={castClick}
                                            >
                                              {runCallback(() => {
                                                const row = [];
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
                                                      name="cast"
                                                      value={i + 1}
                                                      onChange={(e) =>
                                                        setPositionNumber(
                                                          e.target.value
                                                        )
                                                      }
                                                      onClick={(event) =>
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
                                              })}
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
                            </Accordion.Header>
                            <Accordion.Body className="AccordionBody11">
                              <div className="mycardclass1">
                                <div className="BodyNew">
                                  <table className="customers">
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
                                  </table>
                                </div>
                                <div className="BodyNew1">
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
                                        <img src={arrow1} alt="" />
                                      </th>
                                    </tr>
                                  </table>
                                </div>
                                <div className="BodyNew2">
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
                                        <img src={arrow1} alt="" />
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
                                        <img src={arrow1} alt="" />
                                      </th>
                                    </tr>
                                  </table>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </div>
                      );
                    })
                  )}
                </>
              )}
            </>
          </div>
        </Accordion>
      </div>
    </div>
  );
};
export default Card;
