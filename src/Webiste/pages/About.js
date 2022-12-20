import Layout from "../Components/Reuseable/layout";
import "../Components/CSS/pagesCSS/about.css";
import Footer from "../Components/Reuseable/Footer.jsx";
import CoptRight from "../Components/Reuseable/Copyrights";
import Frame from "../../Webiste/assets/Frame.png";
import Horse from "../../Webiste/assets/About1.jpg"
import About2 from "../../Webiste/assets/About2.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const About = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { token } = useSelector((state) => state.user);

  return (
    <>
      <Layout />
      <div className="aboutpage">
        <div className="aboutpageheader">
          <h2>About Us</h2>
        </div>

        <div className="aboutpagesection">
          <div className="aboutData">
            <h3>ABOUT US</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
         
            </p>
          </div>
          <div className="imgDiv">
            <img src={Horse} alt="" />
          </div>
        </div>
        <div className="bannerAbout">
          <div className="aboutCard">
            <img src={Frame} alt="" />
            <div className="bannerText">
              <h1 className="bannerText1">{t("bannerText1")}</h1>
              <h1 className="bannerText2">{t("bannerText2")}</h1>
              {token !== null ? (
                <></>
              ) : (
                <button
                  className="registerbtn"
                  onClick={() => navigate("/login")}
                >
                  {t("RegisterNow")}
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="middlebanner">
          <section>
            <h3>MISSION & VISION</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </div>
        <div className="aboutpagesection">
          <div className="imgDiv">
            <img src={About2} alt="" />
          </div>
          <div className="aboutData2">
            <h3>WHAT NEXT...</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <CoptRight />
    </>
  );
};
export default About;
