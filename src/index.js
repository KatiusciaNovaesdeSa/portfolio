import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.register()


//serviceWorker.unregister();
