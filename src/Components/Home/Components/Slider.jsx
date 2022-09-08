import img from '../../../Rectangle 20.png'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <>
      <div className="slider">
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 slideimg1"
          src={img}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 slideimg1"
          src={img}
          alt="First slide"
        />
      </Carousel.Item>
      </Carousel>
      </div>
    </>
  )
}
export default Slider