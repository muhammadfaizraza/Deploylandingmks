import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import HorseDetail from "../../../pages/HorseDetail";
import Animate from "../../../assets/loader.json"
import Lottie from 'lottie-react';

const Search = () => {
  const [item, SearchData] = useState("");
  const [Data, setData] = useState([]);
  const [Data2, setData2] = useState([]);
  const [Data3, setData3] = useState([]);

  const [LoaderData, setLoaderData] = useState(false);

  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState();
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
    setmodaldata(data);
    SearchData('')
    await setShow(true);
  };

  useEffect(() => {
    (async () => {
      try {
        setLoaderData(true)
        const res = await axios.post(
          `${window.env.API_URL}/searchhorse_trainer_jockey`,
          { Query: item }
        );
        setData(res.data.data1);
        setData2(res.data.data2);
        setData3(res.data.data3);
        setLoaderData(false);

        if (item === "") {
          setData([]);
          setData2([]);
          setData3([]);
        }
      } catch (err) {
        alert(err);
      }
    })();
  }, [item]);

 

  return (
    <div className="searchparent">
      <div className="searchbox">
        <input
          type="text"
          onChange={(event) => SearchData(event.target.value)}
        />
        <i className="fa fa-search icon11"></i>
      </div>
      <div className={item === "" ? "searchchild1" : "searchchild"}>
        <div className="searchdatalist ">
          <div className="row">
            <div className="col-sm">
              <h5>Horse</h5>
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
              {Data2.length === 0 ? (
                <p className="searchdatalist1">No Data Found</p>
              ) : (
                <>
                  {Data2.map((data2) => {
                    return <p className="searchname">{data2.NameEn}</p>;
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
                    return <p className="searchname">{data2.NameEn}</p>;
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
    </div>
  );
};
export default Search;
