import '../CSS/header.css';
import {useTranslation} from 'react-i18next';
import { Link } from 'react-router-dom';
const Header = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className='header'>
      <div className="d-flex menuNav">
        <Link to='/'>
        <img src={t('logo')} className='logoclass' alt="img"/>
        </Link>
        <Link to='/about' className="LinkStyle">
        <p>{t('about')}</p>
        </Link>
        <Link to='/statistics' className="LinkStyle">
        <p>{t('statistics')}</p>
        </Link>
        <Link to='/' className="LinkStyle">
        <p>{t('race_card')}</p>
        </Link>
        <Link to='/result' className="LinkStyle">
        <p>{t('result')}</p>
        </Link>
        <Link to='/racecourse' className="LinkStyle">
        <p>{t('race_course')}</p>
        </Link>
        <Link to='/competition' className="LinkStyle">
        <p>{t('competition')}</p>
        </Link>
        <Link to='/sponsor' className="LinkStyle">
        <p>{t('sponsors')}</p>
        </Link>
      </div>
      </div>
    </>
  )
}
export default Header