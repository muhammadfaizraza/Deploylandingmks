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


const Trainer = () => {
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
    dispatch(fetchJockey({ pageNumber,searchKeyword }));
  }, [dispatch, pageNumber,searchKeyword]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }}
 
  const HandleJockey = (Id) => {
    Cookies.set('sjockey',Id)
    navigate('/jockeydetail')
  };

  if (status === STATUSES.LOADING) {
    return (
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    );
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
                <th>Name</th>
                <th>Age</th>
                <th>RemarksEn </th>
                <th>Rating</th>
                <th>Nationality</th>
                <th>Image</th>
              </tr>
              {jockey.map((item) => {
                return (
                  <tr onClick={()=> handleShow(item) 
                  } style={{
                    cursor:'pointer'
                  }}>
                  <td >{item.NameEn&& item.NameEn}</td>
                  <td><Moment fromNow ago>
                                  {item.DOB}
                                </Moment></td>
                                <td>{item.RemarksEn}</td>
                                <td>{item.Rating}</td>
                                <td>{item.JockeyNationalityData&& item.JockeyNationalityData.NameEn } </td>
                               
                  <td>
                    <img src={item.image} alt=""  style={{
                      height:'30px',
                      width:'30px'
                    }}/>
                  </td>
                </tr>
                );
              })}
            </table>
            
          </div>
        </div>
        <Modal show={show} onHide={handleClose}   size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered>
                <Modal.Header className="popupheader" closeButton >
                    <h3>Jockey Detail</h3>
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
