import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AppProvider from "./context/AppProvider";

import "./styles/auth.css";
import "./styles/dashboard.css";
import "./styles/profile.css";
import "./styles/resume.css";
import "./styles/application.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);