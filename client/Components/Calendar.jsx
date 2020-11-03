import React, { useState } from 'react';
import Calendar from 'react-calendar';

//calendar from react module, to change it: https://www.npmjs.com/package/react-calendar

function MyApp() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <Calendar
      onChange={onChange}
      value={value}
    />
  );
}
export default MyApp; 