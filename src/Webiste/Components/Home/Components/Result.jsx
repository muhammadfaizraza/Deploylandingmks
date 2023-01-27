import { useEffect } from "react";
import "../../CSS/HomeCSS/result.css";

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchraceresult,
  STATUSES,
} from "../../../redux/getReducer/getRaceResult";
import Cookies from "js-cookie";

const Result = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data: raceresult, status } = useSelector((state) => state.raceresult);
  const cookiedata = Cookies.get("i18next");


  useEffect(() => {
    dispatch(fetchraceresult());
  }, []);
  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      ></h2>
    );
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
              <div className="livedatacard">
                <div key={raceresult._id}>
                  <p className="result_match_name">{raceresult.MeetingCode}</p>
                  <div className="live_result_data">
                    <span className="result_match_left">
                      <p className="result_match_raceNo">
                        Race {raceresult.WeatherDegree}
                      </p>
                      <p className="result_match_totalRunner">
                        {raceresult.RaceResultData.length === undefined ? (
                          <></>
                        ) : (
                          raceresult.RaceResultData.length
                        )}{" "}
                        Runner
                      </p>
                    </span>
                  </div>
                  <div className="customers12">
                    <span>
                      <p>{t("Positions")}</p>
                      <p>{t("Results")}</p>
                      <p>{t("Win")}</p>
                      <p>{t("Place")}</p>
                      <p>
                        {t("OffTime")}:<b></b>
                      </p>
                    </span>
                  </div>
                  <div className="customers13">
                    <table className="customers1">
                                        
                  {/* <thead className='resulttablehome'>
                      <th>Positions</th>
                      <th>Win</th>
                      <th>Win</th>
                      <th>Place</th>
                      <th>Off Time </th>
                    </thead> */}
                      {raceresult.RaceResultData.slice(0, 3).map(
                        (data, index) => {
                          return (
                            <tr key={data._id}>
                              <td>{index + 1}</td>
                              <td>{data.HorseIDData.NameEn}</td>
                              <td>{data.CumulativeDistance}</td>

                              <td>
                                {data.HorseIDData.HorseStatus === true ? <>Yes</> : <>No</>}
                              </td>
                              <td
                                style={{
                                  display: "flex",
                                  justifyContent: "space-evenly",
                                }}
                              >
                                <p>Forecast (7-5)</p> <p>76.43</p>
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
    </>
  );
};
export default Result;
