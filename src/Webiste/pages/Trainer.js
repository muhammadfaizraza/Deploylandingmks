import Layout from "../Components/Reuseable/layout";
import "../Components/CSS/pagesCSS/about.css";
import Footer from "../Components/Reuseable/Footer.jsx";
import CoptRight from "../Components/Reuseable/Copyrights";
import "../Components/CSS/pagesCSS/horse.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import {
  fetchTrainer,
  STATUSES,
} from "../../Webiste/redux/getReducer/getTrainerSlice";
import Cookies from "js-cookie";
import TrainerDetail from "./TrainerDetail";
import { Modal } from "react-bootstrap";
import Lottie from "lottie-react";
import Animate from "../assets/loader.json";
import { useTranslation } from "react-i18next";
import DefaultImg from "../assets/default.png";
import Pagination from "./Pagination";
import axios from "axios";

const Trainer = () => {
  const { t } = useTranslation();
  const cookiedata = Cookies.get("i18next");

  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState();

  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
    setmodaldata(data);
    await setShow(true);
  };
  const dispatch = useDispatch();
  const { data: trainer, status } = useSelector((state) => state.trainer);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(11);
  const [TotalCount, setTotalCount] = useState()
  const [TotalPages, setTotalPages] = useState()

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const GetSearch = async () => {

    const response = await axios.get(
      `${window.env.API_URL}/SearchTrainer`
    );


    setTotalCount(response.data.totalcount)
    const TotalPagesData = response.data.totalPages;
    setTotalPages(TotalPagesData)

  };


  useEffect(() => {
    dispatch(fetchTrainer({ currentPage }));
    GetSearch({ currentPage })
  }, [currentPage, dispatch]);


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
          <h2>MKS Racing Trainer</h2>
        </div>
        <div className="aboutpagesection">
          <div className="horseTable">
            {/* <input type='text' value={searchKeyword} placeholder='Search' onChange={e => setSearchKeyword(e.target.value)}/> */}

            <table id="customers">
              <tr>
                <th>{t("Name")}</th>
                <th>{t("Short Name")}</th>
                <th>{t("Title")}</th>

                <th>{t("Age")}</th>
                <th>{t("License Date")}</th>
                <th>{t("Remarks")}</th>
                <th>{t("Detail")}</th>
                <th>{t("Nationality")}</th>
                <th>{t("Image")}</th>
              </tr>
              {trainer.map((item) => {
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
                          : "N/A"}
                    </td>

                    <td>
                      {cookiedata === "en"
                        ? item.ShortNameEn
                          ? item.ShortNameEn
                          : "N/A"
                        : item.ShortNameAr
                          ? item.ShortNameAr
                          : "N/A"}
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
                      <Moment fromNow ago>
                        {item.DOB}
                      </Moment>
                    </td>
                    <td>
                      <Moment fromNow ago>
                        {" "}
                        {item.TrainerLicenseDate}
                      </Moment>
                    </td>
                    <td>
                      {cookiedata === "en"
                        ? item.RemarksEn
                          ? item.RemarksEn
                          : "N/A"
                        : item.RemarksAr
                          ? item.RemarksAr
                          : "N/A"}
                    </td>
                    <td>
                      {cookiedata === "en"
                        ? item.DetailEn
                          ? item.DetailEn
                          : "N/A"
                        : item.DetailAr
                          ? item.DetailAr
                          : "N/A"}
                    </td>
                    <td>
                      {item.TrainerNationalityData === null ? (
                        <>N/A</>
                      ) : (
                        item.TrainerNationalityData.NameEn
                      )}{" "}
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
          totalPosts={TotalCount}
          paginate={paginate}
          currentPage={currentPage}
          TotalPages={TotalPages}
        />
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="popupheader" closeButton></Modal.Header>
          <Modal.Body>
            <TrainerDetail data={modaldata} />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
      <Footer />
      <CoptRight />
    </>
  );
};
export default Trainer;
