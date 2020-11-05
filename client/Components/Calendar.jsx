import React, { useState } from 'react';
import Calendar from 'react-calendar';
import TaskListHolder from './TaskListHolder.jsx'

//calendar from react module, to change it: https://www.npmjs.com/package/react-calendar

function MyApp() {
  const [value, setValue] = useState(new Date());
  const [calendarDate, setCalendarDate] = useState('');

  function onChange(nextValue) {
    setValue(nextValue);
  }


  return (
    <>
    <Calendar
      onClickDay={(value, event) => setCalendarDate(value)}
      onChange={onChange}
      value={value}
    />
    <TaskListHolder calendarDate={calendarDate}/>
    </>
  );
}
export default MyApp; 