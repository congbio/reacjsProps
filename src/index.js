import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import States from './vidu3statevsprops/State';
import reportWebVitals from './reportWebVitals';
import Car from './vidu5onclick/onclick';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car />
  </React.StrictMode>
);

reportWebVitals();
