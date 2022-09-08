import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import Calendar1 from "./Calendar";
import { BsCalendarDate } from "react-icons/bs";
import flag from '../../../assets/United Arab Emirates.png'
import {RaceCourse} from '../../../data/data'

const Match = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="match">
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-4 "
      >
        <Tab eventKey="home" title="Current">
          <Accordion defaultActiveKey="0" flush>
            <div className="Currentpostdiv">
              <div className="Currentpostheader">
              <h2>United Arab Emirates</h2>
               <img src={flag} alt="" />
              </div>
              <div className='CompetitionData'>
        <Accordion>
        {
          RaceCourse.map((item) => {
            return(
              <div className='Competitionitem' key={item.id}>
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>
                  <div className='AccordionHeader'>
                    <p>{item.name}</p>
                    <p>{item.raceNo} Races</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                {
                    item.matches.map((data) => {
                      return(
                        <div className='Competition_Matches'>
                          <p>{data.name}</p>
                          <p>{data.id}</p>
                        </div>
                      )
                    })
                  }
                </Accordion.Body>
              </Accordion.Item>
              </div>
            )
          })
        }
        </Accordion>
        </div>
            </div>
          </Accordion>
        </Tab>
        <Tab eventKey="ante" title="Ante Post" className="Ante_Post">
        <div className="Currentpostdiv">
          <h3>Ante Post</h3>
            </div>
        </Tab>
        <Tab
          eventKey="contact"
          title={<BsCalendarDate className="calendericon" />}
        >
            <Calendar1 />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Match;
