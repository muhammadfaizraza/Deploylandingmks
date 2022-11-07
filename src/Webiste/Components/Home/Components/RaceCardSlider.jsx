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

const RaceCardSlider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: racecard, status } = useSelector((state) => state.racecard);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const timerace = racecard.map((item) => item.DayNTime);
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
  }, []);
  const HandleJockey = (Id) => {
    Cookies.set('sjockey',Id)
    navigate('/racedetail')
  };
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
          <Slider {...settings}>
            {racecard.map((item) => {
              return (
               <Link to={`/racedetail/${item._id}`} className='LinkStyle'>
                 <div className="singleracecard" key={item.key}  onClick={() => HandleJockey(item._id)} style={{
                  cursor:'pointer'
                }}>
                    <p className="clubname">
                      {item.RaceCourseData === null ? (
                        <>No Data</>
                      ) : (
                        item.RaceCourseData.TrackName
                      )}
                    </p>
                    <p className="owner">
                    {item.raceName}
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
                      <p className="racetime">{item.DayNTime} m</p>
                    </span>
                    <span className="singleracecardbtn">
                      <button>From</button>
                    </span>
                  </div>
               </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default RaceCardSlider;
