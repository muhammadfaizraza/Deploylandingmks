import Frame from '../../../assets/Frame.png'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
     <div className="bannerHome">
       <div className='bannerCard'>
        <img src={Frame} alt="" />
        <div className='bannerText'>
          <h1 className='bannerText1'>{t('bannerText1')}</h1>
          <h1 className='bannerText2'>{t('bannerText2')}</h1>
          <button className='registerbtn' onClick={() => navigate('/login')}>{t('RegisterNow')}</button>
        </div>
       </div>
     </div>
    </>
  )
}
export default Banner