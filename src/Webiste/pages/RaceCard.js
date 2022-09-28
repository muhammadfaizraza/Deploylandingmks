import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRace, STATUSES } from "../../Webiste/redux/getReducer/getRaceCard";
import "../Components/CSS/RaceCardCSS/racecard.css";
// import { RaceCardData } from "../data/data";
import {useParams ,Link} from "react-router-dom";
import Layout from '../Components/Reuseable/layout';
import Footer from '../Components/Reuseable/Footer';
import CopyRight from '../Components/Reuseable/Copyrights';

const RaceCard = () => {
  
  const dispatch = useDispatch();
  const { data: racecard, status } = useSelector((state) => state.racecard);
  const {_id} = useParams();
 
  useEffect(() => {
    dispatch(fetchRace());
  },[])

  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Loading....
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
  return (
    <>
    <Layout />
      <div className="RaceCard">
        {racecard.map((item) => {
          const {RaceStatus} = item;
          return (
            <React.Fragment key={item.id}>
              <div className="racepagehead">
                <div className="racepageheadflex">
                  <div className="racepagename">
                    <span>{item.raceName}</span>
                    <p>{item.DayNTime}</p>
                  </div>
                  <div className="raceStatus">
                  <span className="raceStatusitem"
                        style={{"backgroundColor": `${RaceStatus === "due" ? '#FF9900': RaceStatus === "can" ? '#FF0000' : RaceStatus === "live" ? '#5EC30F': '#000'}`}}
                         key={item.id}>
                          {item.RaceStatus}
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
                          <p>Distance : {item.distance}</p>
                          <p>Flat : {item.flat}</p>
                          <p>Surface : {item.surface}</p>
                          <p>Going : {item.going}</p>
                        </div>
                      </div>
                      <div className="racestatusright">
                        <span className="racestatusclass" 
                        style={{"backgroundColor": `${item === "due" ? '#FF9900': item === "cancel" ? '#FF0000' : item === "live" ? '#5EC30F': '#000'}`}}
                        >{item.time}</span>
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
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default RaceCard;
