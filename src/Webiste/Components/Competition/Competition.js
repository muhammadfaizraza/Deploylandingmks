import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "../CSS/competitionModal.css";
import img from "../../assets/image 10.png";
import img1 from "../../assets/image 10 (1).png";

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
const Competition = () => {
  const [radioValue, setRadioValue] = useState("1");

  return (
    <div className="CompetitionModal">
      <div className="CompetitionModalHead">
        <div className="CompetitionName">
          <h2>Competition Name XYZ</h2>
          <h3>Competition Type</h3>
        </div>
        <div className="CompetitionPoint">
          {options.map((item) => {
            return <div className="CompetitionCard">{item.id}</div>;
          })}
        </div>
        <div className="CompetitionPrize">
          <div className="Competitiontrophy">
            {Trophy.map((item) => {
              return (
                <div className="Trophydata">
                  <span>{item.id}</span>
                  <span>
                    <img src={item.image} alt="" />
                  </span>
                  <div className="Trophydata_P">
                    <p>{item.pts}</p>
                    <p>HORSE # {item.HNo}</p>
                    <p>{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          {options.map((item) => {
            return (
              <div className="CompetitionHorse">
                <p>{item.name}</p>
                <div className="CompetitionHorseselect">
                  {options.slice(0, 5).map((data) => {
                    return (
                      <ToggleButton
                        key={data.id}
                        type="radio"
                        variant={
                          data.id % 2 ? "outline-primary" : "outline-primary"
                        }
                        name="radio"
                        value={data.id}
                        checked={radioValue === data.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                        className='ToggleButton'
                      >
                        {data.id}
                      </ToggleButton>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="CompetitionBtn">
        <button>SAVE & CLOSE</button>
      </div>
    </div>
  );
};

export default Competition;
