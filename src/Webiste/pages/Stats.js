import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRace, STATUSES } from "../../Webiste/redux/getReducer/getRaceCard";
import "../Components/CSS/RaceCardCSS/racecard.css";
import { StatsData } from "../data/data";
// import {Link} from "react-router-dom";
import Layout from '../Components/Reuseable/layout';
import Footer from '../Components/Reuseable/Footer';
import CopyRight from '../Components/Reuseable/Copyrights';
import '../Components/CSS/pagesCSS/stats.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import ListGroup from 'react-bootstrap/ListGroup';


const Stats = () => {
  
  const dispatch = useDispatch();
  const { data: racecard, status } = useSelector((state) => state.racecard);
 
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
     <div className='statspage'>
       <div className='statsheader'>
         <p>Trainer Statistics</p>
         <div className='Statisticsbtn'>
         <>
      {['Year', 'Nationality', 'Racecourse', 'Distance', 'Race Type', 'Race Kind', 'Ground', 'Date', 'Win'].map(
        (variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            title={variant}
            className='statsheaderbtn'
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
           
          </DropdownButton>
        ),
      )}
         </>
         </div>
         <div className='statsbody'>
            <ListGroup >
            <ListGroup.Item className='statsbodyitem'>
            <ul style={{
                        display:'flex',
                        justifyContent:'space-between'
                      }}>
                        <li>Trainer</li>
                        <li>Runs</li>
                        <li>Wins</li>
                        <li>Places</li>
                        <li>Win</li>
                        <li>Place</li>
                        <li>Win P/L</li>
                        <li>EW P/L</li>
                        <li>A/E</li>
                        <li>IV</li>
                      </ul>
            </ListGroup.Item>
            {
              StatsData.map((item) => {
                return(
                  <>
                     <ListGroup.Item className='statsbodyitem'>
                      <ul style={{
                        display:'flex',
                        justifyContent:'space-between'
                      }}>
                        <li>{item.Trainer}</li>
                        <li>{item.Runs}</li>
                        <li>{item.Wins}</li>
                        <li>{item.Places}</li>
                        <li>{item.Win}</li>
                        <li>{item.Place}</li>
                        <li>{item.Win}</li>
                        <li>{item.EW}</li>
                        <li>{item.AE}</li>
                        <li>{item.IV}</li>
                      </ul>
                     </ListGroup.Item>
                  </>
                )
              })
            }
            </ListGroup>
         </div>
       </div>
     </div>
      <Footer />
      <CopyRight />
    </>
  );
};
export default Stats;
