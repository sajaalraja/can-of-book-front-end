import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
// require('dotenv').config()
ReactDOM.render(
  <Auth0Provider
    domain='dev-c87my405.eu.auth0.com'
    clientId='1PIBoBIDSIn7KWZtT87mHDBPsBRO4lCO'
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);