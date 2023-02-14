import Layout from "../Components/Reuseable/layout";
import "../Components/CSS/pagesCSS/about.css";
import Footer from "../Components/Reuseable/Footer.jsx";
import CoptRight from "../Components/Reuseable/Copyrights";
import "../Components/CSS/pagesCSS/horse.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchraceresultDeclared,
  STATUSES,
} from "../../Webiste/redux/getReducer/getRaceResultAnnounced";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Modal } from "react-bootstrap";
import Lottie from "lottie-react";
import Animate from "../assets/loader.json";
import OwnerDetail from "./OwnerDetail";
import { useTranslation } from "react-i18next";
import Pagination from "./Pagination";
import ResultDetail from './RaceCardResult'

const Owner = () => {
  const { t } = useTranslation();
  const cookiedata = Cookies.get("i18next");
  const [pageNumber, setPageNumber] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState();
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
    setmodaldata(data);
    await setShow(true);
  };
  const dispatch = useDispatch();
  const { data: raceresultDeclared, status } = useSelector(
    (state) => state.raceresultDeclared
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [TotalData, setTotalData] = useState();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = raceresultDeclared.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(fetchraceresultDeclared());
    setTotalData(raceresultDeclared.length);
  }, [dispatch, pageNumber, searchKeyword]);

  console.log(TotalData, "TotalData");
 

  if (status === STATUSES.LOADING) {
    return <Lottie animationData={Animate} loop={true} className="load" />;
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
          <h2>MKS Racing Result</h2>
        </div>
        <div className="aboutpagesection">
          <div className="horseTable">

            <table id="customers">
              <tr>
                <th>{t("Name")}</th>
                <th>{t("Detail")}</th>
              </tr>
              {currentPosts.map((item) => {
                return (
                  <tr>
                    <td>
                      {cookiedata === "en" ? (
                        item.RaceNameModelData === null ||
                        item.RaceNameModelData === undefined ? (
                          <>N/A</>
                        ) : (
                          item.RaceNameModelData.NameEn
                        )
                      ) : item.RaceNameModelData === null ||
                        item.RaceNameModelData === undefined ? (
                        <>N/A</>
                      ) : (
                        item.RaceNameModelData.NameAr
                      )}
                    </td>
                    <button
                      className="raceresultbtn"
                      onClick={() => handleShow(item._id)}
                    >
                      Click
                    </button>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={TotalData}
          paginate={paginate}
          currentPage={currentPage}
          TotalPages={10}
        />

        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="popupheader" closeButton>
            <h3>Result Detail</h3>
          </Modal.Header>
          <Modal.Body>
            <ResultDetail data={modaldata} />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
      <Footer />
      <CoptRight />
    </>
  );
};

export default Owner;
