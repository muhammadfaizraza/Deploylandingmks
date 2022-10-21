import Layout from "../Components/Reuseable/layout";
import "../Components/CSS/pagesCSS/about.css";
import Footer from "../Components/Reuseable/Footer.jsx";
import CoptRight from "../Components/Reuseable/Copyrights";
import "../Components/CSS/pagesCSS/horse.css";
import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHorse, STATUSES } from "../../Webiste/redux/getReducer/getHorseSlice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Modal } from "react-bootstrap";
import HorseDetail from "./HorseDetail";

const Horse = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data ,setdata] = useState()
    const [show, setShow] = useState(false);
    const [modaldata, setmodaldata] = useState()
    const handleClose = () => setShow(false);
    const handleShow = async (data) => {
        setmodaldata(data)
        await setShow(true)
    };
  const { data: horse, status } = useSelector((state) => state.horse);
  useEffect(() => {
    dispatch(fetchHorse());
  },[])
 
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
          <h2>MKS Racing Horse</h2>
        </div>
        <div className="aboutpagesection">
           <div className="horseTable">
           <table id="customers">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Color</th>
              <th>KindOfHorse</th>
              <th>Owner</th>
              <th>Trainer</th>
              <th>ActiveTrainer</th>
              <th>Breeder</th>
              <th>Dam</th>
              <th>Sire</th>
              <th>GSire</th>
              <th>Remarks</th>
            </tr>
            {
                horse.map((item) => {
                    return(
                        <React.Fragment>
                            <tr onClick={()=> handleShow(item) 
                            } style={{
                              cursor:'pointer'
                            }}>
                            <td>{item.NameEn}</td>
                            <td>{item.Age}</td>
                            <td>{item.Sex}</td>
                            <td>{item.Color}</td>
                            <td>{item.KindOfHorse === null ? <>No Data</> : <>{item.KindOfHorse }</>}</td>
                            <td>{item.Owner === null ? <>No Data</> : <>{item.Owner.map((data) => data.Name) }</>}</td>
                            <td>{item.Trainer === null ? <>No Data</> : <>{item.Trainer.map((data) => data.Name) }</>}</td>
                            <td>{item.ActiveTrainer === null ? <>No Data</> : <>{item.ActiveTrainer.Name }</>}</td>
                            <td>{item.Breeder === null ? <>No Data</> : <>{item.Breeder }</>}</td>
                            <td>{item.Dam === null ? <>No Data</> : <>{item.Dam }</>}</td>
                            <td>{item.Sire === null ? <>No Data</> : <>{item.Sire }</>}</td>
                            <td>{item.GSire === null ? <>No Data</> : <>{item.GSire }</>}</td>
                            <td>{item.Remarks === null ? <>No Data</> : <>{item.Remarks }</>}</td>
                            </tr>
                        </React.Fragment>
                    )
                })
            }
          </table>
           </div>
           
        </div>
      </div>
                  <Modal show={show} onHide={handleClose}   size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered>
                <Modal.Header className="popupheader" closeButton >
                    <h3>Horse Detail</h3>
                </Modal.Header>
                <Modal.Body>
                <HorseDetail data={modaldata} />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
      <Footer />
      <CoptRight />
    </>
  );
};
export default Horse;
