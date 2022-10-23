import '../../CSS/HomeCSS/result.css';
import { MatchData } from '../../../data/data';

const Result = () => {
  return (
    <>
    <div className="resultCard">
      <div className='resultCardHeader'>
        <h2>Live Results</h2>
        <div className='livedatacard'>
        {
          MatchData.map((item) => {
            return(
              <div key={item.id}>
                <p className='result_match_name'>{item.name}</p>
                <div className='live_result_data'>
                <span className='result_match_left'>
                <p className='result_match_raceNo'>Race {item.raceNo}</p>
                <p className='result_match_totalRunner'>{item.totalRunner} Runner</p>
                </span>
                <span className='result_match_right'>
                <p >Distance: {item.distance}</p>
                <p >{item.flat} Race</p>
                <p >Surface {item.surface} </p>
                <p>Going {item.going}</p>
                </span>
                </div>
                <table className="customers1">
                <thead className='resulttablehome'>
                    <th>Positions</th>
                    <th>Win</th>
                    <th>Place</th>
                    <th>Off Time {item.offtime}</th>
                  </thead>
                  {
                    item.player.map((data) => {
                      return(
                        <tr key={data.id}>
                        <td>{data.position}</td>
                        <td>{data.name}</td>
                        <td>{data.win}</td>
                        <td>{data.place}</td>
                      </tr>
                      )
                    })
                  }
                 
                </table>

              </div>
            )
          })
        }
        </div>
      </div>
    </div>
    </>
  )
}
export default Result