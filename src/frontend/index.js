import React from 'react';
import App from './routes/App';
import ReactDOM from 'react-dom';
import './assets/styles/App.scss';

// cosas para server side rendering
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

const history = createBrowserHistory();
ReactDOM.hydrate(
  <Router history={history}>
    <App/>
  </Router>
  , 
  document.getElementById('app')
);
