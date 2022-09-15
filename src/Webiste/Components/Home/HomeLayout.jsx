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

const HomeLayout = () => {
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
        <div className="middlesection">
          <HomeLeftSection />
          <HomeCenterSection />
          <HomeRightSection />
        </div>
        <div className='endsection'>
        <Ads />
        <Blog />
      </div>
      </div>
    </>
  )
}
export default HomeLayout