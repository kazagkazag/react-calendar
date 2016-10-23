import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App
      selectedDay="05.10.2016"
      numberOfMonths="2"
      disableBefore="04.10.2016"
      disableAfter="25.10.2016"
  />,
  document.getElementById('root')
);
