import { MatchData } from "../../../data/data"

const Prediction = () => {
  return (
    <>
      <div className="PredictionCard">
        <div className="presictData">
          <h6>Live Prediction</h6>
          {
            MatchData.map((item) => {
              return(
                <div className="MatchDataPredict">
                  <h3>{item.name}</h3>
                  <span className="PredictionFlex">
                    <p> Race{item.raceNo}</p>
                    <p>{item.totalRunner} Runners</p>
                    <p>{item.time} min</p>
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