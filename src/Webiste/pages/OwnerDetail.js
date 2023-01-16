import shirt from "../assets/image 5.png";
import profile from "../assets/Ellipse 7.png";
import flag from "../assets/France.png";

import "../Components/CSS/pagesCSS/horse.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BsFillCaretRightFill } from 'react-icons/bs';
import '../Components/CSS/pagesCSS/owner.css'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Moment from "react-moment";
import Defaultimg from "../assets/Frame.png"

const OwnerDetail = (data) => {
  const cookiedata = Cookies.get('i18next');
  const token = Cookies.get("token");


  const navigate = useNavigate();
  const btnNew1 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "13px 10px",
    gap: "10px",


    background: "#FF0000",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    margin: '6px'
  };

  const handleTrack = async (Id) => {
    try {
      const res = await axios.post(
        `/trackowner`, { Owner: Id }, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' },
      }
      );
      toast('Tracked Success')

      console.log(res, 'data')
    } catch (error) {
      console.log(error, 'error');
    }
    navigate('/tracker')
  };
  return (
    <>
      <div className="aboutpage">
        <div className="RaceDetailCard">
          <div className="horseheader1">
            <div className="horseshirt">
              <img src={data.data.image ? data.data.image : Defaultimg} alt="" className="horseshirtimage" style={{
                height: '90px'
              }} />

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
                  {data.data.NameEn === null ? <>No Data</> : <>{data.data.NameEn}</>}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    marginLeft: '20px'
                  }}
                >
                  {data.data.DOB === null ? <>No Data</> : <><Moment fromNow ago>
                    {data.data.DOB}
                  </Moment></>}

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
                    paddingLeft: "10px"
                  }}
                > Title
                  <b style={{
                    paddingLeft: "5px"
                  }}> {data.data.TitleEn === null ? <>N/A</> : <>{data.data.TitleEn}</>}</b>
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    paddingLeft: "6px"
                  }}
                >Regd
                  <b style={{
                    paddingLeft: "5px"
                  }}> {data.data.RegistrationDate === null ? <>No Data</> : <><Moment fromNow ago>
                    {data.data.RegistrationDate}
                  </Moment></>}</b>
                </p>
                <p
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <b style={{
                    paddingLeft: "5px"
                  }}>{data.data.JockeyAllowance === null ? <>N/A</> : <>{data.data.JockeyAllowance}</>}</b>
                </p>
              </span>
              <div className="horsedetailimage">
                {
                  data.data.OwnerDataNationalityData ? <>
                    <img src={data.data.OwnerDataNationalityData.image} alt="" />

                  </> : <>N/A</>
                }
                <span>
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <b style={{
                      padding: "10px",

                    }}>Nationality</b>{data.data.OwnerDataNationalityData ? data.data.OwnerDataNationalityData.NameEn : <></>}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      marginLeft: "10px",
                    }}
                  >
                    <b style={{
                      padding: "10px",
                    }}>Short Name </b>{data.data.ShortEn}
                  </p>
                </span>

              </div>
            </div>
            {/* <div className="horseimage">
        <img src={data.data.HorseImage} alt='' />
      </div> */}
            <div className="ownerTrack">

              <button
                style={btnNew1}
                onClick={() => handleTrack(data.data._id)}
              >
                Track Owner
              </button>
            </div>
          </div>
          <div className="horsebody">
            <ListGroup>
              <ListGroup.Item className="horsebodyitem">
                <p style={{
                  color: '#fff',
                  textAlign: 'center'
                }}>National Hunt Form</p>
              </ListGroup.Item>
              <div className="horsehistorylist">
                <p style={{
                  color: '#fff',
                  padding: '10px'
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

            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
export default OwnerDetail;
