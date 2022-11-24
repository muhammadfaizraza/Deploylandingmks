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
const Trainer = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();
  const [data ,setdata] = useState()
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

  
  const previousPageHandler = () => {
    setPageNumber((pageNumber) => pageNumber - 1);
  };
  const nextPageHandler = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
  };

 
  const HandleJockey = (Id) => {
    Cookies.set('sjockey',Id)
    navigate('/jockeydetail')
  };

  if (status === STATUSES.LOADING) {
    return (
      <h2
      className="loader"
      >
        
      </h2>
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
          <h2>MKS Racing Trainer</h2>
        </div>
        <div className="aboutpagesection">
          <div className="horseTable">
            <input type='text' value={searchKeyword} placeholder='Search' onChange={e => setSearchKeyword(e.target.value)}/>
            
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
                  <td >{item.NameEn}</td>
                  <td><Moment fromNow ago>
                                  {item.Age}
                                </Moment></td>
                                <td>{item.RemarksEn}</td>
                                <td>{item.Rating}</td>
                                <td>{item.JockeyNationalityData.NameEn} </td>
                               
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
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                justifyContent: "space-between",
              }}
            >
              <button
                className="button"
                onClick={previousPageHandler}
                disabled={pageNumber === 1}
              >
                Previous
              </button>
              <p
                style={{
                  marginTop: "20px",
                }}
              >
                Page {pageNumber}
              </p>
              <button
                className="button"
                onClick={nextPageHandler}
                disabled={jockey.length <= 1}
              >
                Next
              </button>
            </div>
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
