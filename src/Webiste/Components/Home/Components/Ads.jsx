import React,{useEffect} from 'react';
import '../../CSS/HomeCSS/blogs.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAds, STATUSES } from "../../../redux/getReducer/getAdsSlice";
import img from '../../../assets/Rectangle 19.png'

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
      {/* {
        ads.slice(-1).map((item) => {
          return(
            <div className='adscardmapping'style={{
              position:'relative'
            }} >
            <img src={item.image} alt='' style={{
               width:'100%',
               height:'100%'
            }} />
            <p style={{
              position: 'absolute',
              top: '7px',
              left: '5px'
            }}>{item.TitleEn}</p>
            
            </div>
          )
        })
      } */}
      <div className='adscardmapping'style={{
              position:'relative'
            }} >
            <img src={img} alt='' style={{
               width:'100%',
               height:'100%'
            }} />
            <p style={{
              position: 'absolute',
              top: '7px',
              left: '5px'
            }}>Ads</p>
            
            </div>
    </div>
    </>
  )
}
export default Ads

{/* <h2 style={{
              position: 'absolute',
              top: '17px',
              left: '15px'
            }}>{item.DescriptionEn}</h2> */}