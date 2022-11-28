import {News} from '../../../data/data'
import {useTranslation} from 'react-i18next';

const ExNews = () => {
  const { t } = useTranslation()

  return (
    <>
    <div className='exnews newsD'> 
     {
      News.map((item,index) => {
        return(
          <span className='newsflex ' key={item.id} >
            <p>{t('Exclusive')}</p>
            <p>{item.description}</p>
          </span>
        )
      })
     }
    </div>
    </>
  )
}
export default ExNews