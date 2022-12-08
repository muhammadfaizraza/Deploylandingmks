import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourse,
  STATUSES,
} from "../../Webiste/redux/getReducer/getRaceCourse";
import "../Components/CSS/RaceCardCSS/racecard.css";
import { Link } from "react-router-dom";
import Layout from "../Components/Reuseable/layout";
import Footer from "../Components/Reuseable/Footer";
import CopyRight from "../Components/Reuseable/Copyrights";

const RaceCourse = () => {
  const dispatch = useDispatch();
  const { data: racecourse, status } = useSelector((state) => state.racecourse);

  useEffect(() => {
    dispatch(fetchCourse());
  }, []);

  console.log(racecourse,'racecourse')
  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
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
  return (
    <>
      <Layout />
      {
      racecourse.length === 0 ? (
        <>
       <h1>No Data</h1>
        </>
      ): (
        <>
        <h2> <div className="RaceCard">
        {racecourse.map((item ,ind) => {
          const {RaceStatus} = item;
          return (
            <React.Fragment key={item.id}>
              <div className="racepagehead">
                <div className="racepageheadflex">
                  <div className="racepagename">
                    <span>
                   {item.TrackNameEn}
                      {/* {item.raceName} */} 
                      </span>
                      <p>{item.NationalityDataRaceCourse.NameEn}</p>
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
              {
                item.RaceCourseData === undefined ? <><h1> There is No race in this racecouse </h1> </>:
                item.RaceCourseData.map((data ,ind)=>(
                


             
              <Link to="/"  className="LinkStyle">
           

              <div className="racepagesection">
              <div className="racepageitem"
                    
                    key={data._id}>
                    <div> 
                      <div className="RaceDetailsName">
                        <span
                          style={{
                            fontWeight: "300",
                            fontSize: "20px",
                            lineHeight: "24px",
                          }}
                        >
                          <h5>
                          Race {ind + 1}
                          </h5>
                        </span>
                        <h6>{data.RaceNameModelData.NameEn}</h6>
                        <br />
                        </div>
                        <div className="RaceDesc">
                          <p  style={{
                                  maxWidth: "400px",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}>{data.DescriptionEn}</p>
                        </div>
                       
                        <div className="racedown">
                          {/* <p>Distance : {item.RaceCourseData === null ? <></> : <>{item.RaceCourseData.TrackLength}</>}</p> */}
                          

                        
                          <p>Distance : {data.TrackLengthData.TrackLength}</p>
                          <p> {data.RaceTypeModelData.NameEn} </p>
                          <p>Surface : {data.GroundData.NameEn}</p>
                          <p>Going : {data.RaceKindData.NameEn}</p>
                       
                        
                        
</div>                       </div> 
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
                       
                       
                      
                      <div className="racestatusright">
                        <span className="racestatusclass" 
                           style={{
                            backgroundColor: `${
                             data.RaceStatus === "Cancel"
                                ? "#000000"
                                : RaceStatus === "End"
                                ? "#FF0000"
                                : RaceStatus === "Live"
                                ? "#5EC30F"
                                : "#FF9900"
                            }`,
                            color: `${
                              RaceStatus === "Cancel"
                                ? "#ffff"
                                : RaceStatus === "End"
                                ? "#00000"
                                : RaceStatus === "Live"
                                ? "#00000"
                                : "#000000"
                            }`,
                          }}
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
))}          
  
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
export default RaceCourse;
