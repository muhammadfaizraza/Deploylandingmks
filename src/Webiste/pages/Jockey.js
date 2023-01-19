import Layout from "../Components/Reuseable/layout";
import "../Components/CSS/pagesCSS/about.css";
import Footer from "../Components/Reuseable/Footer.jsx";
import CoptRight from "../Components/Reuseable/Copyrights";
import "../Components/CSS/pagesCSS/horse.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import {
  fetchJockey,
  STATUSES,
} from "../../Webiste/redux/getReducer/getJockeySlice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import JockeyDetail from "./JockeyDetail";
import { Modal } from "react-bootstrap";
import Lottie from 'lottie-react';
import Animate from '../assets/loader.json'
import { useTranslation } from "react-i18next";
import Defaultimg from "../assets/default.png"

const Trainer = () => {
  const { t } = useTranslation()
  const cookiedata = Cookies.get('i18next')


  const [pageNumber, setPageNumber] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState()
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
    setmodaldata(data)
    await setShow(true)
  };
  const dispatch = useDispatch();
  const { data: jockey, status } = useSelector((state) => state.jockey);

  useEffect(() => {
    dispatch(fetchJockey({ pageNumber, searchKeyword }));
  }, [dispatch, pageNumber, searchKeyword]);


  const HandleJockey = (Id) => {
    Cookies.set('sjockey', Id)
    navigate('/jockeydetail')
  };

  if (status === STATUSES.LOADING) {
    return (
      <div className="py-4 text-center">
        <Lottie animationData={Animate} loop={true} className="load" />
      </div>
    )
      ;
  }
  if (status === STATUSES.ERROR) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Something went wrong!
      </h2>
    );
  }

  return (
    <>
      <Layout />
      <div className="aboutpage">
        <div className="aboutpageheader">
          <h2>MKS Racing Jockey</h2>
        </div>
        <div className="aboutpagesection">
          <div className="horseTable">
            {/* <input type='text' value={searchKeyword} placeholder='Search' onChange={e => setSearchKeyword(e.target.value)}/> */}

            <table id="customers">
              <tr>
                <th>{t('Name')}</th>
                <th>{t("Short Name")}</th>
                <th>{t("Age")}</th>
                <th>{t("License Date")}</th>
                <th>{t("Minimum Weight")}</th>
                <th>{t("Maximum Weight")}</th>
                <th>{t("Allowance")}</th>


                <th>{t("Remarks")} </th>
                <th>{t("Rating")}</th>
                <th>{t("Nationality")}</th>
                <th>{t("Image")}</th>
              </tr>
              {jockey.map((item) => {
                return (
                  <tr onClick={() => handleShow(item)
                  } style={{
                    cursor: 'pointer'
                  }}>
                    <td >{cookiedata === "en" ? (item.NameEn ? item.NameEn : "N/A") : (item.NameAr ? item.NameAr : "N/A")}</td>
                    <td>{cookiedata === "en" ? (item.ShortNameEn ? item.ShortNameEn : "N/A") : (item.ShortNameAr ? item.ShortNameAr : "N/A")}</td>
                    <td><Moment fromNow ago>
                      {item.DOB}
                    </Moment></td>



                    <td><Moment format="YYYY/MM/DD">
                      {item.JockeyLicenseDate}
                    </Moment></td>
                    <td>{item.MiniumumJockeyWeight}</td>
                    <td>{item.MaximumJockeyWeight}</td>
                    <td>{item.JockeyAllowance}</td>
                    <td>

                      {cookiedata === "en" ? (item.RemarksEn ? item.RemarksEn : "N/A") : (item.RemarksAr ? item.RemarksAr : "N/A")}

                    </td>
                    <td>{item.Rating ? item.Rating : "N/A"}</td>
                    <td>{cookiedata === "en" ? (item.JockeyNationalityData.NameEn ? item.JockeyNationalityData.NameEn : "N/A") : (item.JockeyNationalityData.NameAr ? item.JockeyNationalityData.NameAr : "N/A")} </td>

                    <td>
                      <img src={item.image ? item.image : Defaultimg} alt="" style={{
                        height: '30px',
                        width: '30px'
                      }} />
                    </td>
                  </tr>
                );
              })}
            </table>

          </div>
        </div>
        <Modal show={show} onHide={handleClose} size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header className="popupheader" closeButton >

          </Modal.Header>
          <Modal.Body>
            <JockeyDetail data={modaldata} />
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer />
      <CoptRight />
    </>
  );
};
export default Trainer;
