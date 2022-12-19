import notificationIcon from '../../../assets/Notification.png'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Notification = () => {
  return (
    <>
     <div className="notification">
     <OverlayTrigger overlay={<Tooltip className='TooltipTracker'>Notification</Tooltip>}>
      <span className="d-inline-block">
      <img src={notificationIcon} alt='' style={{
        cursor:'pointer'
      }}/>
      </span>
    </OverlayTrigger>
       
     </div>
    </>
  )
}
export default Notification