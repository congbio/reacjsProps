import React from "react";
import ReactDOM from "react-dom/client";
// import ReactCore from './formreactjs/cacuDBT';
// import App from './formreactjs/ForomMenu/FormSelection';
import App from "./CRUD/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
