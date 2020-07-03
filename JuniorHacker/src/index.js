import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import 'react-bnb-gallery'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.render(
  <React.Fragment>
   
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
