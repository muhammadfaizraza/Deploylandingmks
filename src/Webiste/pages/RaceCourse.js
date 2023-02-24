import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCourse,
    STATUSES,
} from "../../Webiste/redux/getReducer/getRaceCourse";
import "../Components/CSS/RaceCardCSS/racecard.css";
import Layout from "../Components/Reuseable/layout";
import Footer from "../Components/Reuseable/Footer";
import CopyRight from "../Components/Reuseable/Copyrights";
import Lottie from "lottie-react";
import Animate from "../assets/loader.json";
import { Modal } from "react-bootstrap";
import Moment from "react-moment";
import RaceDetailPopup from "../Components/Home/Popup/RaceDetail";

const RaceCourse = () => {
    const dispatch = useDispatch();
    const { data: racecourse, status } = useSelector((state) => state.racecourse);

    const [modaldata, setmodaldata] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async (data) => {
        setmodaldata(data);
        await setShow(true);
    };

    useEffect(() => {
        dispatch(fetchCourse());
    }, []);



    if (status === STATUSES.LOADING) {

        <div>
            <Lottie animationData={Animate} loop={true} className="load" />
        </div>


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
            {racecourse.length === 0 ? (
                <>
                    <div className="NAclass">No Data</div>
                </>
            ) : (
                <>
                    <h2>
                        {" "}
                        <div className="RaceCard" >
                            {racecourse.map((item, ind) => {
                                const { RaceStatus } = item;
                                return (
                                    <React.Fragment key={item.id} onClick={() => handleShow(item)}>
                                        <div className="racepagehead">
                                            <div className="racepageheadflex">
                                                <div className="racepagename">
                                                    <span>
                                                        {item.TrackNameEn}
                                                        {/* {item.raceName} */}
                                                    </span>
                                                    <p>
                                                        <Moment format="D MMM YYYY" withTitle>
                                                            {
                                                                item.Day
                                                            }
                                                        </Moment></p>
                                                </div>

                                                <div className="raceStatus">
                                                    <span
                                                        className="raceStatusitem"
                                                        style={{ backgroundColor: "#5EC30F" }}
                                                    >
                                                        live
                                                    </span>
                                                    <span
                                                        className="raceStatusitem"
                                                        style={{ backgroundColor: "#FF9900" }}
                                                    >
                                                        due
                                                    </span>
                                                    <span
                                                        className="raceStatusitem"
                                                        style={{ backgroundColor: "#FF0000" }}
                                                    >
                                                        end
                                                    </span>
                                                    <span
                                                        className="raceStatusitem"
                                                        style={{ backgroundColor: "#000" }}
                                                    >
                                                        can
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {item.RaceCourseData.length === 0 ? (
                                            <>
                                                <h6 style={{ textAlign: 'center' }}> There is No race in this racecouse </h6>{" "}
                                            </>
                                        ) : (
                                            item.RaceCourseData.map((data, ind) => (
                                                <div className="racepagesection" onClick={() => handleShow(data)}>
                                                    <div className="racepageitem" key={data._id}>
                                                        <div>
                                                            <div className="RaceDetailsName">

                                                                <span
                                                                    className="racestatusclass racestatusclassMobile"
                                                                    style={{
                                                                        backgroundColor: `${data.RaceStatus === "Cancel"
                                                                            ? "#000000"
                                                                            : RaceStatus === "End"
                                                                                ? "#FF0000"
                                                                                : RaceStatus === "Live"
                                                                                    ? "#5EC30F"
                                                                                    : "#FF9900"
                                                                            }`,
                                                                        color: `${RaceStatus === "Cancel"
                                                                            ? "#ffff"
                                                                            : RaceStatus === "End"
                                                                                ? "#00000"
                                                                                : RaceStatus === "Live"
                                                                                    ? "#00000"
                                                                                    : "#000000"
                                                                            }`,
                                                                    }}
                                                                >
                                                                    <p className="racestatusclasstime"><Moment format="hh:mm:ss" className="racestatusclasstime">{item.DayNTime}</Moment></p>
                                                                </span>
                                                                <span
                                                                    style={{
                                                                        fontWeight: "300",
                                                                        fontSize: "20px",
                                                                        lineHeight: "24px",
                                                                    }}
                                                                >
                                                                    <h5>Race {ind + 1}</h5>
                                                                </span>
                                                                <h6>{data.RaceNameModelData.NameEn}</h6>
                                                                <br />
                                                            </div>
                                                            <div className="RaceDesc">
                                                                <p
                                                                    style={{
                                                                        maxWidth: "400px",
                                                                        overflow: "hidden",
                                                                        textOverflow: "ellipsis",
                                                                        whiteSpace: "nowrap",
                                                                    }}
                                                                >
                                                                    {data.DescriptionEn}
                                                                </p>
                                                            </div>
                                                            <div className="racedown">
                                                                {/* <p>Distance : {item.RaceCourseData === null ? <></> : <>{item.RaceCourseData.TrackLength}</>}</p> */}

                                                                <p>
                                                                    Distance :{" "}
                                                                    {data.TrackLengthData.TrackLength === null ? <>N/A</> : data.TrackLengthData.TrackLength}
                                                                </p>
                                                                <p> {data.RaceTypeModelData.NameEn} </p>
                                                                <p>Surface : {!data.GroundData ? <>N/A</> : data.GroundData.NameEn}</p>
                                                                <p>Going : {!data.GroundData ? <>N/A</> : data.RaceKindData.NameEn}</p>
                                                            </div>{" "}
                                                        </div>
                                                        <span
                                                            style={{
                                                                fontWeight: "300",
                                                                fontSize: "12px",
                                                                lineHeight: "15px",
                                                            }}
                                                        >
                                                            {item.owner === null ? <>N/A</> : data.owner}
                                                        </span>
                                                        <span
                                                            style={{
                                                                fontWeight: "300",
                                                                fontSize: "12px",
                                                                lineHeight: "15px",
                                                                color: " rgba(0, 0, 0, 0.5)",
                                                            }}
                                                        >
                                                            {item.runner}
                                                        </span>
                                                        <br />

                                                        <div className="racestatusright">
                                                            <span
                                                                className="racestatusclass"
                                                                style={{
                                                                    backgroundColor: `${data.RaceStatus === "Cancel"
                                                                        ? "#000000"
                                                                        : RaceStatus === "End"
                                                                            ? "#FF0000"
                                                                            : RaceStatus === "Live"
                                                                                ? "#5EC30F"
                                                                                : "#FF9900"
                                                                        }`,
                                                                    color: `${RaceStatus === "Cancel"
                                                                        ? "#ffff"
                                                                        : RaceStatus === "End"
                                                                            ? "#00000"
                                                                            : RaceStatus === "Live"
                                                                                ? "#00000"
                                                                                : "#000000"
                                                                        }`,
                                                                }}
                                                            >
                                                                <p className="racestatusclasstime"><Moment format="hh:mm:ss" className="racestatusclasstime">{item.DayNTime}</Moment></p>
                                                            </span>
                                                            <div>
                                                                <p
                                                                    style={{
                                                                        fontStyle: "normal",
                                                                        fontWeight: "300",
                                                                        fontSize: "9px",
                                                                        lineHeight: "11px",
                                                                        color: "rgba(0, 0, 0, 0.5)",
                                                                    }}
                                                                >
                                                                    Favourite
                                                                </p>
                                                                <p
                                                                    style={{
                                                                        fontStyle: "normal",
                                                                        fontWeight: "300",
                                                                        fontSize: "12px",
                                                                        lineHeight: "11px",
                                                                        color: "#000",
                                                                    }}
                                                                >
                                                                    {item.Favourite}
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p
                                                                    style={{
                                                                        fontStyle: "normal",
                                                                        fontWeight: "300",
                                                                        fontSize: "9px",
                                                                        lineHeight: "11px",
                                                                        color: "rgba(0, 0, 0, 0.5)",
                                                                    }}
                                                                >
                                                                    Non-Runner
                                                                </p>
                                                                <p
                                                                    style={{
                                                                        fontStyle: "normal",
                                                                        fontWeight: "300",
                                                                        fontSize: "12px",
                                                                        lineHeight: "11px",
                                                                        color: "#000",
                                                                    }}
                                                                >
                                                                    {item.runner}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </h2>
                </>
            )}
            <Footer />
            <CopyRight />
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <RaceDetailPopup data={modaldata} />
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
};
export default RaceCourse;