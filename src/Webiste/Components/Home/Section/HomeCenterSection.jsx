import Banner from "../Components/Banner";
import Result from "../Components/Result";
import Graph from "../Components/Graph";
import Prediction from "../Components/Prediction";
const HomeCenterSection = () => {
  return (
    <>
      <div className="HomeCenterSection">
        <Banner />
        <Result />
        <div className="chartPrediction">
          <Graph />
          <Prediction />
        </div>
      </div>
    </>
  )
}
export default HomeCenterSection