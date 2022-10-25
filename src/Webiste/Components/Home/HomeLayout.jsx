import ExNews from "./Components/ExNews";
import Search from './Components/Search';
import Tracker from './Components/Tracker';
import Notification from './Components/Notification';
import Language from './Components/Language';
import Slider from "./Components/Slider";
import Sponsor from "./Components/Sponsor";
import RaceCardSlider from "./Components/RaceCardSlider";
import Addington from "./Components/Addington";
import HomeLeftSection from './Section/HomeLeftSection';
import HomeRightSection from './Section/HomeRightSection';
import HomeCenterSection from './Section/HomeCenterSection';
import Ads from "./Components/Ads";
import Blog from './Components/Blog'
import '../CSS/HomeCSS/section.css';
import '../CSS/HomeCSS/Home.css';
import RaceCardDetail from "../../pages/RaceCardDetail";
import { useLocation } from "react-router-dom";
import Bounce from 'react-reveal/Fade';



const HomeLayout = () => {
const {pathname} = useLocation();

  return (
    <>
      <div className="Homelayout">
        <div className="hometop">
           <div className="leftlayout">
             <ExNews />
             <Slider />
           </div>
           <div className="rightlayout">
            <div className="rightlayoutinner">
              <Search />
              <Tracker />
              <Notification />
              <Language />
            </div>
            <Sponsor />
           </div>
        </div>
        <div className="RaceCardSection">
          <RaceCardSlider />
          <Addington />
        </div>
        <Bounce>
        <div className="middlesection">
          <HomeLeftSection />
          {
            pathname === '/' ? <HomeCenterSection /> : <RaceCardDetail/>
          }
          <HomeRightSection />
        </div>
        </Bounce>
        <div className='endsection'>
        <Ads />
        <Blog />
      </div>
      </div>
    </>
  )
}
export default HomeLayout