import "../Components/CSS/pagesCSS/horse.css";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BsFillCaretRightFill } from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import Moment from "react-moment";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { fetchPedigree, STATUSES } from "../redux/getReducer/getPedigree";
import { useDispatch, useSelector } from "react-redux";
import DefaultImg from "../assets/default.png"
import { useTranslation } from 'react-i18next';

const HorseDetail = (data) => {
  const { t } = useTranslation()
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
    width: "112px",
    height: "24px",
    background: "#FF0000",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    margin: '6px'
  };

  function authHeader() {
    // return authorization header with basic auth credentials

    if (token) {
      return { Authorization: `Bearer ${token}` };
    } else {
      return (
        console.log('data')
      )
    }
  }

  const handleTrack = async (Id) => {
    try {
      const res = await axios.post(
        `/trackhorse`, { Horse: Id }, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' },
      }
      );
      toast('Tracked Success')

    } catch (error) {
      console.log(error, 'error');
    }
    navigate('/tracker')
  };

  const id = data.data._id

  const { data: Pedigree, status } = useSelector((state) => state.Pedigree);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPedigree({ id }));
  }, []);

  return (
    <div className="RaceDetailCard">
      <div className="horseheader1">
        <div className="horseshirt">
          <img src={!data.data.ActiveOwnerData ? DefaultImg : data.data.ActiveOwnerData.image} alt="" className="horseshirtimage" />
        </div>
        <div className="horsecardtop">
          <p>{data.data.STARS}</p>
          <p className="horsefoal">0{data.data.Foal}</p>
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
                margin: "0px 10px",
              }}
            >


              {cookiedata === 'en' ? (data.data === null ? <></> : data.data.NameEn) : (data.data === null ? <></> : data.data.NameAr)}
            </p>
            <img src={data.data.NationalityData.image ? data.data.NationalityData.image : DefaultImg} alt="" style={{ height: "18px", margin: "0px 10px" }} />
            <p
              style={{
                fontSize: "12px",
                marginLeft: '20px'
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
                paddingLeft: "10px"
              }}
            >
              Dam
              <b style={{
                paddingLeft: "5px"
              }}>{cookiedata === 'en' ? (data.data.DamData ? data.data.DamData.NameEn : "N/A") : (data.data.DamData ? data.data.DamData.NameAr : "N/A")}
              </b>



            </p>
            <p
              style={{
                fontSize: "12px",
                paddingLeft: "10px"
              }}
            >
              {t("Sire")}<b style={{
                paddingLeft: "5px"
              }}>      {cookiedata === 'en' ? (data.data.SireData ? data.data.SireData.NameEn : "N/A") : (data.data.SireData ? data.data.SireData.NameAr : "N/A")}
              </b>


            </p>
            <p
              style={{
                fontSize: "12px",
              }}
            >
              {t("G Sire")} <b style={{
                paddingLeft: "5px"
              }}>  {cookiedata === 'en' ? (data.data.GSireData ? data.data.GSireData.NameEn : "N/A") : (data.data.GSireData ? data.data.GSireData.NameAr : "N/A")}</b>
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
              <b>O </b>{cookiedata === 'en' ? (data.data.ActiveOwnerData === null ? <></> : data.data.ActiveOwnerData.NameEn) : (data.data.ActiveOwnerData === null ? <></> : data.data.ActiveOwnerData.NameAr)}
            </p>
            <p
              style={{
                fontSize: "9px",
                marginLeft: "5px"
              }}
            >
              (8 - 3 - 2 - 8 - 4)
            </p>
          </span>
          <div className="horsedetailimage">
            <img src={data.data.ActiveTrainerData.image ? data.data.ActiveTrainerData.image : DefaultImg} alt="" />
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

                }}>T</b>{cookiedata === "en" ? (data.data.ActiveTrainerData === null ? <></> : data.data.ActiveTrainerData.NameEn) : (data.data.ActiveTrainerData === null ? <></> : data.data.ActiveTrainerData.NameAr)}  (8 - 3 - 2 - 8 - 4)
              </p>
              <p
                style={{
                  fontSize: "12px",
                  marginLeft: "10px",
                }}
              >
                <b style={{
                  padding: "10px",
                }}>B</b>{cookiedata === "en" ? (data.data.BreederData === null ? <></> : data.data.BreederData.NameEn) : (data.data.BreederData === null ? <></> : data.data.BreederData.NameAr)}


              </p>
            </span>
          </div>
        </div>
        <div className="horseimage">
          <img src={data.data.HorseImage ? data.data.HorseImage : DefaultImg} alt='' />
          <button
            style={btnNew1}
            onClick={() => handleTrack(data.data._id)}
          >
            {t("Track Horse")}
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
          <Tab
            eventKey="Pedigree"
            title="Pedigree"
            tabClassName="profile-tabitem"
          >
            <div className="RaceDetailCard">
              <div className="Pedigree">
                {Pedigree.length === 0 ? (
                  <h3>Loading ...</h3>
                ) : (
                  <div className="wrapper">
                    <div className="one">
                      <div className="sire pedigreeclass">
                        {Pedigree.generation1 === null ? (
                          <>N/A</>
                        ) : Pedigree.generation1.SireData === null ? (
                          <>N/A</>
                        ) : (
                          Pedigree.generation1.SireData.NameEn
                        )}
                      </div>
                      <div className="dam pedigreeclass">
                        {Pedigree.generation1 === null ? (
                          <>N/A</>
                        ) : Pedigree.generation1.DamData === null ? (
                          <>N/A</>
                        ) : (
                          Pedigree.generation1.DamData.NameEn
                        )}
                      </div>
                    </div>
                    <div className="two">
                      <div className="gsire pedigreeclass">
                        {Pedigree.generation2b === null ? (
                          <>N/A</>
                        ) : Pedigree.generation2b.SireData === null ? (
                          <>N/A</>
                        ) : (
                          Pedigree.generation2b.SireData.NameEn
                        )}
                      </div>
                      <div className="gdam pedigreeclass">
                        {Pedigree.generation2b === null ? (
                          <>N/A</>
                        ) : Pedigree.generation2b.DamData === null ? (
                          <>N/A</>
                        ) : (
                          Pedigree.generation2b.DamData.NameEn
                        )}
                      </div>
                      <div className="gsire pedigreeclass">
                        {Pedigree.generation2a === null ? (
                          <>N/A</>
                        ) : Pedigree.generation2a.SireData === null ? (
                          <>N/A</>
                        ) : (
                          Pedigree.generation2a.SireData.NameEn
                        )}
                      </div>
                      <div className="gdam pedigreeclass">
                        {Pedigree.generation2a === null ? (
                          <>N/A</>
                        ) : Pedigree.generation2a.DamData === null ? (
                          <>N/A</>
                        ) : (
                          Pedigree.generation2a.DamData.NameEn
                        )}
                      </div>
                    </div>
                    <div className="three">
                      <div className="ggsire pedigreeclass">
                        {Pedigree.generation3d === null ? (
                          <>N/A</>
                        ) : Pedigree.generation3d.SireData === null ? (
                          <>N/A</>
                        ) : (
                          Pedigree.generation3d.SireData.NameEn
                        )}
                      </div>
                      <div className="ggdam pedigreeclass">
                        {Pedigree.generation3d === null ? (
                          <>N/A</>
                        ) : Pedigree.generation3d.DamData === null ? (
                          <>N/A</>
                        ) : (
                          Pedigree.generation3d.DamData.NameEn
                        )}
                      </div>
                      <div className="ggsire pedigreeclass">
                        {Pedigree.generation3c === null ? (
                          <>N/A</>
                        ) : Pedigree.generation3c.SireData === null ? (
                          <>N/A</>
                        ) : (
                          Pedigree.generation3c.SireData.NameEn
                        )}
                      </div>
                      <div className="ggdam pedigreeclass">
                        {Pedigree.generation3c === null ? (
                          <>N/A</>
                        ) : Pedigree.generation3c.DamData === null ? (
                          <>N/A</>
                        ) : (
                          Pedigree.generation3c.DamData.NameEn
                        )}
                      </div>
                      <div className="ggsire pedigreeclass">
                        {Pedigree.generation3b === null ? (
                          <>N/A</>
                        ) : Pedigree.generation3b.SireData === null ? (
                          <>N/A</>
                        ) : Pedigree.generation3b.SireData === null ? (
                          <>N/A</>
                        ) : (
                          Pedigree.generation3b.SireData.NameEn
                        )}
                      </div>
                      <div className="ggdam pedigreeclass">
                        {Pedigree.generation3b === null ? (
                          <>N/A</>
                        ) : Pedigree.generation3a.DamData === null ? (
                          <>N/A</>
                        ) : (
                          Pedigree.generation3b.DamData.NameEn === null ? <>N/A</> : Pedigree.generation3b.DamData.NameEn
                        )}
                      </div>
                      <div className="ggsire pedigreeclass">
                        {Pedigree.generation3a === null ? (
                          <>N/A</>
                        ) : Pedigree.generation3a.SireData === null ? (
                          <>N/A</>
                        ) : (
                          Pedigree.generation3a.SireData.NameEn
                        )}
                      </div>
                      <div className="ggdam pedigreeclass">
                        {Pedigree.generation3a === null ? (
                          <>N/A</>
                        ) : Pedigree.generation3a.DamData === null ? (
                          <>N/A</>
                        ) : (
                          Pedigree.generation3a.DamData.NameEn
                        )}
                      </div>

                    </div>
                  </div>
                )}
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default HorseDetail;