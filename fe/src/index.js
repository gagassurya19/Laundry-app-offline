import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import bootstrap dan font-awesome
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/fontawesome/css/all.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);