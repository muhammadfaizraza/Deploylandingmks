import { MatchData } from "../../../data/data"
import { useTranslation } from "react-i18next";
import {fetchPredictionRace} from '../../../redux/getReducer/getPredictionSlice'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const Prediction = () => {

  const {t} = useTranslation();
  const { data: PredictionRace } = useSelector((state) => state.PredictionRace);
  const dispatch = useDispatch();
  const cookiedata = Cookies.get('i18next')


  useEffect(() => {
    dispatch(fetchPredictionRace());
  }, []);

  console.log(PredictionRace.length,'PredictionRace')
  console.log(PredictionRace,'PredictionRace')

  return (
    <>
      <div className="PredictionCard">
        <div className="presictData">
          <h6>{t('live_prediction')}</h6>
          {
            PredictionRace.length === 0 ? <>  
            </> : <>
            <div className="MatchDataPredict">
                  <h3>{cookiedata === "en" ? <>{PredictionRace.RaceToBePredictData.RaceNameModelData.NameEn}</>:<>{PredictionRace.RaceToBePredictData.RaceNameModelData.NameAr}</>}</h3>
                  <span className="PredictionFlex">
                    <p> {t("Race")}-{PredictionRace.RaceToBePredictData.RaceNumber}</p>
                    <p>{PredictionRace.RaceToBePredictData.RacehorsesData ? <>{PredictionRace.RaceToBePredictData.RacehorsesData[0].TotalRunners}</> : <></>} {t("Runner")}</p>
                    {/* <p> {t("min")}</p> */}
                  </span>
                  <div className="playerPredictTable">
                  {
                    PredictionRace.RaceToBePredictData.RaceToBePredictData.map((data) => {
                      return(
                        <>
                         <span className="Predictiontable">
                          <p>{cookiedata === "en" ? <>{data.HorseNo1Data.NameEn}</> : <>{data.HorseNo1Data.NameAr}</>}</p>
                          <p>{data.Remarks}</p>
                        </span>
                        <span className="Predictiontable">
                        <p>{cookiedata === "en" ? <>{data.HorseNo2Data.NameEn}</> : <>{data.HorseNo2Data.NameAr}</>}</p>
                          <p>{data.Remarks}</p>
                        </span>
                        <span className="Predictiontable">
                        <p>{cookiedata === "en" ? <>{data.HorseNo3Data.NameEn}</> : <>{data.HorseNo3Data.NameAr}</>}</p>
                          <p>{data.Remarks}</p>
                        </span>  
                        </>
                      )
                    })
                  }
                  </div>
                </div>
            </>

          }
        </div>
      </div>
    </>
  )
}
export default Prediction

{/* <div className="MatchDataPredict">
                  <h3>{item.name}</h3>
                  <span className="PredictionFlex">
                    <p> {t("Race")}{item.raceNo}</p>
                    <p>{item.totalRunner} {t("Runner")}</p>
                    <p>{item.time} {t("min")}</p>
                  </span>
                  <div className="playerPredictTable">
                  {
                    item.player.map((data) => {
                      return(
                        <span className="Predictiontable">
                          <p>{data.name}</p>
                          <p>{data.place}</p>
                        </span>
                      )
                    })
                  }
                  </div>
                </div> */}