import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Copyrights = () => {
  const {t} = useTranslation();

  return (
    <>
      <div className='Copyrights'>
        <div className='copyrightinner'>© 2022 {t('Copyright')}</div>
        <div className='Policies'>
          <Link to='/policies'>
          <p>{t('Policies')}</p>
          </Link>
          <p>{t('Help')}t</p>
          <p>{t('TermsCondition')}</p>
        </div>
      </div>
    </>
  )
}

export default Copyrights
