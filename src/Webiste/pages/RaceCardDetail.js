import React from 'react'
import '../Components/CSS/RaceCardCSS/racedetail.css'
import { RaceCardData } from '../data/data'
import flag from '../assets/United Arab Emirates.png'
import prizeImage from '../assets/image 10 (1).png'
import RaceNav from '../../Webiste/Components/RaceCard/RaceNav'
const RaceCardDetail = () => {
  return (
    <>
      <div className='RaceCardDetail'>
        <div className='RaceDetailHeader'>
          {
            RaceCardData.map((item) => {
              return(
                <div key={item.id}>
                <span className='racenameflex'>
                <p>{item.racename}</p>
                <img src={flag} alt="" />
                </span>
                <p className='itemtime'>{item.time}</p>
                <div className='racedisc'>
                {
                  item.races.slice(0,1).map((race) => {
                    return(
                      <div className='itemraces' key={race.id}>
                        <div className='inner_itemraces'>
                          <span className='itemraces_left'>
                            <span className='race'>
                             
                              <>{race.time}</>
                            </span>
                            <span className='sponsor'></span>
                          </span>
                          <span className='itemraces_right'>
                          <span className='distance'> 
                            {race.distance}
                          </span>
                            <span className='Favourite'>
                              {race.Favourite}
                            </span>
                          </span>
                        </div>
                        <p><b>DESCRIPTION</b> :{race.detail}</p>
                      </div>
                    )
                  })
                }
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
              )
            })
          }
        </div>
        
      </div>
    </>
  )
}

export default RaceCardDetail
