import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import Notifications from "./Notifications/Notifications";

ReactDOM.render(
  <React.StrictMode>
    <App isLoggedIn/>
  </React.StrictMode>,
  document.getElementById("root")
);