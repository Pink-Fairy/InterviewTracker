import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import App from './App.js';
import './styles/style.css';



ReactDOM.render(<App />, document.querySelector('#root'));

// // uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';
// ReactDOM.render(
//     <App />,
//   document.getElementById("root")
// );