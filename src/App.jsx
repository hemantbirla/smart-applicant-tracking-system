// ===============================
// Global Styles
// ===============================

import "react-toastify/dist/ReactToastify.css";

// ===============================
// Routing
// ===============================

import AppRoutes from "./routes/AppRoutes";

// ===============================
// Notifications
// ===============================

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AppRoutes />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;