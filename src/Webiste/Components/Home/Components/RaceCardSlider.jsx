import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RaceCard } from '../../../data/data'
import '../../CSS/HomeCSS/cardslider.css';
import { Link } from "react-router-dom";
import React,{useEffect} from 'react';
import '../../CSS/HomeCSS/blogs.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRace, STATUSES } from "../../../redux/getReducer/getRaceCard";


const RaceCardSlider = () => {

  const dispatch = useDispatch();
  const { data: racecard, status } = useSelector((state) => state.racecard);

  
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
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="RaceCardSlider">
        <div className="slidercards">
          <Slider {...settings}>
           {racecard.map((item) => {
            return(
              <Link to={`/racedetail/${item._id}`} className="LinkStyle">
                <div className="singleracecard" key={item.key}>
                <p className="clubname">{item.RaceCourse === null ? <></> : item.RaceCourse.TrackName}</p>
                <p className="owner">{item.RaceCourse === null ? <></> : item.RaceCourse.Country}</p>
                <span className="racecardrow">
                <p className="raceNo"> {item.raceName} -</p>
                <p className="racedistance">{item.RaceCourse === null ? <></> : item.RaceCourse.TrackLength}</p>
                <p className="racetime">{item.time}</p>
                </span>
               <span className="singleracecardbtn">
                <button>From</button>
               </span>
              </div>
              </Link>
            )
          })}
          </Slider>
        </div>
      </div>
    </>
  )
}
export default RaceCardSlider