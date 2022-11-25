import Layout from "../Components/Reuseable/layout";
import "../Components/CSS/pagesCSS/about.css";
import Footer from "../Components/Reuseable/Footer.jsx";
import CoptRight from "../Components/Reuseable/Copyrights";
import "../Components/CSS/pagesCSS/horse.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

import {
  fetchTrainer,
  STATUSES,
} from "../../Webiste/redux/getReducer/getTrainerSlice";
import Moment from "react-moment";

const Trainer = () => {
  const cookiedata = Cookies.get('i18next')
  const {t} = useTranslation()
    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);
    const [modaldata, setmodaldata] = useState()
    const handleClose = () => setShow(false);
    const handleShow = async (data) => {
        setmodaldata(data)
        console.log('horse data', data)
        await setShow(true)
    };
    // const [filterCountries, setFilterCountries] = useState("");
    const navigate = useNavigate();

    
    const dispatch = useDispatch();
  const { data: trainer, status } = useSelector((state) => state.trainer);

  useEffect(() => {
    dispatch(fetchTrainer());
    setCountry(trainer);
    setCountry(trainer);
  }, []);

//   useEffect(() => {
//     const result = country.filter(country => {
//     return country.name.toLowerCase().match(search.toLowerCase());
//     });
//     setCountry(result)
//   },[search])

console.log(country,'trainer')
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
  const HandleJockey = (Id) => {
    Cookies.set('sjockey',Id)
    navigate('/trainerdetail')
  };


    
  
  
  return (
    <>
      <Layout />
      <div className="aboutpage">
        <div className="aboutpageheader">
          <h2>MKS Racing Trainer</h2>
        </div>
        <div className="aboutpagesection">
        <div className="horseTable">
           <table id="customers">
            <tr>
              <th>{t('Name')}</th>
              <th>{t('Age')}</th>
              <th>{t('Detail')}</th>
              <th>{t('Remarks')}</th>
              <th>{t('Nationality')}</th>
            
            </tr>
            {
            trainer === undefined ? <></> : <>
              {
             trainer.map((item) => {
                    return(
                        <React.Fragment>
                            <tr onClick={()=> handleShow(item) 
                            } style={{
                              cursor:'pointer'
                            }}>
                            <td>{cookiedata === 'en' ? item.NameEn : item.NameEn}</td>
                            <td> <Moment fromNow ago>
                                  {item.Age}
                                </Moment></td>
                            <td>{cookiedata === 'en' ? item.SexModelData.NameEn : item.SexModelData.NameEn}</td>
                            <td>{item.ColorIDData === null ? <>No Data</> : <>{cookiedata === 'en' ? item.ColorIDData.NameEn : item.ColorIDData.NameAr}</>}</td>
                    
                            <td>{item.NationalityData === null ? <>No Data</> : <>{item.NationalityData.NameEn }</>}</td>
                            <td>{item.Remarks === null ? <>No Data</> : <>{item.Remarks }</>}</td>
                            <td>     <button className="btn" onClick={() => HandleJockey(item._id)}>
            Detailed View
          </button></td>

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
      <Footer />
      <CoptRight />
    </>
  );
};
export default Trainer;
