import { MatchData } from "../../../data/data"
import { useTranslation } from "react-i18next";
import {fetchPredictionRace} from '../../../redux/getReducer/getPredictionSlice'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

const Prediction = () => {

  const {t} = useTranslation();
  const { data: PredictionRace } = useSelector((state) => state.PredictionRace);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchPredictionRace());
  }, []);

  console.log(PredictionRace,'PredictionRace')

  return (
    <>
      <div className="PredictionCard">
        <div className="presictData">
          <h6>{t('live_prediction')}</h6>
          {
            MatchData.map((item) => {
              return(
                <div className="MatchDataPredict">
                  <h3>{item.name}</h3>
                  {/* <h6>{t('live_prediction')}</h6> */}
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
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
export default Prediction