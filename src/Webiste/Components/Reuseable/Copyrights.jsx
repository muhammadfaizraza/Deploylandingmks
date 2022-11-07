import React from 'react'
import { useTranslation } from 'react-i18next';

const Copyrights = () => {
  const {t} = useTranslation();

  return (
    <>
      <div className='Copyrights'>
        <div className='copyrightinner'>© 2022 {t('Copyright')}</div>
        <div className='Policies'>
          <p>{t('Policies')}</p>
          <p>{t('Help')}t</p>
          <p>{t('TermsCondition')}</p>
        </div>
      </div>
    </>
  )
}

export default Copyrights
