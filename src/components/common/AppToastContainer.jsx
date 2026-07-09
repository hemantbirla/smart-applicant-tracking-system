import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../../styles/toast.css";

const AppToastContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      hideProgressBar={false}
      theme="colored"
    />
  );
};

export default AppToastContainer;