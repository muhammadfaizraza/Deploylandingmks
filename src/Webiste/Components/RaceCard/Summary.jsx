import { RaceCardData } from "../../data/data"
import Shirt from '../../assets/image 5.png'

const Summary = () => {
  return (
    <div className="Summary">
       <div className="SummaryDistance">
        <p>Distance</p>
        {
          RaceCardData.map((item) =>{
            return(
              <div key={item.id}>
              {
                item.races.map((race) => {
                  return(
                    <div  className="Summarydata" key={race.id}>
                     <p>{race.raceNo}</p>
                     <img src={Shirt} alt="" />
                     <p></p>{race.clubname}
                    </div>
                  )
                })
              }
              </div>
            )
          })
        }
       </div>
       <div className="SummaryDistance">
        <p>Class</p>
        {
          RaceCardData.map((item) =>{
            return(
              <div>
              {
                item.races.map((race) => {
                  return(
                    <div  className="Summarydata">
                     <p>{race.raceNo}</p>
                     <img src={Shirt} alt="" />
                     <p></p>{race.clubname}
                    </div>
                  )
                })
              }
              </div>
            )
          })
        }
       </div>
       <div className="SummaryDistance">
        <p>Training</p>
        {
          RaceCardData.map((item) =>{
            return(
              <div>
              {
                item.races.map((race) => {
                  return(
                    <div  className="Summarydata">
                     <p>{race.raceNo}</p>
                     <img src={Shirt} alt="" />
                     <p></p>{race.clubname}
                    </div>
                  )
                })
              }
              </div>
            )
          })
        }
       </div>
       <div className="SummaryDistance">
        <p>Pedigree</p>
        {
          RaceCardData.map((item) =>{
            return(
              <div>
              {
                item.races.map((race) => {
                  return(
                    <div  className="Summarydata">
                     <p>{race.raceNo}</p>
                     <img src={Shirt} alt="" />
                     <p></p>{race.clubname}
                    </div>
                  )
                })
              }
              </div>
            )
          })
        }
       </div>
       <div className="SummaryDistance">
        <p>Race Course</p>
        {
          RaceCardData.map((item) =>{
            return(
              <div>
              {
                item.races.map((race) => {
                  return(
                    <div  className="Summarydata">
                     <p>{race.raceNo}</p>
                     <img src={Shirt} alt="" />
                     <p></p>{race.clubname}
                    </div>
                  )
                })
              }
              </div>
            )
          })
        }
       </div>
       <div className="SummaryDistance">
        <p>Overall</p>
        {
          RaceCardData.map((item) =>{
            return(
              <div>
              {
                item.races.map((race) => {
                  return(
                    <div  className="Summarydata">
                     <p>{race.raceNo}</p>
                     <img src={Shirt} alt="" />
                     <p></p>{race.clubname}
                    </div>
                  )
                })
              }
              </div>
            )
          })
        }
       </div>
    </div>
  )
}
export default Summary