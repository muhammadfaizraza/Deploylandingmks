import shirt from "../assets/image 5.png";
import "../Components/CSS/pagesCSS/horse.css";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BsFillCaretRightFill } from "react-icons/bs";
import React,{useEffect} from 'react';
import Cookies from "js-cookie";
import Moment from "react-moment";

const HorseDetail = (data) => {
  const cookiedata = Cookies.get('i18next')
  console.log(data)
  return (
    <div className="RaceDetailCard">
      <div className="horseheader1">
        <div className="horseshirt">
          <img src={ data.data.ActiveOwnerData.image} alt="image" className="horseshirtimage"/>
        </div>
        <div className="horsecardtop">
          <p>{data.data.STARS}</p>
          <p className="horsefoal">0{data.data.Foal }</p>
        </div>
        <div className="horsecenterdata">
          <span
            style={{
              display: "flex",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                fontSize: " 19.6px",
                lineHeight: "24px",
                color: "#19469D",
              }}
            >
              {data.data.NameEn === null ? <>No Data</> : <>{data.data.NameEn }</>}
            </p>
            <p
              style={{
                fontSize: "12px",
                marginLeft:'20px'
              }}
            >
              {data.data.DOB === null ? <>No Data</> : <><Moment fromNow ago>
                                  {data.data.DOB}
                                </Moment></>} GR H (242)
               
            </p>
          </span>
          <span
            style={{
              display: "flex",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                paddingLeft:"10px"
              }}
            >
              Dam<b style={{
                paddingLeft:"5px"
              }}>{data.data.DamData === null ? <>N/A</>:<>{data.data.DamData.NameEn}</> }</b> 
            </p>
            <p
              style={{
                fontSize: "12px",
                paddingLeft:"10px"
              }}
            >
              Sire<b style={{
                paddingLeft:"5px"
              }}>{data.data.SireData === null ? <>N/A</>:<>{data.data.SireData.NameEn}</> }</b>
            </p>
            <p
              style={{
                fontSize: "12px",
              }}
            >
             G Sire <b style={{
                paddingLeft:"5px"
              }}>{data.data.GSireData === null ? <>N/A</>:<>{data.data.GSireData.NameEn}</> }</b> 
            </p>
          </span>
          <span
            style={{
              display: "flex",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "#FF0000",
              }}
            >
              <b>O </b>{cookiedata === 'en' ? data.data.ActiveOwnerData.NameEn : data.data.ActiveOwnerData.NameEn}
            </p>
            <p
              style={{
                fontSize: "9px",
                marginLeft:"5px"
              }}
            >
              (8 - 3 - 2 - 8 - 4)
            </p>
          </span>
          <div className="horsedetailimage">
            <img src={data.data.ActiveTrainerData.image} alt="" />
           <span>
           <p
            style={{
              fontSize: "12px",
              lineHeight: "10px",
              marginLeft: "10px",
            }}
          >
            <b  style={{
              padding: "10px",
              
            }}>T</b>{data.data.ActiveTrainerData.NameEn}  (8 - 3 - 2 - 8 - 4)
          </p>
          <p
            style={{
              fontSize: "12px",
              marginLeft: "10px",
            }}
          >
            <b style={{
              padding: "10px",
            }}>B</b>{data.data.BreederData === undefined ? <>N/A</>:<>{data.data.BreederData.NameEn}</>}
          </p>
           </span>
          </div>
        </div>
        <div className="horseimage">
          <img src={data.data.HorseImage} alt='' />
        </div>
      </div>
      <div className="horsebody">
        <ListGroup>
          <ListGroup.Item className="horsebodyitem">
            <p style={{
              color:'#fff',
              textAlign:'center'
            }}>National Hunt Form</p>
          </ListGroup.Item>
          <div className="horsehistorylist">
            <p style={{
              color:'#fff',
              padding:'10px'
            }}>
            00 / P8PP44 / 7P3214112 / 1211
            </p>
          </div>
          <ListGroup.Item className="horsebodyitem">
           <div className='horserecord'>
            <p>Lifetime Record</p>
            <p>Runs</p>
            <p>Wins</p>
            <p>2nd</p>
            <p>3rd</p>
            <p>Winnings</p>
            <p>Earnings</p>
            <p>OR </p>
           </div>
          </ListGroup.Item>
          <ListGroup.Item className="horsebodyitem1">
          <div className='horserecord'>
            <h6>FLAT TURF</h6>
          </div>
          </ListGroup.Item>
          <ListGroup.Item className="horsebodyitem1">
          <div className='horserecord'>
          <h6>RULES RACES</h6>
          </div>
          </ListGroup.Item>
          <ListGroup.Item className="horsebodyitem1">
          <div className='horserecord'>
          <h6>DURT</h6>
          </div>
          </ListGroup.Item>
          <ListGroup.Item className="horsebodyitem1">
          <div className='horserecord'>
          <h6>TOTAL</h6>
          </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="RaceNav HorseNav">
        <Tabs id="uncontrolled-tab-example" className="mb-3 RaceNavItem">
          <Tab eventKey="Form" title="Form" tabClassName="profile-tabitem">
            <div className="RaceDetailCard">
              <div className="BodyNew">
                <table className="customers6 horses1">
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
                      <BsFillCaretRightFill
                        style={{
                          color: "red",
                        }}
                      />
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
                      <BsFillCaretRightFill
                        style={{
                          color: "red",
                        }}
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
                      <BsFillCaretRightFill
                        style={{
                          color: "red",
                        }}
                      />
                    </th>
                  </tr>
                </table>
              </div>
            </div>
          </Tab>
          <Tab
            eventKey="Entries"
            title="Entries"
            tabClassName="profile-tabitem"
          >
            <div className="RaceDetailCard">retre</div>
          </Tab>
          <Tab eventKey="Stats" title="Stats" tabClassName="profile-tabitem">
            <div className="RaceDetailCard">retr</div>
          </Tab>
          <Tab
            eventKey="Pedigree"
            title="Pedigree"
            tabClassName="profile-tabitem"
          >
            <div className="RaceDetailCard">
              <div className="Pedigree">
              <div className="wrapper">
                <div className="one">
                  <div className="sire">1</div>
                  <div className="dam">2</div>
                </div>
                <div className="two">
                <div className="gsire">1</div>
                <div className="gdam">2</div>
                <div className="gsire">3</div>
                <div className="gdam">4</div>
                </div>
                <div className="three">
                <div  className="ggsire">1</div>
                <div  className="ggdam">2</div>
                <div  className="ggsire">3</div>
                <div  className="ggdam">4</div>
                <div  className="ggsire">5</div>
                <div  className="ggdam">6</div>
                <div  className="ggsire">7</div>
                <div  className="ggdam">8</div>
                </div>
              </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default HorseDetail;
