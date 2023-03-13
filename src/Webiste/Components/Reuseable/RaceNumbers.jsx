import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRacewithNumberSlice } from "../../redux/getReducer/getRacewithNumber";

const RaceNumbers = ({ id }) => {
  const dispatch = useDispatch();
  const { data: racewithnumber } = useSelector((state) => state.racewithnumber);

  useEffect(() => {
    dispatch(fetchRacewithNumberSlice(id));
  }, []);
  return (
    <div className="racestatuscolor">
      {racewithnumber.map(() => (
        <>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </>
      ))}
    </div>
  );
};

export default RaceNumbers;
