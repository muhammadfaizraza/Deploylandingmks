import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import Fade from 'react-reveal/Fade';

const Calendar1 = () => {
    const [value, onChange] = useState(new Date());
    console.log(value,'time and date')
  return (
    <>
    <Fade>
       <Calendar onChange={onChange} value={value} classNam="calenderin" />
    </Fade>
    </>
  )
}
export default Calendar1