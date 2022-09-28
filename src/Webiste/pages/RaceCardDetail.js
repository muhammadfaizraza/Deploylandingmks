import React,{useEffect} from 'react';
import '../Components/CSS/RaceCardCSS/racedetail.css'
import { RaceCardData } from '../data/data'
import flag from '../assets/United Arab Emirates.png'
import prizeImage from '../assets/image 10 (1).png'
import RaceNav from '../../Webiste/Components/RaceCard/RaceNav'
import Layout from '../Components/Reuseable/layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRace, STATUSES } from "../redux/getReducer/getRaceCard";
import { useParams } from 'react-router-dom';
import Footer from '../Components/Reuseable/Footer';
import CopyRight from '../Components/Reuseable/Copyrights';

const RaceCardDetail = () => {

  const dispatch = useDispatch();
  const { data: racecard, status } = useSelector((state) => state.racecard);
  let {_id} = useParams();
  useEffect(() => {
    dispatch(fetchRace());
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
    <Layout />
      <div className='RaceCardDetail'>
        <div className='RaceDetailHeader'>
          {
            racecard.map((item) => {
              return(
                <>
                  {
                    item._id === _id ? <>
                    <div key={item.id}>
                <span className='racenameflex'>
                <p>{item.RaceCourse === null ? <></> : item.RaceCourse.TrackName}</p>
                <img src={flag} alt="" />
                </span>
                <p className='itemtime'>{item.DayNTime}</p>
                <div className='racedisc'>
                <div className='itemraces' key={item.id}>
                        <div className='inner_itemraces'>
                          <span className='itemraces_left'>
                            <span className='race'>   
                              <>{item.raceName}</>
                            </span>
                            <span className='sponsor'></span>
                          </span>
                          <span >
                            <h5>{item.raceName}</h5>
                          </span>
                          <span className='itemraces_right'>
                          <span className='distance'> 
                            {item.RaceCourse === null ? <></> : item.RaceCourse.TrackLength}
                          </span>
                            <span className='Favourite'>
                              {item.Favourite}
                            </span>
                          </span>
                        </div>
                        <p><b>DESCRIPTION</b> :{item.Description}</p>
                      </div>
                </div>
                <div className='prizecard'>
                  <p>Total Prize: <b>300,000 AED</b></p>
                  <div className='prizeposition'>
                  {
                    item.Prizes.map((prize) => {
                      return(
                        <div className='itemPrizes'>
                        <div className='innerprize'>
                        <p>{prize.position}</p>
                        <img src={prizeImage} alt="" />
                        </div>
                        <p>{prize.prize}</p>
                        </div>
                      )
                    })
                  }
                  </div>
                  
                </div>
                <RaceNav />
                </div>
                    </> : null
                  }
                </>
              )
            })
          }
        </div>
        
      </div>
      {/* <Footer />
      <CopyRight /> */}
    </>
  )
}

export default RaceCardDetail
