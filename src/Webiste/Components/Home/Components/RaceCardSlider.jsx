import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RaceCard } from "../../../data/data";
import "../../CSS/HomeCSS/cardslider.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../CSS/HomeCSS/blogs.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRace, STATUSES } from "../../../redux/getReducer/getRaceCard";
import Cookies from "js-cookie";
import Moment from "react-moment"
import Animate from "../../../assets/loader.json"
import Lottie from 'react-lottie';


const RaceCardSlider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const { data: racecard, status } = useSelector((state) => state.racecard);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // const timerace = racecard.map((item) => item.DayNTime);
  const timerace = 11
  const deadline = timerace;
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    dispatch(fetchRace());
  }, [dispatch]);



 

  function HandleJockey(id){
      navigate("/racedetail", {
      state: {
        id: id
      },
    });
  }
  if (status === STATUSES.LOADING) {
    return (
      <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
      </div>
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
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 471,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="RaceCardSlider">
        <div className="slidercards">
          {
            racecard === undefined ? <h2 className="loader">

            </h2> :  <Slider {...settings}>
            {racecard.map((item) => {
              return (
         
                 <div className="singleracecard" key={item.key}     onClick={() => HandleJockey(item._id)}  style={{
                  cursor:'pointer'
                }}>
              
                    <p className="clubname">
                      {item.RaceCourseData === null ? (
                        <>No Data</>
                      ) : (
                        item.RaceCourseData.TrackNameEn
                      )}
                    </p>
                    <p className="owner">
                    {item.RaceNameModelData.NameEn}
                    </p>
                    <span className="racecardrow">
                      <div style = {{
                        display:'flex'
                      }}>
                      <p className="raceNo"> Race 4 -</p>
                      <p className="racedistance">
                        {item.RaceCourseData === null ? (
                          <>No Data</>
                        ) : (
                          item.RaceCourseData.TrackLength
                        )} m
                      </p>
                      </div>
                      <p className="racetime"> <Moment add={{ hours: 12 }} format="hh:mm:ss">{item.DayNTime}</Moment> m</p>
                    </span>
                    <span className="singleracecardbtn">
                      <button>From</button>
                    </span>
                  </div>
          
              );
            })}
          </Slider>
          }
          
        </div>
      </div>
    </>
  );
};
export default RaceCardSlider;
