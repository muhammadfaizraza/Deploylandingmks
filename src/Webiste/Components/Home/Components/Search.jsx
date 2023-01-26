import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import HorseDetail from "../../../pages/HorseDetail";
import TrainerDetail from '../../../pages/TrainerDetail';
import OwnerDetail from '../../../pages/OwnerDetail';
import JockeyDetail from '../../../pages/JockeyDetail';

import Animate from "../../../assets/loader.json"
import Lottie from 'lottie-react';

const Search = () => {
  // const [item, SearchData] = useState("");
  // const [Data, setData] = useState([]);
  // const [Data2, setData2] = useState([]);
  // const [Data3, setData3] = useState([]);
  // const [Data4, setData4] = useState([]);

  // const [LoaderData, setLoaderData] = useState(false);

  // const [show, setShow] = useState(false);
  // const [modaldata, setmodaldata] = useState();
  // const handleClose = () => setShow(false);
  // const handleShow = async (data) => {
  //   setmodaldata(data);
  //   SearchData('')
  //   await setShow(true);
  // };

  // const [showJocley, setShowJockey] = useState(false);
  // const [modaldataJockey, setmodaldataJockey] = useState();
  // const handleCloseJockey = () => setShowJockey(false);
  // const handleShowJocley = async (data) => {
  //   setmodaldataJockey(data);
  //   SearchData('')
  //   await setShowJockey(true);
  // };

  // const [showtrainer, setShowtrainer] = useState(false);
  // const [modaldatatrainer, setmodaldatatrainer] = useState();
  // const handleClosetrainer = () => setShowtrainer(false);
  // const handleShowtrainer = async (data) => {
  //   setmodaldatatrainer(data);
  //   SearchData('')
  //   await setShowtrainer(true);
  // };


  // const [showowner, setShowowner] = useState(false);
  // const [modaldataowner, setmodaldataowner] = useState();
  // const handleCloseowner = () => setShowowner(false);
  // const handleShowowner = async (data) => {
  //   setmodaldataowner(data);
  //   SearchData('')
  //   await setShowowner(true);
  // };


  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setLoaderData(true)
  //       const res = await axios.post(
  //         `${window.env.API_URL}/searchhorse_trainer_jockey`,
  //         { Query: item }
  //       );
  //       setData(res.data.data1);
  //       setData2(res.data.data2);
  //       setData3(res.data.data3);
  //       setData4(res.data.data4);
  //       setLoaderData(false);

  //       if (item === "") {
  //         setData([]);
  //         setData2([]);
  //         setData3([]);
  //         setData4([]);
  //       }
  //     } catch (err) {
       
  //     }
  //   })();
  // }, [item]);

 

  return (
    <div className="searchparent">
      <div className="searchbox">
        <input
          type="text"
          // onChange={(event) => SearchData(event.target.value)}
        />
        <i className="fa fa-search icon11"></i>
      </div>
      {/* <div className={item === "" ? "searchchild1" : "searchchild"}>
        <div className="searchdatalist ">
          <div className="row">
            <div className="col-sm">
              <h5>Horse</h5>
            </div>
            <div className="col-sm">
              <h5>Jockey</h5>
            </div>
            <div className="col-sm">
              <h5>Trainer</h5>
            </div>
            <div className="col-sm">
              <h5>Owner</h5>
            </div>
          </div>
        </div>
        <hr />
        <div className="searchdatalist ">
          {
            !LoaderData? 
            <div className="row">
            <div className="col-sm">
              {Data.length === 0 ? (
                <p className="searchdatalist1">No Data Found</p>
              ) : (
                <>
                  {Data.map((data2) => {
                    return (
                      <p
                        className="searchname"
                        onClick={() => handleShow(data2)}
                      >
                        {data2.NameEn}
                      </p>
                    );
                  })}
                </>
              )}
            </div>
            <div className="col-sm">
              {Data4.length === 0 ? (
                <p className="searchdatalist1">No Data Found</p>
              ) : (
                <>
                  {Data4.map((data2) => {
                    return <p className="searchname" onClick={() => handleShowJocley(data2)}>{data2.NameEn}</p>;
                  })}
                </>
              )}
            </div>
            <div className="col-sm">
              {Data2.length === 0 ? (
                <p className="searchdatalist1">No Data Found</p>
              ) : (
                <>
                  {Data2.map((data2) => {
                    return <p className="searchname" onClick={() => handleShowtrainer(data2)}>{data2.NameEn}</p>;
                  })}
                </>
              )}
            </div>
            <div className="col-sm">
              {Data3.length === 0 ? (
                <p className="searchdatalist1">No Data Found</p>
              ) : (
                <>
                  {Data3.map((data2) => {
                    return <p className="searchname" onClick={() => handleShowowner(data2)}>{data2.NameEn}</p>;
                  })}
                </>
              )}
            </div>
          </div> :  <Lottie animationData={Animate} loop={true} className="Lottie searchLottie" />
          }
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="popupheader" closeButton></Modal.Header>
        <Modal.Body>
          <HorseDetail data={modaldata} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={showJocley}
        onHide={handleCloseJockey}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="popupheader" closeButton></Modal.Header>
        <Modal.Body>
          <JockeyDetail data={modaldataJockey} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={showtrainer}
        onHide={handleClosetrainer}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="popupheader" closeButton></Modal.Header>
        <Modal.Body>
          <TrainerDetail data={modaldatatrainer} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={showowner}
        onHide={handleCloseowner}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="popupheader" closeButton></Modal.Header>
        <Modal.Body>
          <OwnerDetail data={modaldataowner} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal> */}
    </div>
  );
};
export default Search;
