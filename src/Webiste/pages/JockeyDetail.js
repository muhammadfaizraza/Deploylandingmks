import Layout from "../Components/Reuseable/layout"
import '../Components/CSS/pagesCSS/about.css'
import Footer from '../Components/Reuseable/Footer.jsx';
import CoptRight from '../Components/Reuseable/Copyrights'
import React,{useEffect} from 'react';
import shirt from "../assets/image 5.png";
import profile from "../assets/Ellipse 7.png";
import flag from "../assets/France.png";

import "../Components/CSS/pagesCSS/horse.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BsFillCaretRightFill } from 'react-icons/bs';
import '../Components/CSS/pagesCSS/owner.css'

const JockeyDetail = (data) => {
  
  return (
    <>
    <div className="aboutpage">
      {/* <div className="aboutpageheader">
        <h2>MKS Racing JockeyDetail</h2>
      </div> */}
      <div className="aboutpagesection">
        <div className="RaceDetailCard">
      <div className="ownerdetailhead">
        <div className="ownername">
            <span>
            <img src={data.data.image} alt='' />
            </span>
            <span style={{
                fontWeight: '700',
                fontSize: '19.6px',
                lineHeight: '24px',
                color:'#19469D'
            }}>{data.data.Name}</span>
            <span>{data.data.Age}</span>
            <span>
            <img src={flag} alt='' />
            </span>
        </div>
        <div className="ownerimage">
            <span>
            <img src={shirt} alt='' />
            </span>
        </div>
      </div>
      <div className='horsebody'>
            <ListGroup >
            <ListGroup.Item className='horsebodyitem horsebodyitemfirst'>
            <p><b>IRE JUMPS</b> last 5 seasons Apr 2018 - Apr 2023</p>
            </ListGroup.Item>
            
            {/* <ListGroup.Item className='horsebodyitem'>
           
            </ListGroup.Item>
            <ListGroup.Item className='horsebodyitem1'>
           
            </ListGroup.Item>
            <ListGroup.Item className='horsebodyitem1'>
           
            </ListGroup.Item>
            <ListGroup.Item className='horsebodyitem1'>
           
           </ListGroup.Item> */}
            </ListGroup>
         </div>
         <div className="RaceNav">
      <Tabs
        id="uncontrolled-tab-example"
        className="mb-3 RaceNavItem"
      >
        <Tab eventKey="Form" title="Form" tabClassName="profile-tabitem">
          <div className="RaceDetailCard">
                          <div className="BodyNew">
                            <table className="customers horses1">
                              <tr>
                                <th>Date</th>
                                <th>Cr</th>
                                <th>Dist</th>
                                <th>TC</th>
                                <th>Type</th>
                                <th>Dts</th>
                                <th>time</th>
                                <th>Jockey</th>
                                <th>Wgt</th>
                                <th>FP</th>
                                <th>Les</th>
                                <th>RS</th>
                                <th>BtBy</th>
                                <th>Kgs</th>
                                <th>Draw</th>
                              </tr>
                            </table>
                          </div>
                          <div className="BodyNew1">
                            <table className="customers2">
                              <tr>
                                <th>12 Oct 22</th>
                                <th>Wol (T)</th>
                                <th>2400</th>
                                <th>D</th>
                                <th>S</th>
                                <th>Novice</th>
                                <th>02:05:55</th>
                                <th>Miss </th>
                                <th>58</th>
                                <th>6</th>
                                <th>16.25</th>
                                <th>5</th>
                                <th>67</th>
                                <th>5</th>
                                <th><BsFillCaretRightFill style={{
                                  color:'red'
                                }}/></th>
                              </tr>
                            </table>
                          </div>
                          <div className="BodyNew2">
                          <table className="customers2">
                              <tr>
                                <th>12 Oct 22</th>
                                <th>Wol (T)</th>
                                <th>2400</th>
                                <th>D</th>
                                <th>S</th>
                                <th>Novice</th>
                                <th>02:05:55</th>
                                <th>Miss </th>
                                <th>58</th>
                                <th>6</th>
                                <th>16.25</th>
                                <th>5</th>
                                <th>67</th>
                                <th>5</th>
                                <th><BsFillCaretRightFill style={{
                                  color:'red'
                                }}/></th>
                              </tr>
                            </table>
                          </div>
                          <div className="BodyNew3">
                          <table className="customers2">
                              <tr>
                                <th>12 Oct 22</th>
                                <th>Wol (T)</th>
                                <th>2400</th>
                                <th>D</th>
                                <th>S</th>
                                <th>Novice</th>
                                <th>02:05:55</th>
                                <th>Miss </th>
                                <th>58</th>
                                <th>6</th>
                                <th>16.25</th>
                                <th>5</th>
                                <th>67</th>
                                <th>5</th>
                                <th><BsFillCaretRightFill style={{
                                  color:'red'
                                }}/></th>
                              </tr>
                            </table>
                          </div>
          </div>
        </Tab>
        <Tab
          eventKey="Entries"
          title="Entries"
          tabClassName="profile-tabitem"
        >
          <div className="RaceDetailCard">
            retre
          </div>
        </Tab>
        <Tab eventKey="Entities" title="Entities" tabClassName="profile-tabitem">
          <div className="RaceDetailCard">
            retr
          </div>
        </Tab>
        <Tab eventKey="Horses" title="Horses" tabClassName="profile-tabitem">
          <div className="RaceDetailCard">
            <div className="Pedigree"></div>
          </div>
        </Tab>
        <Tab eventKey="Stats" title="Stats" tabClassName="profile-tabitem">
          <div className="RaceDetailCard">
            <div className="Pedigree"></div>
          </div>
        </Tab>
      </Tabs>
    </div>
    </div>
      </div>
    </div>
    </>
  )
}
export default JockeyDetail