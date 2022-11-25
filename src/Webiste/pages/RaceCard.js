import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRace, STATUSES } from "../../Webiste/redux/getReducer/getRaceCard";
import "../Components/CSS/RaceCardCSS/racecard.css";
// import { RaceCardData } from "../data/data";
import {Link} from "react-router-dom";
import Layout from '../Components/Reuseable/layout';
import Footer from '../Components/Reuseable/Footer';
import CopyRight from '../Components/Reuseable/Copyrights';
import '../Components/CSS/pagesCSS/RaceCourse.css'

const RaceCard = () => {
  
  const dispatch = useDispatch();
  const { data: racecard, status } = useSelector((state) => state.racecard);
 
  useEffect(() => {
    dispatch(fetchRace());
  },[])
  if (status === STATUSES.LOADING) {
    return (
      <h2
      className="loader"
      >
  
      </h2>
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

  console.log('racecard',racecard.length)
  return (
    <>
    <Layout />
    {
      racecard.length === 0 ? (
        <>
       <h1>No Data</h1>
        </>
      ): (
        <>
        <h2> <div className="RaceCard">
        {racecard.slice(0,1).map((item) => {
          const {RaceStatus} = item;
          return (
            <React.Fragment key={item.id}>
              <div className="racepagehead">
                <div className="racepageheadflex">
                  <div className="racepagename">
                    <span>
                      Hello
                      {/* {item.raceName} */}
                      </span>
                    <p>{item.DayNTime}</p>
                  </div>
                  <div className="raceStatus">
                  <span className="raceStatusitem"
                        style={{"backgroundColor": '#5EC30F' }}
                     >
                          live
                        </span>
                        <span className="raceStatusitem"
                        style={{"backgroundColor": '#FF9900' }}
                     >
                          due
                        </span>
                        <span className="raceStatusitem"
                        style={{"backgroundColor": '#FF0000' }}
                     >
                          end
                        </span>
                        <span className="raceStatusitem"
                        style={{"backgroundColor": '#000' }}
                     >
                          can
                        </span>
                  </div>
                </div>
              </div>
              <Link to={`/racedetail/${item._id}`} className="LinkStyle">
              <div className="racepagesection">
              <div className="racepageitem"
                    
                    key={item.id}>
                      <div>
                        <span
                          style={{
                            fontWeight: "300",
                            fontSize: "20px",
                            lineHeight: "24px",
                          }}
                        >
                          Race {item.raceNo}
                        </span>
                        <span>Conditions Race</span>
                        <br />
                        <span
                          style={{
                            fontWeight: "300",
                            fontSize: "12px",
                            lineHeight: "15px",
                          }}
                        >
                          {item.owner}
                        </span>
                        <span
                          style={{
                            fontWeight: "300",
                            fontSize: "12px",
                            lineHeight: "15px",
                            color: " rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          {item.runner}
                        </span>
                        <br />
                        <div className="racedown">
                          <p>Distance : {item.RaceCourseData === null ? <></> : <>{item.RaceCourseData.TrackLength}</>}</p>
                          <p>Flat : {item.flat}</p>
                          <p>Surface : {item.Weather}</p>
                          <p>Going : {item.RaceStatus}</p>
                        </div>
                      </div>
                      <div className="racestatusright">
                        <span className="racestatusclass" 
                        style={{"backgroundColor": `${item === "Upcoming" ? '#FF9900': item === "cancel" ? '#FF0000' : item === "live" ? '#5EC30F': '#000'}`, fontSize:'12px'}}
                        >{item.DayNTime}</span>
                        <div>
                          <p style={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '9px',
                            lineHeight: '11px',
                            color: 'rgba(0, 0, 0, 0.5)'
                          }}>Favourite</p>
                          <p style={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '12px',
                            lineHeight: '11px',
                            color: '#000'
                          }}>{item.Favourite}</p>
                        </div>
                        <div>
                          <p style={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '9px',
                            lineHeight: '11px',
                            color: 'rgba(0, 0, 0, 0.5)'
                          }}>Non-Runner</p>
                          <p
                          style={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '12px',
                            lineHeight: '11px',
                            color: '#000'
                          }}>{item.runner}</p>
                        </div>
                      </div>
                    </div>
              </div>
              </Link>
              <Link to={`/racedetail/${item._id}`} className="LinkStyle" >
              <div className="racepagesection" style={{
                marginTop:'1px'
              }}>
              <div className="racepageitem"
                    
                    key={item.id}>
                      <div>
                        <span
                          style={{
                            fontWeight: "300",
                            fontSize: "20px",
                            lineHeight: "24px",
                          }}
                        >
                          Race {item.raceNo}
                        </span>
                        <span>Conditions Race</span>
                        <br />
                        <span
                          style={{
                            fontWeight: "300",
                            fontSize: "12px",
                            lineHeight: "15px",
                          }}
                        >
                          {item.owner}
                        </span>
                        <span
                          style={{
                            fontWeight: "300",
                            fontSize: "12px",
                            lineHeight: "15px",
                            color: " rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          {item.runner}
                        </span>
                        <br />
                        <div className="racedown">
                          <p>Distance : {item.RaceCourseData === null ? <></> : <>{item.RaceCourseData.TrackLength}</>}</p>
                          <p>Flat : {item.flat}</p>
                          <p>Surface : {item.Weather}</p>
                          <p>Going : {item.RaceStatus}</p>
                        </div>
                      </div>
                      <div className="racestatusright">
                        <span className="racestatusclass" 
                        style={{"backgroundColor": `${item === "Upcoming" ? '#FF9900': item === "cancel" ? '#FF0000' : item === "live" ? '#5EC30F': '#000'}`, fontSize:'12px'}}
                        >{item.DayNTime}</span>
                        <div>
                          <p style={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '9px',
                            lineHeight: '11px',
                            color: 'rgba(0, 0, 0, 0.5)'
                          }}>Favourite</p>
                          <p style={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '12px',
                            lineHeight: '11px',
                            color: '#000'
                          }}>{item.Favourite}</p>
                        </div>
                        <div>
                          <p style={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '9px',
                            lineHeight: '11px',
                            color: 'rgba(0, 0, 0, 0.5)'
                          }}>Non-Runner</p>
                          <p
                          style={{
                            fontStyle: 'normal',
                            fontWeight: '300',
                            fontSize: '12px',
                            lineHeight: '11px',
                            color: '#000'
                          }}>{item.runner}</p>
                        </div>
                      </div>
                    </div>
              </div>
              </Link>
            </React.Fragment>
          );
        })}
      </div></h2></>
      )
    }
      
      <Footer />
      <CopyRight />
    </>
  );
};
export default RaceCard;
