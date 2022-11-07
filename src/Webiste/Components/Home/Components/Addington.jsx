import horse from '../../../assets/image 4.png'
import Counter from './Counter'
import {useTranslation} from 'react-i18next';

const Addington = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="Addington">
        <div className='AddingtonStyle'>
          <img src={horse} alt='' />
          <p className='Addingtonname'>{t('addington')}</p>
          <p  className='Addingtontimer'>
            <Counter />
          </p>
        </div>
      </div>
    </>
  )
}
export default Addington