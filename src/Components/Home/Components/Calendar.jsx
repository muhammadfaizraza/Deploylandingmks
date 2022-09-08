import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";

const Calendar1 = () => {
    const [value, onChange] = useState(new Date());
  return (
    <>
       <Calendar onChange={onChange} value={value} classNam="calenderin" />
    </>
  )
}
export default Calendar1