import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactCore from './formreactjs/cacuDBT';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactCore/>
  </React.StrictMode>
);

reportWebVitals();
