import img1 from '../../../assets/Rectangle 19.png';
import React,{useEffect} from 'react';
import '../../CSS/HomeCSS/blogs.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSponsor, STATUSES } from "../../../redux/getReducer/getSponsorSlice";

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
      <div className="sponsor">
      {
            sponsor.slice(0,1).map((item) => {
              return(
                <div  className='sponsorimg'>
                <img src={item.image} alt=""/>
                </div>
              )
            })
          }
      </div>  
    </>
  )
}
export default Sponsor