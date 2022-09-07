import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RaceCard } from '../../../data/data'
import '../../CSS/cardslider.css';
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
            )
          })}
          </Slider>
        </div>
      </div>
    </>
  )
}
export default RaceCardSlider