import React from "react";
import "../Components/CSS/RaceCardCSS/racecard.css";
import { RaceCardData } from "../data/data";
import { Link } from "react-router-dom";

const RaceCard = () => {
  
  return (
    <>
      <div className="RaceCard">
        {RaceCardData.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div className="racepagehead">
                <div className="racepageheadflex">
                  <div className="racepagename">
                    <span>{item.racename}</span>
                    <p>{item.time}</p>
                  </div>
                  <div className="raceStatus">
                    {item.raceStatus.map((data) => {
                      const { status} = data;
                      return (
                        <span className="raceStatusitem"
                        style={{"backgroundColor": `${status === "due" ? '#FF9900': status === "can" ? '#FF0000' : status === "live" ? '#5EC30F': '#000'}`}}
                         key={data.id}>
                          {data.status}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <Link to={`/racedetail/${item.id}`} target='_blank' className="LinkStyle">
              <div className="racepagesection">
                {item.races.map((race) => {
                  const { status} = race;
                  return (
                    <div className="racepageitem"
                    
                    key={race.id}>
                      <div>
                        <span
                          style={{
                            fontWeight: "300",
                            fontSize: "20px",
                            lineHeight: "24px",
                          }}
                        >
                          Race {race.raceNo}
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
                          {race.owner}
                        </span>
                        <span
                          style={{
                            fontWeight: "300",
                            fontSize: "12px",
                            lineHeight: "15px",
                            color: " rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          {race.runner}
                        </span>
                        <br />
                        <div className="racedown">
                          <p>Distance : {race.distance}</p>
                          <p>Flat : {race.flat}</p>
                          <p>Surface : {race.surface}</p>
                          <p>Going : {race.going}</p>
                        </div>
                      </div>
                      <div className="racestatusright">
                        <span className="racestatusclass" 
                        style={{"backgroundColor": `${status === "due" ? '#FF9900': status === "cancel" ? '#FF0000' : status === "live" ? '#5EC30F': '#000'}`}}
                        >{race.time}</span>
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
                          }}>{race.Favourite}</p>
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
                          }}>{race.runner}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};
export default RaceCard;
