import Accordion from "react-bootstrap/Accordion";
import { RaceCardData } from "../../data/data";
import shirt from "../../assets/image 5.png";
import pic from "../../assets/Ellipse 7.png";
const Card = () => {
  const myPara = {
    fontWeight: "700",
    fontSize: "12px",
    color: "rgba(0, 0, 0, 0.5)",
  };
  const myPara1 = {
    fontWeight: "700",
    fontSize: "12px",
    color: "#000",
  };
  const btnNew = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "3px 10px",
    gap: "10px",
    width: "96px",
    height: "21px",
    background: "#19469D",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
  };
  const btnNew1 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "3px 10px",
    gap: "10px",
    width: "96px",
    height: "21px",
    background: "#FF0000",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
  };
  return (
    <div className="forfexclass">
      <Accordion defaultActiveKey="1"  >
        {RaceCardData.map((item) => {
          return (
            <div style={{
                alignItem:'center'
              }}>
              {item.races.map((race) => {
                return (
                  <div>
                    <Accordion.Item eventKey={race.id}>
                      <Accordion.Header>
                        <div className="cardracesAccordion">
                          <div className="cardraces1">
                            <img src={shirt} alt="" />
                            <span className="cardraces1box">1-3-22</span>
                          </div>
                          <div className="cardraces2">
                            <div style={{ display: "flex", gap: "10px" }}>
                              <p
                                style={{
                                  fontWeight: "700",
                                  fontSize: "19.6px",
                                  lineHeight: "24px",
                                  color: "#19469D",
                                }}
                              >
                                {race.owner}{" "}
                              </p>
                              <p style={myPara}>5yrs GR H (242)</p>
                            </div>
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <p style={myPara}>
                                <b>Dam</b> :Tapit
                              </p>
                              <p style={myPara}>
                                <b>Sire</b> :Los
                              </p>
                              <p style={myPara}>
                                <b>G.Sire</b> : Ojitos
                              </p>
                            </div>
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <p
                                style={{
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  lineHeight: "15px",
                                  color: "#FF0000",
                                }}
                              >
                                David & Nicola Barron{" "}
                              </p>
                              <p
                                style={{
                                  fontWeight: "300",
                                  fontSize: "9px",
                                  lineHeight: "15px",
                                  color: "rgba(0, 0, 0, 0.5)",
                                }}
                              >
                                (8 - 3 - 2 - 8 - 4)
                              </p>
                            </div>
                          </div>
                          <div className="cardraces3">
                            <div>
                              <p style={myPara1}>Tadhg O’Shea</p>
                              <p style={myPara1}>56kg</p>
                            </div>
                            <div>
                              <img src={pic} alt="" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="pmclass">
                            <p>PM: AED 55,000</p>
                            <p>BTO: AED 55,000</p>
                            <p>SP: AED 55,000</p>
                          </div>
                          <div className="uaecareer">
                            <p>UAE Career: 47 (2 - 8 - 4)</p>
                            <p>Lifetime: 47 (2 - 8 - 4)</p>
                            <p>Turf :47 (2 - 8 - 4) </p>
                            <p>Durt :47 (2 - 8 - 4) </p>
                            <p>Dist: 47 (2 - 8 - 4) </p>
                            <p>AW :47 (2 - 8 - 4) </p>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <button style={btnNew} onClick={() => {alert('Tricast')}}>Tricast</button>
                          <button style={btnNew1} onClick={() => {alert('Pick Six')}}> Pick Six</button>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="">
                          <div className="BodyNew">
                            <table className="customers">
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
                              </tr>
                            </table>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                );
              })}
            </div>
          );
        })}
      </Accordion>
    </div>
  );
};
export default Card;
