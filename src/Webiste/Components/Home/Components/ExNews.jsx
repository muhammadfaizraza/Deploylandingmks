import React,{useEffect} from 'react';
import {News} from '../../../data/data'
import {useTranslation} from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAds, STATUSES } from "../../../redux/getReducer/getAdsSlice";

const ExNews = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const { data: ads, status } = useSelector((state) => state.ads);

  useEffect(() => {
    dispatch(fetchAds());
  },[])
  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
   
      </h2>
    );
  }

  if (status === STATUSES.ERROR) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Something went wrong!
      </h2>
    );
  }
  return (
    <>
    <div className='exnews newsD'> 
     {
      ads.slice(-1).map((item) => {
        return(
          <span className='newsflex ' key={item.id} >
            <p>{t('Exclusive')}</p>
            <p>{item.DescriptionEn}</p>
          </span>
        )
      })
     }
    </div>
    </>
  )
}
export default ExNews