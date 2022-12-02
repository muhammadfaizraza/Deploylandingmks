
import React, { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import "../Components/CSS/RaceCardCSS/racedetail.css";
import flag from "../assets/United Arab Emirates.png";
import prizeImage from "../assets/image 10 (1).png";
import RaceNav from "../../Webiste/Components/RaceCard/RaceNav";
import Layout from "../Components/Reuseable/layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglerace, STATUSES } from "../redux/getReducer/getSingleRace";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import shirt from "../../Webiste/assets/image 5.png";
import pic from "../../Webiste/assets/Ellipse 7.png";
import { RaceCardData } from "../data/data";
import { useNavigate, useLocation } from "react-router-dom";
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
import arrow1 from "../assets/image 13 (Traced).png";
import Moment from 'react-moment';
import PrintOut from "../Components/RaceCard/Printout"
import Header from "../Components/Reuseable/Header";
import Footer from "../Components/Reuseable/Footer";
import ScrollContainer from "react-indiana-drag-scroll";


const RaceDetails = () => {
    const dispatch = useDispatch();
  const {state} = useLocation();
  const { data: singlerace, status } = useSelector((state) => state.singlerace);

  const [data, setdata] = useState();
  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState();
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
    setmodaldata(data);
    await setShow(true);
  };

  const { id } = state;
  console.log(id,'detail id')

  console.log(singlerace, "singlerace");
  useEffect(() => {
    dispatch(fetchSinglerace({ id }));
  }, [id]);

  if (status === STATUSES.LOADING) {
    return <h2 className="loader1">


      
    </h2>;
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
    paddingLeft:'3px'
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
    width: "139px",
    height: "24px",
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
    width: "139px",
    height: "24px",
    background: "#FF0000",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
  };
  
  console.log(singlerace , "single")
  const cookiedata = Cookies.get('i18next')
  return (
    <>
     <Header />
    <Zoom>
      <div className="RaceCardDetail">
        {singlerace.length !== 0 ? (
         <>
         <div className="RaceDetailHeader">
            <div>
              <div className="colorheader rescolorheader">
                <div>
                  <span className="racenameflex resracenameflex">
                    <p>
                    {  cookiedata === 'en' ?  (singlerace.RaceCourseData.TrackNameEn === null ?<>N/A</> :singlerace.RaceCourseData.TrackNameEn )  : (singlerace.RaceCourseData.TrackNameAr === null ? <>N/A</>:singlerace.RaceCourseData.TrackNameAr )}
                    </p>
                    <img src={flag} alt="" />
                  </span>
                  <p className="itemtime"> 
                       <Moment format="hh:mm:ss" trim durationFromNow> {singlerace.DayNTime}
                        </Moment>  </p>
                </div>
                <div className="racestatuscolor resracestatuscolor ">
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
                        <p><b>16:35</b></p>
                      </span>
                 

<img  className="sponsor" src={singlerace.SponsorData.image}  alt=""  /> 
<span style={{display:"block"   ,  margin: "15px 10px 1px" ,fontSize:"10px"}}>
<p
                          style={{
                            padding: "5px",
                          }}
                        >
                    {singlerace.RaceKindData.NameEn} 
                        </p> 
                           <p
                            style={{
                              padding: "5px",
                            }}
                          >
                     
                          {singlerace.RaceTypeModelData.NameEn} 
                                                    </p> 
                                                   
                                                    </span>       
                                                    <span className="weatherimg">
                                                    <img src={weather} alt="" />
                                                        </span>       
                    </span>
                    <span className="itemraces_center">
                   <h5>   {  cookiedata === 'en' ?  (singlerace.RaceNameModelData.NameEn === null ?<>N/A</> : singlerace.RaceNameModelData.NameEn)  :( singlerace.RaceNameModelData.NameAr === null ? <>N/A</> : singlerace.RaceNameModelData.NameAr)} </h5>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "60%",
                        }}
                      >
                   
                      </div>
                      
                    </span>
                    <span className="itemraces_right">
                    <p
                          style={{
                            display:'flex',
                            alignItems:'center',
                            margin:'15px'
                          }}
                        >
                       
                        </p>
                      <span className="distance">
                    
                {singlerace.TrackLengthData.TrackLength}m        {singlerace.WeatherDegree}F
                    
                      
                      </span>
                      <div className="Favourite">
                        <div className="raced">
                          <p>Favourite</p>
                          <br />
                          <div
                            style={{
                              display: "flex",
                              width:'100px',
                              justifyContent:'space-between'
                            }}
                          >
                            <p style={{fontSize:"13px"}}>Notre Dame</p>
                            <img src={arrow} alt="" className="videoicon" />
                          </div>
                          <p>4.40</p>
                        </div>
                      </div>
                    </span>
                  </div>
                  <p>
                    <b>DESCRIPTION</b> :{singlerace.DescriptionEn}
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
                     
                      Pick Six
                    </button>
                  </div>
                </div>
                <ScrollContainer className="scroll-container">
                <div className="Competitiontrophy">
               
                     
                      <div className="Trophydata">
              
                        <span>1st</span>
                        <span>
                          <img src={img1} alt="" />
                        </span>
                        <div className="Trophydata_P">
                          <h6>{singlerace.FirstPrice} AED</h6>
                        </div>
                        
                      </div>
                      <div className="Trophydata">
                        <span>2nd</span>
                        <span>
                          <img src={img} alt="" />
                        </span>
                        <div className="Trophydata_P">
                          <h6>{singlerace.SecondPrice} AED</h6>
                        </div>
                        
                        
                      </div>
                      <div className="Trophydata">
                        <span>3rd</span>
                        <span>
                          <img src={img} alt="" />
                        </span>
                        <div className="Trophydata_P">
                          <h6>{singlerace.ThirdPrice} AED</h6>
                        </div>
                        
                        
                      </div>
                      <div className="Trophydata">
                        <span>4th</span>
                        <span>
                          <img src={img} alt="" />
                        </span>
                        <div className="Trophydata_P">
                          <h6>{singlerace.FourthPrice} AED</h6>
                        </div>
                        
                        
                      </div>
                      <div className="Trophydata">
                        <span>5th</span>
                        <span>
                          <img src={img} alt="" />
                        </span>
                        <div className="Trophydata_P">
                          <h6>{singlerace.FifthPrice} AED</h6>
                        </div>
                        
                        
                      </div>
                      <div className="Trophydata">
                        <span>6th</span>
                        <span>
                          <img src={img} alt="" />
                        </span>
                        <div className="Trophydata_P">
                          <h6>{singlerace.SixthPrice} AED</h6>
                        </div>
                        
                        
                      </div>
                      
                </div>
                </ScrollContainer>
                
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

                            {
                             singlerace.HorseModels === undefined ? <>N/A</>:

                            singlerace.HorseModels.map((data) => {
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
                                      <div className="cardraces4">
                                        <p style={{
                                              fontWeight: "300",
                                              fontSize: "12px",
                                              lineHeight: "15px",
                                              color: "rgba(0, 0, 0, 0.5)",
                                              textAlign:'end'
                                            }}>TT OR: 62</p>
                                             {
                                              singlerace.JockeyModels.map((jockey , ind)=>(
                                        <div className="cardracesjockey" key={ind}>
                                        
                                          <div className="cardracesjockeyleft">
                                      
                                   
                                        
                                     
                                            <p>J<b>{jockey.NameEn}</b></p>    
                                            <p>{jockey.MaximumJockeyWeight}</p>
                                
                                           
                                            <p style={{
                                              fontWeight: "300",
                                              fontSize: "9px",
                                              lineHeight: "15px",
                                              color: "rgba(0, 0, 0, 0.5)",
                                            }}>47 (8 - 3 - 2 - 8 - 4)</p>
                                          </div>
                                          <img src={jockey.image} alt="" className="cardracesjockeyimg"/>
                                        </div>
                                            ))} 
                                        <div className="cardracesjockeycards">
                                          <ul>
                                            <li>C</li>
                                            <li>D</li>
                                            <li>CL</li>
                                            <li>BF</li>
                                          </ul>
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
                                            <span>{cookiedata === "en" ?data.NameEn :   data.NameAr }</span>
                                          </p>
                                          <p style={myPara}>
                                          <Moment fromNow ago>{data.DOB}</Moment>  GR H (242) 
                                          </p>
                                        </div>
                                        <div
                                          style={{
                                            display: "flex",
                                            lineHeight:'1px'
                                          }}
                                        >
                                          <p style={myPara}>
                                          Dam <b>:{data.Dam === null ? <>N/A</> : <>{data.Dam} </>} </b> 
                                          </p>
                                          <p style={myPara}>
                                          Sire   <b>:{data.Sire === null ? <>N/A</> : <>{data.Sire} </>}  </b> 
                                          </p>
                                          <p style={myPara}>
                                          G.Sire <b>:{data.GSire === null ? <>N/A</> : <>{data.GSire} </>} </b> 
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
                                     <b>O</b>       David & Nicola Barron
                                          </p>
                                          <p
                                            style={{
                                              fontWeight: "300",
                                              fontSize: "9px",
                                              lineHeight: "15px",
                                              color: "rgba(0, 0, 0, 0.5)",
                                             marginLeft:"10px", 
                                            }}
                                          >
                                            (8 - 3 - 2 - 8 - 4)
                                          </p>
                                        </div>
                                        <div className="trainerbreader_section">
                                          <img src={pic} alt="" className="trainerbreader_image"/>                                            <div className="race_trainerbreader">
                                          <p>T <b>Miss Alice Keighley </b></p>
                                          <p>B <b>{data.BreederData === undefined ? <>N/A</>:<> {data.BreederData.NameEn}</>} </b></p>
                                          </div>
                                        </div>
                                      </div>
                                    <div>
                                      <div className="pmclass">
                                        <p>PM: AED <b>55,000</b></p>
                                        <p>BTO: AED <b>55,000</b></p>
                                        <p>SP: AED <b>55,000</b></p>
                                      </div>
                                      <ScrollContainer className="scroll-container">
                                      <div className="uaecareer">
                                        <p>UAE Career: 47 (2 - 8 - 4)</p>
                                        <p>Lifetime: 47 (2 - 8 - 4)</p>
                                        <p>Turf :47 (2 - 8 - 4) </p>
                                        <p>Durt :47 (2 - 8 - 4) </p>
                                        <p>Dist: 47 (2 - 8 - 4) </p>
                                        <p>AW :47 (2 - 8 - 4) </p>
                                      </div>
                                      </ScrollContainer>
                                    </div>
                                  </Accordion.Header>
                                  <Accordion.Body className="AccordionBody11" >
                                  <ScrollContainer className="scroll-container">
                                    <div className="mycardclass1">
                                      <div className="BodyNew">
                                        <table className="customers costum">
                                          <tr>
                                            <th>Date</th>
                                            <th>Cr</th>
                                            <th>Dist</th>
                                            <th>TC</th>
                                            <th>Type</th>
                                            <th>Dhr</th>
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
                                            <th><img src={arrow1} alt='' /></th>
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
                                              <img src={arrow1} alt='' />
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
                                            <th><img src={arrow1} alt='' /></th>
                                          </tr>
                                        </table>
                                      </div>
                                    </div>
                                    </ScrollContainer>
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
                         <Draw />
                    <div className="RaceDetailCard">
                 
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
                  <TrackRecord />
                    </div>
                  </Tab>
                  <Tab
                    eventKey="Printout"
                    title="Printout"
                    tabClassName="profile-tabitem"
                  >
                
                  <PrintOut/>
                  </Tab>
                </Tabs>
            
              </div>
         
            </div>
      
            <div>
      <Footer />

          </div>
          </div>

        
          </>
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
  
     
  </>
  )
}

export default RaceDetails