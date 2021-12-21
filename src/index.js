import React from 'react';
import ReactDOM from 'react-dom';
import RouteSwitch from './RouteSwitch';
import './styles/reset.css';
import './styles/Home.css';
import './styles/components.css';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
  document.getElementById('root')
);
