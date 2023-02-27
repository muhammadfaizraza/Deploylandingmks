import TrackerIcon from '../../../assets/tracker.png'
import {  useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Tracker = () => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <>
    {
      userInfo === null ? <></>: <div className="tracker">
      <Link to='/tracker'>
      <OverlayTrigger overlay={<Tooltip className='TooltipTracker'>Tracker</Tooltip>}>
      <span className="d-inline-block">
      <img src={TrackerIcon} alt='' />
      </span>
    </OverlayTrigger>
     
      </Link>
     
    </div> 
    }
      
    </>
  )
}
export default Tracker