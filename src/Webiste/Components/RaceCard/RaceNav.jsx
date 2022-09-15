import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "../RaceCard/Card";
import Draw from "../RaceCard/Draw";
import Predictor from "../RaceCard/Predictor";
import PrintOut from "../RaceCard/Printout";
import Summary from "../RaceCard/Summary";
import TrackRecord from "../RaceCard/TrackRecord";

const RaceNav = () => {
  return (
    <div className="RaceNav">
      <Tabs
        defaultActiveKey="Card"
        id="uncontrolled-tab-example"
        className="mb-3 RaceNavItem"
      >
        <Tab eventKey="Card" title="Card" tabClassName="profile-tabitem">
          <div className="RaceDetailCard">
            <Card />
          </div>
        </Tab>
        <Tab
          eventKey="Predictor"
          title="Predictor"
          tabClassName="profile-tabitem"
        >
          <div className="RaceDetailCard">
            <Predictor />
          </div>
        </Tab>
        <Tab eventKey="Draw" title="Draw" tabClassName="profile-tabitem">
          <div className="RaceDetailCard">
            <Draw />
          </div>
        </Tab>
        <Tab eventKey="Summary" title="Summary" tabClassName="profile-tabitem">
          <div className="RaceDetailCard">
            <Summary />
          </div>
        </Tab>
        <Tab
          eventKey="Track Record"
          title="Track Record"
          tabClassName="profile-tabitem"
        >
          <div className="RaceDetailCard">
            <TrackRecord />
          </div>
        </Tab>
        <Tab
          eventKey="Printout"
          title="Printout"
          tabClassName="profile-tabitem"
        >
          <div className="RaceDetailCard">
            < PrintOut />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default RaceNav;
