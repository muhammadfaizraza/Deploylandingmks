import TrackerIcon from '../../../assets/tracker.png'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';


const Tracker = () => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <>
    {
      userInfo === null ? <></>: <div className="tracker">
      <Link to='/tracker'>
      <img src={TrackerIcon} alt='' />
      </Link>
     
    </div> 
    }
      
    </>
  )
}
export default Tracker