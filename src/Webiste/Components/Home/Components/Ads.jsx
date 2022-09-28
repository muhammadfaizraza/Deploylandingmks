import React,{useEffect} from 'react';
import '../../CSS/HomeCSS/blogs.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAds, STATUSES } from "../../../redux/getReducer/getAdsSlice";


const Ads = () => {

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
        Loading....
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
    <div className="AdsCard">
      {
        ads.slice(-1).map((item) => {
          return(
            <div className='adscardmapping'>
            {/* <img src={item.image} alt='' /> */}
            <h1>{item.TitleEn}</h1>
            <h2>{item.DescriptionEn}</h2>
            </div>
          )
        })
      }
    </div>
    </>
  )
}
export default Ads