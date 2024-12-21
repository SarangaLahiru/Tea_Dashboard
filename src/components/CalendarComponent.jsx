import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarSection = () => (
  <div className="bg-white rounded shadow p-4 ">
    <h3 className="text-lg font-bold mb-4">Calendar</h3>
    <Calendar />
  </div>
);

export default CalendarSection;
