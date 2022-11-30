import { RaceCardData } from "../../data/data"
import horse from '../../assets/horse.png'
import ScrollContainer from "react-indiana-drag-scroll"

const Predictor = () => {
  return (
    <ScrollContainer className="scroll-container">
    <div>
      {
        RaceCardData.map((item) => {
          return(
        
            <div className="predictor">
            {
              item.predictor.map((predict) => {
                const { name, position, score} = predict;
                return(
            
                  <div className="predict" >
                     <>
                     <span className="predictdata"
                     style={{"marginLeft": `${score}px`,
                     transition:
                     'margin-left 2s',
                   }}
                     >
                     <span className="innerpredictdata"
                     
                     >
                     <h6
                      
                     >{name}</h6>
                     <p>score {score}</p>
                     </span>
                    <img src={horse} alt="" />
                     </span>
                     </>
                     <button>{position}</button>
                  </div>
              
                )
              })
            }
            </div>
          )
        })
      }
    </div>
        </ScrollContainer>
  )
}
export default Predictor