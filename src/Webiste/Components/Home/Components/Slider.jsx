import Carousel from "react-bootstrap/Carousel";
import React, { useEffect } from "react";
import "../../CSS/HomeCSS/blogs.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSlider, STATUSES } from "../../../redux/getReducer/getSlider";
import ReactImageAppear from "react-image-appear";

const Slider = () => {
  const dispatch = useDispatch();
  const { data: slider, status } = useSelector((state) => state.slider);

  useEffect(() => {
    dispatch(fetchSlider());
  }, [dispatch]);
  if (status === STATUSES.LOADING) {
    return <></>;
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
          {slider.map((item) => {
            return (
              <Carousel.Item interval={2000}>
                <a href={item.Url} target="_">
                  <ReactImageAppear
                    className="d-block  slideimg1"
                    src={item.image}
                    alt="First slide"
                    animation="zoomIn"
                    animationDuration="1s"
                  />
                </a>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
export default Slider;
