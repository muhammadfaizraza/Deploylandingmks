import React, { useEffect, useState } from "react";
import "../Components/CSS/RaceCardCSS/racedetail.css";
import flag from "../assets/United Arab Emirates.png";
import prizeImage from "../assets/image 10 (1).png";
import RaceNav from "../../Webiste/Components/RaceCard/RaceNav";
import Layout from "../Components/Reuseable/layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglerace, STATUSES } from "../redux/getReducer/getSingleRace";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import shirt from "../../Webiste/assets/image 5.png";
import pic from "../../Webiste/assets/Ellipse 7.png";
import { RaceCardData } from "../data/data";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import { Modal } from "react-bootstrap";
import Competition from "../Components/Competition/Competition";
import img from "../assets/image 10.png";
import img1 from "../assets/image 10 (1).png";
import weather from "../assets/Partly Cloudy Day.png";
import arrow from "../assets/image 3 (Traced).png";
import Summary from "../Components/RaceCard/Summary";
import Draw from "../Components/RaceCard/Draw";
import Predictor from "../Components/RaceCard/Predictor";
import TrackRecord from "../Components/RaceCard/TrackRecord";

const Trophy = [
  {
    id: "1st",
    name: "East Street Revue ",
    image: img1,
    pts: "20PTS",
    HNo: "1",
    prize: "5,0000 AED",
  },
  {
    id: "2nd",
    name: "East Street Revue ",
    image: img,
    pts: "20PTS",
    HNo: "2",
    prize: "45,000 AED",
  },
  {
    id: "3rd",
    name: "East Street Revue ",
    image: img,
    pts: "20PTS",
    HNo: "3",
    prize: "4,0000 AED",
  },
  {
    id: "4th",
    name: "East Street Revue ",
    image: img,
    pts: "20PTS",
    HNo: "5",
    prize: "35,000 AED",
  },
  {
    id: "5th",
    name: "East Street Revue ",
    image: img,
    pts: "18PTS",
    HNo: "5",
    prize: "3,0000 AED",
  },
  {
    id: "6th",
    name: "East Street Revue ",
    image: img,
    pts: "10PTS",
    HNo: "6",
    prize: "25,000 AED",
  },
];
const RaceCardDetail = () => {
  const dispatch = useDispatch();
  const { data: singlerace, status } = useSelector((state) => state.singlerace);

  const [data, setdata] = useState();
  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState();
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
    setmodaldata(data);
    await setShow(true);
  };

  const { id } = useParams();
  console.log(singlerace, "singlerace");
  useEffect(() => {
    dispatch(fetchSinglerace({ id }));
  }, [id]);

  if (status === STATUSES.LOADING) {
    return <h2 className="loader"></h2>;
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
    padding: "13px 10px",
    gap: "10px",
    width: "96px",
    height: "21px",
    background: "#19469D",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    marginLeft: "10px",
  };
  const btnNew1 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "13px 10px",
    gap: "10px",
    width: "96px",
    height: "21px",
    background: "#FF0000",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
  };
  return (
    <>
      {/* <Layout /> */}
      <Zoom>
        <div className="RaceCardDetail">
          {singlerace.length !== 0 ? (
            <div className="RaceDetailHeader">
              <div>
                <div className="colorheader">
                  <div>
                    <span className="racenameflex">
                      <p>
                        {/* {singlerace.RaceCourseData === null ? (
                    <>N/A</>
                  ) : (
                    singlerace.RaceCourseData.TrackName
                  )} */}
                        Al Hassan
                      </p>
                      <img src={flag} alt="" />
                    </span>
                    <p className="itemtime">Friday {singlerace[0].DayNTime}</p>
                  </div>
                  <div className="racestatuscolor">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                  </div>
                </div>
                <div className="racedisc">
                  <div className="itemraces">
                    <div className="inner_itemraces">
                      <span className="itemraces_left">
                        <span className="race">
                          <p>Race 1</p>
                          <p>16:30</p>
                        </span>
                        <span className="sponsor"></span>
                      </span>
                      <span className="itemraces_center">
                        <h5>{singlerace[0].raceName}</h5>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "50%",
                          }}
                        >
                          <p
                            style={{
                              padding: "5px",
                            }}
                          >
                            {singlerace[0].RaceKind}
                          </p>
                          <p
                            style={{
                              padding: "5px",
                            }}
                          >
                            {singlerace[0].RaceStatus}
                          </p>
                          <p
                            style={{
                              padding: "5px",
                            }}
                          >
                            <img src={weather} alt="" />
                          </p>
                        </div>
                      </span>
                      <span className="itemraces_right">
                        <span className="distance">
                          {singlerace[0].DayNTime}
                        </span>
                        <div className="Favourite">
                          <div>
                            <p>Favourite</p>
                            <br />
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <p>Notre Dame</p>
                              <img src={arrow} alt="" className="videoicon" />
                            </div>
                            <p>4.40</p>
                          </div>
                        </div>
                      </span>
                    </div>
                    <p>
                      <b>DESCRIPTION</b> :{singlerace[0].Description}
                    </p>
                  </div>
                </div>
                <div className="prizecard">
                  <div className="prizecardheaders">
                    <p>
                      Total Prize: <b>300,000 AED</b>
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap:'10px'
                      }}
                    >
                      <button
                        style={btnNew}
                        onClick={() => {
                          alert("Tricast");
                        }}
                      >
                        Tricast
                      </button>
                      <button style={btnNew1} onClick={() => handleShow()}>
                        {" "}
                        Pick Six
                      </button>
                    </div>
                  </div>
                  <div className="Competitiontrophy">
                    {Trophy.map((item) => {
                      return (
                        <div className="Trophydata">
                          <span>{item.id}</span>
                          <span>
                            <img src={item.image} alt="" />
                          </span>
                          <div className="Trophydata_P">
                            <h6>{item.prize}</h6>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="RaceNav">
                  <Tabs
                    defaultActiveKey="Card"
                    id="uncontrolled-tab-example"
                    className="mb-3 RaceNavItem"
                  >
                    <Tab
                      eventKey="Card"
                      title="Card"
                      tabClassName="profile-tabitem"
                    >
                      <div className="RaceDetailCard">
                        <div className="forfexclass">
                          <Accordion defaultActiveKey="0">
                            <div>
                              {singlerace[0].Horses.map((data) => {
                                return (
                                  <Accordion.Item eventKey='0'>
                                    <Accordion.Header>
                                      <div className="cardracesAccordion">
                                        <div className="cardraces1">
                                          <img src={shirt} alt="" />
                                          <span className="cardraces1box">
                                            1-3-22
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
                                              <span>{data.NameEn}</span>
                                            </p>
                                            <p style={myPara}>
                                              {data.Age} (242)
                                            </p>
                                          </div>
                                          <div
                                            style={{
                                              display: "flex",
                                            }}
                                          >
                                            <p style={myPara}>
                                              <b>Dam</b> :{data.Dam}
                                            </p>
                                            <p style={myPara}>
                                              <b>Sire</b> :{data.Sire}
                                            </p>
                                            <p style={myPara}>
                                              <b>G.Sire</b> : {data.GSire}
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
                                              David & Nicola Barron{" "}
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
                                        </div>
                                        <div className="cardraces3">
                                          <div>
                                            {/* <p style={myPara1}>{singlerace[0].Horses.map((data) => data.GSire)}</p> */}
                                            <p style={myPara1}>56kg</p>
                                          </div>
                                          <div>
                                            {/* <img src={singlerace[0].Owner.map((data) => data.image)} alt="" /> */}
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div className="pmclass">
                                          <p>PM: AED 55,000</p>
                                          <p>BTO: AED 55,000</p>
                                          <p>SP: AED 55,000</p>
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
                                    </Accordion.Header>
                                    <Accordion.Body className="AccordionBody11" >
                                      <div className="">
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
                                            </tr>
                                          </table>
                                        </div>
                                      </div>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                );
                              })}
                            </div>
                          </Accordion>
                        </div>
                      </div>
                    </Tab>
                    <Tab
                      eventKey="Predictor"
                      title="Predictor"
                      tabClassName="profile-tabitem"
                    >
                      <div className="RaceDetailCard">
                        <Predictor />
                      </div>
                    </Tab>
                    <Tab
                      eventKey="Draw"
                      title="Draw"
                      tabClassName="profile-tabitem"
                    >
                      <div className="RaceDetailCard">
                        <Draw />
                      </div>
                    </Tab>
                    <Tab
                      eventKey="Summary"
                      title="Summary"
                      tabClassName="profile-tabitem"
                    >
                      <div className="RaceDetailCard">
                      <Summary />
                      </div>
                    </Tab>
                    <Tab
                      eventKey="Track Record"
                      title="Track Record"
                      tabClassName="profile-tabitem"
                    >
                      <div className="RaceDetailCard">
                        {/* <TrackRecord /> */}
                      </div>
                    </Tab>
                    <Tab
                      eventKey="Printout"
                      title="Printout"
                      tabClassName="profile-tabitem"
                    >
                      <div className="RaceDetailCard">
                        <div className="forfexclass">
                          <Accordion defaultActiveKey="1">
                            <div>
                              <Accordion.Item
                                eventKey={singlerace[0].Horses._id}
                              >
                                <Accordion.Header>
                                  <div className="cardracesAccordion">
                                    <div className="cardraces1">
                                      <img src={shirt} alt="" />
                                      <span className="cardraces1box">
                                        1-3-22
                                      </span>
                                    </div>
                                    <div className="cardraces2">
                                      <div
                                        style={{ display: "flex", gap: "10px" }}
                                      >
                                        <p
                                          style={{
                                            fontWeight: "700",
                                            fontSize: "19.6px",
                                            lineHeight: "24px",
                                            color: "#19469D",
                                          }}
                                        >
                                          {singlerace[0].Horses.map(
                                            (data) => data.NameEn
                                          )}
                                        </p>
                                        <p style={myPara}>
                                          {singlerace[0].Horses.map(
                                            (data) => data.Age
                                          )}{" "}
                                          (242)
                                        </p>
                                      </div>
                                      <div
                                        style={{
                                          display: "flex",
                                        }}
                                      >
                                        <p style={myPara}>
                                          <b>Dam</b> :
                                          {singlerace[0].Horses.map(
                                            (data) => data.Dam
                                          )}
                                        </p>
                                        <p style={myPara}>
                                          <b>Sire</b> :
                                          {singlerace[0].Horses.map(
                                            (data) => data.Sire
                                          )}
                                        </p>
                                        <p style={myPara}>
                                          <b>G.Sire</b> :{" "}
                                          {singlerace[0].Horses.map(
                                            (data) => data.GSire
                                          )}
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
                                          David & Nicola Barron{" "}
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
                                    </div>
                                    <div className="cardraces3">
                                      <div>
                                        {/* <p style={myPara1}>{singlerace[0].Horses.map((data) => data.GSire)}</p> */}
                                        <p style={myPara1}>56kg</p>
                                      </div>
                                      <div>
                                        {/* <img src={singlerace[0].Owner.map((data) => data.image)} alt="" /> */}
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="pmclass">
                                      <p>PM: AED 55,000</p>
                                      <p>BTO: AED 55,000</p>
                                      <p>SP: AED 55,000</p>
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
                                  {/* <div
                                style={{
                                  display: "flex",
                                }}
                              >
                                <button
                                  style={btnNew}
                                  onClick={() => {
                                    alert("Tricast");
                                  }}
                                >
                                  Tricast
                                </button>
                                <button
                                  style={btnNew1}
                                  onClick={() => {
                                    alert("Pick Six");
                                  }}
                                >
                                  {" "}
                                  Pick Six
                                </button>
                              </div> */}
                                </Accordion.Header>
                                <div  className="BodyNewRace">
                                <Accordion.Body>
                                  <div className="">
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
                                        </tr>
                                      </table>
                                    </div>
                                  </div>
                                </Accordion.Body>
                                </div>
                              </Accordion.Item>
                            </div>
                          </Accordion>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          ) : (
            <>No Data</>
          )}
          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <Competition />
            </Modal.Body>
            <Modal.Footer>
              {/* <button onClick={handleClose}>Close</button> */}
            </Modal.Footer>
          </Modal>
        </div>
      </Zoom>
      {/* <Footer />
      <CopyRight /> */}
    </>
  );
};

export default RaceCardDetail;
