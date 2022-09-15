import '../CSS/header.css';
import {useTranslation} from 'react-i18next';
import { Link } from 'react-router-dom';
const Header = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className='header'>
      <div className="d-flex menuNav">
        <img src={t('logo')} className='logoclass' alt="img"/>
        <p>{t('about')}</p>
        <p>{t('statistics')}</p>
        <Link to='racecard' className="LinkStyle" target='_blank'>
        <p>{t('race_card')}</p>
        </Link>
        <p>{t('result')}</p>
        <p>{t('race_course')}</p>
        <p>{t('competition')}</p>
        <p>{t('sponsors')}</p>
      </div>
      </div>
    </>
  )
}
export default Header