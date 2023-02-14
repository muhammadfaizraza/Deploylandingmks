import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import { RaceCardData } from "../../data/data";
import { toast } from "react-toastify";
import ScrollContainer from "react-indiana-drag-scroll";
import { useSelector, useDispatch } from "react-redux";
import arrow1 from "../../assets/image 3 (Traced).png";
import Moment from "react-moment";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import Defaultimg from "../../assets/Frame.png";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useTranslation } from "react-i18next";


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      className="ShowPreviousHistory"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}


const Card = () => {
  const [Disable, setDisable] = useState(false);
  const [showtri, setShowtri] = useState(false);
  const [PositionNumber, setPositionNumber] = useState("1");
  const [History, setHistory] = useState([])

  const myPara = {
    fontWeight: "700",
    fontSize: "12px",
    color: "rgba(0, 0, 0, 0.5)",
  };
  const myPara1 = {
    fontWeight: "700",
    fontSize: "12px",
    color: "#000",
  };
  const btnNew = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "3px 10px",
    gap: "10px",
    width: "96px",
    height: "21px",
    background: "#19469D",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
  };
  const btnNew1 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "3px 10px",
    gap: "10px",
    width: "96px",
    height: "21px",
    background: "#FF0000",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
  };
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const id = "abc";
  const handleShowTri = async (data) => {
    await setShowtri(true);
  };
  const castClick = async (event, horseid, compid) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `/voting/${compid}/${id}/${PositionNumber}`,
        { Horse: horseid },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      const msgdata = response.data.data.message;
      toast(msgdata);
      setDisable(false);
    } catch (error) {
      const err = error.response.data.message;
      toast(err);
      setDisable(false);
    }
  };
  const runCallback = (cb) => {
    return cb();
  };
  const pickClick = async (event, compid, horseid) => {
    event.preventDefault();
    try {
      setDisable(true);
      const response = await axios.post(
        `/voting/${compid}/${id}/${PositionNumber}`,
        { Horse: horseid },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      const msgdata = response.data.data.message;
      toast(msgdata);
      setDisable(false);
    } catch (error) {
      const err = error.response.data.message;
      toast(err);
      setDisable(false);
    }
  };
  const handleTrack = async (Id) => {

    try {
      const res = await axios.post(
        `/trackhorse`, { Horse: Id }, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' },
      }
      );


      toast('Tracked Success')

      // navigate('/tracker')
    } catch (error) {
      const err = error.response.data.message;
      toast(err)
    }
  };

  const showHorseHistory = async (horseid) => {

    const res =
      await
        axios.get(`${window.env.API_URL}/horsehistory/${horseid}`)
    setHistory(res.data.data)


  }


  const { data: singlerace, status } = useSelector((state) => state.singlerace);
  const cookiedata = Cookies.get("i18next");
  return (
    <div className="RaceDetailCard">
      <div className="forfexclass">
      
      </div>
    </div>
  );
};
export default Card;
