import "../CSS/header.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Language from "./Language";

const Header = () => {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);

  const styles = {
    popup: {
      borderRadius: show ? "0px, 0px , 50px ,0px" : "none",
    },
  };
  return (
    <>
      <div className={!show ? "header" : "header1"}>
        <div className="largemenu">
          <div className="d-flex menuNav">
            <Link to="/">
              <img src={t("logo")} className="logoclass" alt="img" />
            </Link>
            <Link to="/about" className="LinkStyle">
              <p>{t("about")}</p>
            </Link>
            <Link to="/statistics" className="LinkStyle">
              <p>{t("statistics")}</p>
            </Link>
            <Link to="/" className="LinkStyle">
              <p>{t("race_card")}</p>
            </Link>
            <Link to="/result" className="LinkStyle">
              <p>{t("result")}</p>
            </Link>
            <Link to="/" className="LinkStyle">
              <p>{t("race_course")}</p>
            </Link>
            <Link to="/competition" className="LinkStyle">
              <p>{t("competition")}</p>
            </Link>
            <Link to="/sponsor" className="LinkStyle">
              <p>{t("sponsors")}</p>
            </Link>
          </div>
        </div>
        <div className="mobilemenu">
          <div className="mobilemenudata">
            <Link to="/">
              <img src={t("logo")} className="logoclass" alt="img" />
            </Link>
            <FaBars onClick={() => setShow(!show)} className="fafabar" />
          </div>

          {show ? (
            <Fade right>
              {" "}
              <span className="mobiledropdown">
                <Link to="/login" className="LinkStyle">
                  <p>{t("LOGIN/REGISTER")}</p>
                </Link>
                <Link to="/" className="LinkStyle">
                  <p>{t("Search")}</p>
                </Link>

                <Link to="/about" className="LinkStyle">
                  <p>{t("about")}</p>
                </Link>
                <Link to="/statistics" className="LinkStyle">
                  <p>{t("statistics")}</p>
                </Link>
                <Link to="/" className="LinkStyle">
                  <p>{t("race_card")}</p>
                </Link>
                <Link to="/result" className="LinkStyle">
                  <p>{t("result")}</p>
                </Link>
                <Link to="/" className="LinkStyle">
                  <p>{t("race_course")}</p>
                </Link>
                <Link to="/competition" className="LinkStyle">
                  <p>{t("competition")}</p>
                </Link>
                <Link to="/sponsor" className="LinkStyle">
                  <p>{t("sponsors")}</p>
                </Link>
                <Language />
              </span>
            </Fade>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Header;
