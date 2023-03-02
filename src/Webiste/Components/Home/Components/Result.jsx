import { useEffect, useState } from "react";
import "../../CSS/HomeCSS/result.css";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchraceresult,
  STATUSES,
} from "../../../redux/getReducer/getRaceResult";
import Cookies from "js-cookie";
import ResultScreen from "../../../pages/RaceCardResult";
import { Modal } from "react-bootstrap";

const Result = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data: raceresult, status } = useSelector((state) => state.raceresult);
  const cookiedata = Cookies.get("i18next");
  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState();
  const handleClose = () => setShow(false);
  const handleShow1 = async (data) => {
    setmodaldata(data);
    await setShow(true);
  };
  useEffect(() => {
    dispatch(fetchraceresult());
  }, [dispatch]);
  if (status === STATUSES.LOADING) {
    return <></>;
  }

  if (status === STATUSES.ERROR) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        No Result Found
      </h2>
    );
  }

  return (
    <>
      <div className="resultCard">
        <div className="resultCardHeader">
          <h2>{t("Live_Results")}</h2>
          {raceresult === null || raceresult.RaceResultData === undefined ? (
            <h3
              style={{
                textAlign: "center",
              }}
            >
              No Data
            </h3>
          ) : (
            <>
              <div
                className="livedatacard"
                onClick={() => handleShow1(raceresult._id)}
              >
                <div>
                  <p className="result_match_name">
                    {cookiedata === "en" ? (
                      <>
                        {raceresult.RaceNameModelData === null ? (
                          <></>
                        ) : (
                          raceresult.RaceNameModelData.NameEn
                        )}
                      </>
                    ) : (
                      <>
                        {raceresult.RaceNameModelData === null ? (
                          <></>
                        ) : (
                          raceresult.RaceNameModelData.NameAr
                        )}
                      </>
                    )}
                  </p>
                  <div className="live_result_data">
                    <span className="result_match_left">
                      <p className="result_match_raceNo">
                        {t("Race")} {raceresult.WeatherDegree}
                      </p>
                      <p className="result_match_totalRunner">
                        {raceresult.RaceResultData.length === undefined ? (
                          <></>
                        ) : (
                          raceresult.RaceResultData.length
                        )}{" "}
                        {t("Runner")}
                      </p>
                    </span>
                  </div>

                  <div className="customers13">
                    <table className="customers1">
                      <thead>
                        <th>{t("Positions")}</th>
                        <th>{t("Results")}</th>
                        <th>{t("Win")}</th>
                        <th>{t("Place")}</th>
                        <th>
                          {t("OffTime")}:{raceresult.RaceResultData[0].RaceTime}
                          h
                        </th>
                      </thead>
                      {raceresult.RaceResultData.slice(0, 3).map(
                        (data, index) => {
                          return (
                            <tr key={data._id}>
                              <td>{index + 1}</td>
                              <td>
                                {cookiedata === "en" ? (
                                  <>
                                    {data.HorseIDData.NameEn}(
                                    {data.FinalPositionDataHorse.Rank})
                                  </>
                                ) : (
                                  <>
                                    {data.HorseIDData.NameAr}(
                                    {data.FinalPositionDataHorse.Rank})
                                  </>
                                )}
                              </td>
                              <td>{data.CumulativeDistance}</td>
                              <td>
                                {data.HorseIDData.HorseStatus === true ? (
                                  <>Yes</>
                                ) : (
                                  <>No</>
                                )}
                              </td>
                              <td
                                style={{
                                  display: "flex",
                                  justifyContent: "space-evenly",
                                }}
                              >
                                {/* <p>Forecast (7-5)</p> <p>76.43</p> */}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="popupheader" closeButton>
          {/* <h3>Result Detail</h3> */}
        </Modal.Header>
        <Modal.Body>
          <ResultScreen data={modaldata} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
export default Result;
