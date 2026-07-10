import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import AppProvider from "../../context/AppProvider";


const renderWithProviders = (
  ui
) => {
  return render(
    <BrowserRouter>
      <AppProvider>
        {ui}
      </AppProvider>
    </BrowserRouter>
  );
};


export default renderWithProviders;