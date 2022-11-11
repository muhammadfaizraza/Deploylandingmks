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
import { useTranslation } from "react-i18next";
const Horse = () => {

  const {t} = useTranslation();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [modaldata, setmodaldata] = useState()
    const handleClose = () => setShow(false);
    const handleShow = async (data) => {
        setmodaldata(data)
        console.log('horse data', data)
        await setShow(true)
    };
  const { data: horse, status } = useSelector((state) => state.horse);

  const cookiedata = Cookies.get('i18next')

  useEffect(() => {
    dispatch(fetchHorse());
  },[])
 console.log('horse',horse)
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
              <th>{t('Name')}</th>
              <th>{t('Age')}</th>
              <th>{t('Sex')}</th>
              <th>{t('Color')}</th>
              <th>{t('KindOfHorse')}</th>
              <th>{t('Owner')}</th>
              <th>{t('Dam')}</th>
              <th>{t('Sire')}</th>
              <th>{t('GSire')}</th>
              <th>{t('isGelted')}</th>
              <th>{t('PurchasePrice')}</th>
              <th>{t('OverAllRating')}</th>
              <th>{t('Remarks')}</th>
            </tr>
            {
              horse === undefined ? <></> : <>
              {
                horse.map((item) => {
                    return(
                        <React.Fragment>
                            <tr onClick={()=> handleShow(item) 
                            } style={{
                              cursor:'pointer'
                            }}>
                            <td>{cookiedata === 'en' ? item.NameEn : item.NameEn}</td>
                            <td>{cookiedata === 'en' ? item.Age : item.Age}</td>
                            <td>{cookiedata === 'en' ? item.Sex : item.Sex}</td>
                            <td>{item.ColorIDData === null ? <>No Data</> : <>{cookiedata === 'en' ? item.ColorIDData.NameEn : item.ColorIDData.NameAr}</>}</td>
                            <td>{cookiedata === 'en' ? 'red' : 'red'}</td>
                            <td>{item.OwnerModels === null ? <>No Data</> : <>{item.OwnerModels.map((data) => data.NameEn) }</>}</td>
                            <td>{item.Dam === null ? <>No Data</> : <>{cookiedata === 'en' ? item.DamData.NameEn : item.DamData.NameAr}</>}</td>
                            <td>{item.Dam === null ? <>No Data</> : <>{cookiedata === 'en' ? item.SireData.NameEn : item.SireData.NameAr}</>}</td>
                            <td>{item.Dam === null ? <>No Data</> : <>{cookiedata === 'en' ? item.GSireData.NameEn : item.GSireData.NameAr}</>}</td>
                            <td>{item.isGelted === 1 ? <>Yes</> : <>No</>}</td>
                            <td>{item.PurchasePrice === null ? <>No Data</> : <>{item.PurchasePrice }</>}</td>
                            <td>{item.OverAllRating === null ? <>No Data</> : <>{item.OverAllRating }</>}</td>
                            <td>{item.Remarks === null ? <>No Data</> : <>{item.Remarks }</>}</td>

                            </tr>
                        </React.Fragment>
                    )
                })
            }
              </>
            }
          </table>
           </div>
           
        </div>
      </div>
                  <Modal show={show} onHide={handleClose}   size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered>
                <Modal.Header className="popupheader" closeButton >
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
