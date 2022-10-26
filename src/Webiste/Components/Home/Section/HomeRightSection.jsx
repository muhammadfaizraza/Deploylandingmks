import Competition from '../Components/Competition';
import LeaderBoard from '../Components/LeaderBoard';
const HomeRightSection = () => {
  return (
    <div>
      <div className="HomeRightSection">
        <Competition />
      </div>
      <div className='HomeRightLeaderBoader'>
      <LeaderBoard/>
      </div>
    </div>
  )
}
export default HomeRightSection