import React,{useEffect} from 'react';
import '../../CSS/HomeCSS/blogs.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSponsor, STATUSES } from "../../../redux/getReducer/getSponsorSlice";
import img from '../../../assets/Rectangle 19.png'

const Sponsor = () => {
  const dispatch = useDispatch();
  const { data: sponsor, status } = useSelector((state) => state.sponsor);

  useEffect(() => {
    dispatch(fetchSponsor());
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
      <div className="sponsor">
      <div  className='sponsorimg'>
                <img src={img} alt=""/>
                <h2 className='first-txt'>SPONSOR
BANNER</h2>
                </div>
      {/* {
            sponsor.slice(0,1).map((item) => {
              return(
                <div  className='sponsorimg'>
                <img src={item.image} alt=""/>
                <h2 className='first-txt'>{item.DescriptionEn}</h2>
                </div>
              )
            })
          } */}
      </div>  
    </>
  )
}
export default Sponsor