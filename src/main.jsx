import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AppProvider from "./context/AppProvider";

// Theme Styles
import "./styles/variables.css";
import "./styles/global.css";

// Existing Styles
import "./styles/auth.css";
import "./styles/dashboard.css";
import "./styles/profile.css";
import "./styles/resume.css";
import "./styles/application.css";
import "./styles/sidebar.css";
import AppToastContainer from "./components/common/AppToastContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
        <AppToastContainer />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
