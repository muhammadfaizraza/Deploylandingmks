import '../../CSS/HomeCSS/Competition.css';
import {RaceCourse} from '../../../data/data'
import flag from '../../../assets/United Arab Emirates.png'
import Accordion from 'react-bootstrap/Accordion';

const Competition = () => {
  return (
    <>
      <div className='Competition'>
        <div className='CompetitionHeader'>
          <h2>Competition</h2>
          <img src={flag} alt="" />
        </div>
        <div className='CompetitionData'>
        <Accordion defaultActiveKey="1">
        {
          RaceCourse.map((item) => {
            return(
              <div className='Competitionitem' key={item.id}>
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>
                  <div className='AccordionHeader'>
                    <p>{item.name}</p>
                    <p>{item.raceNo} Races</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                {
                    item.matches.map((data) => {
                      return(
                        <div className='Competition_Matches'>
                          <p>{data.name}</p>
                          <p>{data.id}</p>
                        </div>
                      )
                    })
                  }
                </Accordion.Body>
              </Accordion.Item>
              </div>
            )
          })
        }
        </Accordion>
        </div>
      </div>
    </>
  )
}
export default Competition