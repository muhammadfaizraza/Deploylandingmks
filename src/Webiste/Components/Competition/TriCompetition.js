import React, { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "../CSS/competitionModal.css";
import img from "../../assets/image 10.png";
import img1 from "../../assets/image 10 (1).png";
import ScrollContainer from "react-indiana-drag-scroll";
import { useDispatch, useSelector } from "react-redux";
// import { fetchcompetition, STATUSES } from "../../redux/getReducer/getCompetition";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const options = [
  {
    id: "1",
    name: "East Street Revue ",
  },
  {
    id: "2",
    name: "East Street Revue ",
  },
  {
    id: "3",
    name: "East Street Revue ",
  },
  {
    id: "4",
    name: "East Street Revue ",
  },
  {
    id: "5",
    name: "East Street Revue ",
  },
  {
    id: "6",
    name: "East Street Revue ",
  },
  {
    id: "7",
    name: "East Street Revue ",
  },
];
const Trophy = [
  {
    id: "1st",
    name: "East Street Revue ",
    image: img1,
    pts: "20PTS",
    HNo: "1",
  },
  {
    id: "2nd",
    name: "East Street Revue ",
    image: img,
    pts: "20PTS",
    HNo: "2",
  },
  {
    id: "3rd",
    name: "East Street Revue ",
    image: img,
    pts: "20PTS",
    HNo: "3",
  },
  {
    id: "4th",
    name: "East Street Revue ",
    image: img,
    pts: "20PTS",
    HNo: "5",
  },
  {
    id: "5th",
    name: "East Street Revue ",
    image: img,
    pts: "20PTS",
    HNo: "5",
  },
];
const Competition = (data) => {
  const [radioValue, setRadioValue] = useState("1");

  // const dispatch = useDispatch();
  // const { data: competition, status } = useSelector((state) => state.competition);

  // useEffect(() => {
  //   dispatch(fetchcompetition());
  // },[])

  console.log(data.data.length, "data is tri");
  console.log(data.data, "data is tri");

  return (
    <div className="CompetitionModal">
      {data.data.length > 0 ? (
        <div className="CompetitionModalHead">
          <div className="CompetitionName">
            <h2>
              {data.data[0].NameEn === undefined ? (
                <>N/A</>
              ) : (
                data.data[0].NameEn
              )}
            </h2>
            <h3>
              {data.data[0].CompetitionCategoryData.NameEn === undefined ? (
                <>N/A</>
              ) : (
                data.data[0].CompetitionCategoryData.NameEn
              )}
            </h3>
          </div>
          <div className="CompetitionPoint">

            <Tabs
              defaultActiveKey="0"
              transition={false}
              id="noanim-tab-example"
              className="mb-3 cancel" 
            >
            
              {data.data[0].CompetitionRacesPointsModelData.map(
                (data, index) => {
                  const { RaceStatus } = data;
                  return (
                    <Tab eventKey={index} title={index + 1} className='myd tabCompetitionPoint approval-details-tab'  >
                      <span className="CompetitionCard statusrace"  style={{
              backgroundColor: `${
                RaceStatus === "Cancel"
                  ? "#000000"
                  : RaceStatus === "End"
                  ? "#FF0000"
                  : RaceStatus === "Live"
                  ? "#5EC30F"
                  : "#FF9900"
              }`,
              color: `${
                RaceStatus === "Cancel"
                  ? "#ffff"
                  : RaceStatus === "End"
                  ? "#00000"
                  : RaceStatus === "Live"
                  ? "#00000"
                  : "#000000"
              }`,
            }}>{RaceStatus}</span>
                      <ScrollContainer className="scroll-container">
                        <div className="CompetitionPrize">
                        <div className="Competitiontrophy">
                       <div className="Trophydata">
                      <span>1st</span>
                      <span>
                        <img src={img1} alt="" />
                      </span>
                      <div className="Trophydata_P">
                        <p>{data.CompetitionRacesPointsModel.Points}PTS</p>
                        <h6>{data.FirstPrice} AED</h6>
                      </div>
                    </div>
                    <div className="Trophydata">
                      <span>2nd</span>
                      <span>
                        <img src={img} alt="" />
                      </span>
                      <div className="Trophydata_P">
                      <p>{data.CompetitionRacesPointsModel.Points}PTS</p>
                        <h6>{data.SecondPrice} AED</h6>
                      </div>
                    </div>
                    <div className="Trophydata">
                      <span>3rd</span>
                      <span>
                        <img src={img} alt="" />
                      </span>
                      <div className="Trophydata_P"> 
                      <p>{data.CompetitionRacesPointsModel.Points}PTS</p>
                        <h6>{data.ThirdPrice} AED</h6>
                      </div>
                    </div>
                    <div className="Trophydata">
                      <span>4th</span>
                      <span>
                        <img src={img} alt="" />
                      </span>
                      <div className="Trophydata_P">
                      <p>{data.CompetitionRacesPointsModel.Points}PTS</p>
                        <h6>{data.FourthPrice} AED</h6>
                      </div>
                    </div>
                    <div className="Trophydata">
                      <span>5th</span>
                      <span>
                        <img src={img} alt="" />
                      </span>
                      <div className="Trophydata_P">
                      <p>{data.CompetitionRacesPointsModel.Points}PTS</p>
                        <h6>{data.FifthPrice} AED</h6>
                      </div>
                    </div>
                    <div className="Trophydata">
                      <span>6th</span>
                      <span>
                        <img src={img} alt="" />
                      </span>
                      <div className="Trophydata_P">
                      <p>{data.CompetitionRacesPointsModel.Points}PTS</p>
                        <h6>{data.SixthPrice} AED</h6>
                      </div>
                    </div>
                  </div>
                        </div>
                      </ScrollContainer>
                      <div>
                        {options.map((item) => {
                          return (
                            <ScrollContainer className="scroll-container">
                              <div className="CompetitionHorse">
                                <p>{item.name}</p>
                                <div className="CompetitionHorseselect">
                                  {options.slice(0, 5).map((data) => {
                                    return (
                                      <ToggleButton
                                        key={data.id}
                                        type="radio"
                                        variant={
                                          data.id % 2
                                            ? "outline-primary"
                                            : "outline-primary"
                                        }
                                        name="radio"
                                        value={data.id}
                                        checked={radioValue === data.value}
                                        onChange={(e) =>
                                          setRadioValue(e.currentTarget.value)
                                        }
                                        className="ToggleButton"
                                      >
                                        {data.id}
                                      </ToggleButton>
                                    );
                                  })}
                                </div>
                              </div>
                            </ScrollContainer>
                          );
                        })}
                      </div>
                    </Tab>
                  );
                }
              )}
            </Tabs>
          </div>
        </div>
      ) : (
        <>No Data</>
      )}
      <div className="CompetitionBtn">
        <button>SAVE & CLOSE</button>
      </div>
    </div>
  );
};

export default Competition;
