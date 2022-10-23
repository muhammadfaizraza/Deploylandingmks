import Carousel from 'react-bootstrap/Carousel';
import React,{useEffect} from 'react';
import '../../CSS/HomeCSS/blogs.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSlider, STATUSES } from "../../../redux/getReducer/getSlider";
import ReactImageAppear from 'react-image-appear';
import img from '../../../assets/Rectangle 20.png'

const Slider = () => {
  
  const dispatch = useDispatch();
  const { data: slider, status } = useSelector((state) => state.slider);

  useEffect(() => {
    dispatch(fetchSlider());
  },[])
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
      <div className="slider">
      <Carousel>
      <Carousel.Item interval={1000}>
              <ReactImageAppear 
                className="d-block w-100 slideimg1"
                src={img}
                alt="First slide"
                animation="zoomIn"
                animationDuration="1s"
                indicators={false}
              />
            </Carousel.Item>
            
      </Carousel>
      {/* <Carousel>
        {
          slider.map((item) => {
            return(
              <Carousel.Item interval={1000}>
              <ReactImageAppear 
                className="d-block w-100 slideimg1"
                src={item.image}
                alt="First slide"
                animation="zoomIn"
                animationDuration="1s"
              />
            </Carousel.Item>
            )
          })
        }
      </Carousel> */}
      </div>
    </>
  )
}
export default Slider