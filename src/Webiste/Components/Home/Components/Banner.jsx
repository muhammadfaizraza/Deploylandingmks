import Frame from '../../../assets/Frame.png'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate();
  return (
    <>
     <div className="bannerHome">
       <div className='bannerCard'>
        <img src={Frame} alt="" />
        <div className='bannerText'>
          <h1 className='bannerText1'>Predict & Win</h1>
          <h1 className='bannerText2'>Exclusive Prizes</h1>
          <button className='registerbtn' onClick={() => navigate('/login')}>Register Now</button>
        </div>
       </div>
     </div>
    </>
  )
}
export default Banner