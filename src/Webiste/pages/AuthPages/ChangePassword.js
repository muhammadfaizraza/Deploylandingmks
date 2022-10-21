import Layout from "../../Components/Reuseable/layout";
import "../../Components/CSS/pagesCSS/about.css";
import Footer from "../../Components/Reuseable/Footer.jsx";
import CoptRight from "../../Components/Reuseable/Copyrights";
import "../../Components/CSS/pagesCSS/horse.css";
import '../../Components/CSS/pagesCSS/profile.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    
    <>
      <Layout />
      <div className="aboutpage">
        <div className="aboutpageheader">
          <h2>MKS Racing Change Password</h2>
        </div>
        <div className="coldashboard">
          <div className="card11">
            <input type='password' placeholder='Current Password' />
            <input type='password' placeholder='New Password' />
            <input type='password' placeholder='Confirm Password' /><br/>
            <button className="button" onClick={() => {navigate('/dashboard')}}>Back</button>
            <button className="button">Confirm</button>
          </div>
        </div>
      </div>
      <Footer />
      <CoptRight />
    </>
  );
};
export default Dashboard;
