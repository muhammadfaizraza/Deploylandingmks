import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../CSS/HomeCSS/cardslider.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../CSS/HomeCSS/blogs.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRace, STATUSES } from "../../../redux/getReducer/getRaceCard";
import Cookies from "js-cookie";

import { useTranslation } from "react-i18next";

const RaceCardSlider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: racecard, status } = useSelector((state) => state.racecard);

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchRace());
  }, [dispatch]);

  const [userIsDesktop, setUserIsDesktop] = useState(true);

  useEffect(() => {
    window.innerWidth > 440 ? setUserIsDesktop(true) : setUserIsDesktop(false);
  }, [userIsDesktop]);

  function HandleJockey(id) {
    if (userIsDesktop === true) {
      navigate("/racedetail", {
        state: {
          id: id,
        },
      });
    } else {
      navigate("/racedetails", {
        state: {
          id: id,
        },
      });
    }
  }
  if (status === STATUSES.LOADING) {
    return (
      <div>
        {/* <Lottie animationData={Animate} loop={true}  className='Lottie slideLottie'/> */}
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
          infinite: false,
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
          slidesToShow: 3,
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
  const cookiedata = Cookies.get("i18next");

  return (
    <>
      <div className="RaceCardSlider">
        <div className="slidercards">
          {racecard.length > 0 ? (
            <Slider {...settings}>
              {racecard.map((item) => {
                return (
                  <div
                    className="singleracecard"
                    key={item.key}
                    onClick={() => HandleJockey(item._id)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <p className="clubname">
                      {cookiedata === "en" ? (
                        item.RaceCourseData === null ? (
                          <>N/A</>
                        ) : (
                          item.RaceCourseData.TrackNameEn
                        )
                      ) : item.RaceCourseData === null ? (
                        <>N/A</>
                      ) : (
                        item.RaceCourseData.TrackNameAr
                      )}
                    </p>
                    <p className="owner">
                      {cookiedata === "en" ? (
                        item.RaceNameModelData === null ? (
                          <>N/A</>
                        ) : (
                          item.RaceNameModelData.NameEn
                        )
                      ) : item.RaceNameModelData === null ? (
                        <>N/A</>
                      ) : (
                        item.RaceNameModelData.NameAr
                      )}
                    </p>
                    <span className="racecardrow">
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <p className="raceNo">
                          {" "}
                          {t("Race")} {item.RaceNumber} -{" "}
                        </p>
                        <p className="racedistance">
                          {item.TrackLengthData === null ? (
                            <>No Data</>
                          ) : (
                            item.TrackLengthData.TrackLength
                          )}
                          m
                        </p>
                      </div>
                      <p className="racetime">
                        {/* <Moment
                          date={item.StartTime}
                          format="hh:mm"
                          trim
                          durationFromNow
                        ></Moment> */}
                        {item.StartTime.slice(11, 16)}m
                      </p>{" "}
                    </span>
                    <span className="singleracecardbtn">
                      <button>{t("From")}</button>
                    </span>
                  </div>
                );
              })}
            </Slider>
          ) : (
            <p>No Race Available</p>
          )}
        </div>
      </div>
    </>
  );
};
export default RaceCardSlider;
