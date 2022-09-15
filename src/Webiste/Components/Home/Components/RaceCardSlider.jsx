import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RaceCard } from '../../../data/data'
import '../../CSS/HomeCSS/cardslider.css';
import { Link } from "react-router-dom";


const RaceCardSlider = () => {
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
          {RaceCard.map((item) => {
            return(
              <Link to='/racecard' className="LinkStyle" target='_blank'>
                <div className="singleracecard" key={item.key}>
                <p className="clubname">{item.clubname}</p>
                <p className="owner">{item.owner}</p>
                <span className="racecardrow">
                <p className="raceNo">Race {item.raceNo} -</p>
                <p className="racedistance">{item.distance}</p>
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