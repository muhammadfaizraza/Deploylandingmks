import Accordion from "react-bootstrap/Accordion";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Defaultimg from "../../assets/Frame.png";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      className="ShowPreviousHistory"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const CardPrint = () => {
  const myPara = {
    fontWeight: "700",
    fontSize: "12px",
    color: "rgba(0, 0, 0, 0.5)",
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

  const { data: singlerace } = useSelector((state) => state.singlerace);
  const cookiedata = Cookies.get("i18next");
  return (
    <div className="RaceDetailCard">
      <div className="forfexclass">
        <Accordion defaultActiveKey="0">
          <div className="RaceAndHorseModelDataCSSFlex">
            {singlerace.RacehorsesData === undefined ? (
              <div className="NAclass">N/A</div>
            ) : (
              singlerace.RacehorsesData.map((data, index) => {
                return (
                  <div className="RaceAndHorseModelDataCSS">
                    <Card>
                      <Card.Header>
                        <div className="cardracesAccordion">
                          <div className="cardraces1">
                          {
                          singlerace.SponsorData ? <img
                            className="sponsor"
                            src={
                              singlerace.SponsorData.image === null ? (
                                Defaultimg
                              ) : (
                                singlerace.SponsorData.image
                              )
                            }
                            alt=""
                          /> : <></>
                        }
                            <span className="cardraces1box">
                              <p>
                                <Moment format="DD-MM-YY">
                                  {data.HorseModelIdData1 ? data.HorseModelIdData1.DOB : <></>}
                                </Moment>
                              </p>

                              <h3>{data.HorseNo}</h3>
                              <p
                                style={{
                                  float: "right",
                                }}
                              >
                                ({data.GateNo})
                              </p>
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
                                    ? (data.HorseModelIdData1 ? data.HorseModelIdData1.NameEn : <></>)
                                    :( data.HorseModelIdData1 ?  data.HorseModelIdData1.NameAr : <></>)}
                                </span>
                              </p>
                              {/* <img
                                                      src={
                                                        data.HorseModelIdData1.NationalityData
                                                          .image
                                                          ? data.HorseModelIdData1.NationalityData
                                                              .image
                                                          : <></>
                                                      }
                                                      alt=""
                                                    /> */}

                              <p style={myPara}>
                                <Moment fromNow ago>
                                  {data.HorseModelIdData1 ? data.HorseModelIdData1.DOB : <></>}
                                </Moment>{" "}
                                {data.CapColorData1 === null ? (
                                  <></>
                                ) : (
                                  data.CapColorData1.NameEn
                                )}{" "}
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
                                                        data.HorseModelIdData1 ? data.HorseModelIdData1.NameEn : <></>
                                                        
                                                      ) : data.HorseModelIdData1 ? data.HorseModelIdData1.NameAr : <></>}
                                                    </b>
                                                  </p>
                                                  <p style={myPara}>
                                                    {t("Sire")}
                                                    <b>
                                                      :
                                                      {cookiedata === "en" ? (
                                                          data.HorseModelIdData1 ?   data.HorseModelIdData1.SireNameEn : <></>
                                                      ) : data.HorseModelIdData1 ? data.HorseModelIdData1.SireNameAr : <></>}
                                                    </b>
                                                  </p>
                                                  <p style={myPara}>
                                                    {t("GSire")}
                                                    <b
                                                      style={{
                                                        marginLeft: "12px",
                                                      }}
                                                    >
                                                      :
                                                      {cookiedata === "en" ? (
                                                        data.HorseModelIdData1 ? data.HorseModelIdData1.GSireNameEn : <></>
                                                      ) : data.HorseModelIdData1 ? data.HorseModelIdData1.GSireNameAr : <></>}
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
                                  margin: "0px 10px 0px 3px",
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
                                  data.OwnerOnRaceData1 === undefined ? (
                                    <>N/A</>
                                  ) : (
                                    data.OwnerOnRaceData1.NameEn
                                  )
                                ) : data.OwnerOnRaceData1 === undefined ? (
                                  <>N/A</>
                                ) : (
                                  data.OwnerOnRaceData1.NameAr
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
                                src={
                                  data.JockeyOnRaceData1 === null ? (
                                    <></>
                                  ) : data.JockeyOnRaceData1.image === null ? (
                                    <></>
                                  ) : (
                                    data.JockeyOnRaceData1.image
                                  )
                                }
                                alt=""
                                className="trainerbreader_image"
                              />{" "}
                              <div className="race_trainerbreader">
                                <p>
                                  T
                                  <b
                                    style={{
                                      marginLeft: "9px",
                                    }}
                                  >
                                    {cookiedata === "en" ? (
                                      data.TrainerOnRaceData1 === undefined ? (
                                        <>N/A</>
                                      ) : (
                                        data.TrainerOnRaceData1.NameEn
                                      )
                                    ) : data.TrainerOnRaceData1 ===
                                      undefined ? (
                                      <>N/A</>
                                    ) : (
                                      data.TrainerOnRaceData1.NameAr
                                    )}
                                  </b>
                                </p>
                                <p>
                                  {/* B
                                  <b
                                    style={{
                                      marginLeft: "12px",
                                    }}
                                  >
                                    {cookiedata === "en" ? (
                                      data.HorseModelIdData1.BreederData ===
                                      undefined ? (
                                        <>N/A</>
                                      ) : (
                                        data.HorseModelIdData1.BreederData
                                          .NameEn
                                      )
                                    ) : data.HorseModelIdData1.BreederData ===
                                      undefined ? (
                                      <>N/A</>
                                    ) : (
                                      data.HorseModelIdData1.BreederData.NameAr
                                    )}
                                  </b> */}
                                </p>
                              </div>
                            </div>
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
                                color: "rgba(0, 0, 0, 0.5)",
                                textAlign: "end",
                              }}
                            >
                              {data.EquipmentData1 === null ? (
                                <>N/A</>
                              ) : (
                                data.EquipmentData1.NameEn
                              )}{" "}
                              OR:
                              {data.JockeyOnRaceData1 === null ? (
                                <>N/A</>
                              ) : data.Rating === undefined ? (
                                <>0</>
                              ) : (
                                data.Rating
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
                                    {cookiedata === "en" ? (
                                      data.JockeyOnRaceData1 === null ? (
                                        <>N/A</>
                                      ) : data.JockeyOnRaceData1 ===
                                        undefined ? (
                                        <>N/A</>
                                      ) : (
                                        data.JockeyOnRaceData1.NameEn
                                      )
                                    ) : data.JockeyOnRaceData1 === null ? (
                                      <>N/A</>
                                    ) : data.JockeyOnRaceData1 === undefined ? (
                                      <>N/A</>
                                    ) : (
                                      data.JockeyOnRaceData1.NameAr
                                    )}
                                  </b>
                                </p>
                                <p>
                                  {data.JockeyOnRaceData1 === null ? (
                                    <>N/A</>
                                  ) : data.JockeyRaceWeight === undefined ? (
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
                                    color: "rgba(0, 0, 0, 0.5)",
                                  }}
                                >
                                  47 (8 - 3 - 2 - 8 - 4)
                                </p>
                              </div>
                              <img
                                src={
                                  data.JockeyOnRaceData1 === null ? (
                                    <>N/A</>
                                  ) : data.JockeyOnRaceData1.image ===
                                    undefined ? (
                                    <>N/A</>
                                  ) : data.JockeyOnRaceData1.image ? (
                                    data.JockeyOnRaceData1.image
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
                        <div></div>
                        <div>
                          <div className="pmclass">
                            <p>
                              PM: AED{" "}
                              <b>{data.HorseModelIdData1 ? data.HorseModelIdData1.PurchasePrice : <></>}</b>
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
                            justifyContent: "space-between",
                          }}
                        >
                          {/* {singlerace.CompetitionRacesPointsModelData.length ===
                          0 ? (
                            <></>
                          ) : (
                            <>
                              {singlerace.CompetitionRacesPointsModelData[0]
                                .CompetitionCategory === "pick" ? (
                                <button style={btnNew1}>
                                  {
                                    singlerace
                                      .CompetitionRacesPointsModelData[0]
                                      .CompetitionCategory
                                  }
                                </button>
                              ) : (
                                <>
                                  
                                </>
                              )}
                            </>
                          )} */}

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

                          {/* {
                            data.HorseModelIdData1.TrackHorses &&
                            data.HorseModelIdData1.TrackHorses.length > 0 ? (
                              <div div className="trackBtn">
                                <button className="w-100 px-10" style={btnNew1}>
                                  Track Horse
                                </button>
                              </div>
                            ) : (
                              <></>
                            )
                            
                          } */}
                        </div>
                        <CustomToggle eventKey="0">
                          <button className="showMore"> Show History </button>
                        </CustomToggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
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
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </div>
                );
              })
            )}
          </div>
        </Accordion>
      </div>
    </div>
  );
};
export default CardPrint;
