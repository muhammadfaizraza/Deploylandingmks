import Layout from "../Components/Reuseable/layout";
import "../Components/CSS/pagesCSS/about.css";
import Footer from "../Components/Reuseable/Footer.jsx";
import CoptRight from "../Components/Reuseable/Copyrights";
import "../Components/CSS/pagesCSS/horse.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import {
  fetchowner,
  STATUSES,
} from "../../Webiste/redux/getReducer/getOwnerSlice";

import Cookies from "js-cookie";
import { Modal } from "react-bootstrap";
import Lottie from "lottie-react";
import Animate from "../assets/loader.json";
import OwnerDetail from "./OwnerDetail";
import { useTranslation } from "react-i18next";
import DefaultImg from "../assets/default.png";
import Pagination from "./Pagination";

const Owner = () => {
  const { t } = useTranslation();
  const cookiedata = Cookies.get("i18next");
  const [pageNumber, setPageNumber] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");

  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState();
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
    setmodaldata(data);
    await setShow(true);
  };
  const dispatch = useDispatch();
  const { data: owner, status } = useSelector((state) => state.owner);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [TotalData, setTotalData] = useState();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = owner.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(fetchowner({ pageNumber, searchKeyword }));
    setTotalData(owner.length);
  }, [dispatch, owner.length, pageNumber, searchKeyword]);

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
          <h2>MKS Racing Owner</h2>
        </div>
        <div className="aboutpagesection">
          <div className="horseTable">
            {/* <input type='text' value={searchKeyword} placeholder='Search' onChange={e => setSearchKeyword(e.target.value)}/> */}

            <table id="customers">
              <tr>
                <th>{t("Name")}</th>
                <th>{t("Age")}</th>
                <th>{t("Title")} </th>
                <th>{t("Short Name")} </th>
                <th>{t("Registration Date")} </th>
                <th>{t("Nationality")}</th>
                <th>{t("Image")}</th>
              </tr>
              {currentPosts.map((item) => {
                return (
                  <tr
                    onClick={() => handleShow(item)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <td>
                      {cookiedata === "en"
                        ? item.NameEn
                          ? item.NameEn
                          : "N/A"
                        : item.NameAr
                          ? item.NameAr
                          : "N/A"}{" "}
                    </td>
                    <td>
                      <Moment fromNow ago>
                        {item.DOB}
                      </Moment>
                    </td>
                    <td>
                      {cookiedata === "en"
                        ? item.TitleEn
                          ? item.TitleEn
                          : "N/A"
                        : item.TitleAr
                          ? item.TitleAr
                          : "N/A"}
                    </td>
                    <td>
                      {cookiedata === "en"
                        ? item.ShortEn
                          ? item.ShortEn
                          : "N/A"
                        : item.ShortAr
                          ? item.ShortAr
                          : "N/A"}
                    </td>
                    <td> {item.RegistrationDate} </td>
                    <td>
                      {cookiedata === "en"
                        ? item.OwnerDataNationalityData.NameEn
                          ? item.OwnerDataNationalityData.NameEn
                          : "N/A"
                        : item.OwnerDataNationalityData.NameAr
                          ? item.OwnerDataNationalityData.NameAr
                          : "N/A"}
                    </td>
                    <td>
                      <img
                        src={item.image ? item.image : DefaultImg}
                        alt=""
                        style={{
                          height: "30px",
                          width: "30px",
                        }}
                      />
                    </td>
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
            <h3>Owner Detail</h3>
          </Modal.Header>
          <Modal.Body>
            <OwnerDetail data={modaldata} />
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
