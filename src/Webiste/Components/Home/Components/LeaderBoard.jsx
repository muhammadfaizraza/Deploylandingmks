import '../../CSS/HomeCSS/Competition.css';
import {LeaderBoard1} from '../../../data/data'
import flag from '../../../assets/United Arab Emirates.png'
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';
import Cookies from "js-cookie";


const LeaderBoard = () => {
  const {t} = useTranslation();
    const cookiedata = Cookies.get("i18next");

  return (
    <>
      <div className='Competition'>
        <div className='CompetitionHeader'>
          <h2>{t('LEADERBOARD')}</h2>
          <img src={flag} alt="" />
        </div>
        <div className='LeaderData'>
        <Accordion defaultActiveKey="1">
        {
          LeaderBoard1.map((item) => {
            return(
              <div className='Competitionitem' key={item.id}>
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header className='AccordionHeader11'>
                  <div className='AccordionHeader'>
                    <p>{t("LeaderBoard")}</p>
                    <p></p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                {
                    item.matches.map((data) => {
                      return(
                        <div className='Competition_Matches'>
                          <p>{cookiedata === "en" ? <>{data.name}</> : <>{data.namear}</>}</p>
                         
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
export default LeaderBoard