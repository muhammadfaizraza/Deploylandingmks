import Layout from "../../Components/Reuseable/layout";
import "../../Components/CSS/pagesCSS/about.css";
import Footer from "../../Components/Reuseable/Footer.jsx";
import CoptRight from "../../Components/Reuseable/Copyrights";
import { useNavigate } from 'react-router-dom'
import "../../Components/CSS/pagesCSS/profile.css";

const MyTracker = () => {
    const navigate = useNavigate()

  return (
    <>
      <Layout />
      <div className="aboutpage">
        <div className="aboutpageheader">
          <h2>MKS Racing Tracker</h2>
        </div>
        <div className="coldashboard">
        </div>
        <div className="backbtn">
           <button class="button" onClick={() => {navigate('/dashboard')}}>Back</button>
        </div>
      </div>
      <Footer />
      <CoptRight />
    </>
  );
};
export default MyTracker;
