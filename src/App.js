import MainRoutes from "./MainRoutes/MainRoutes";
import FavContextProvider from "./client/context/FavContextProvider";
import { BrowserRouter } from "react-router-dom";
import React from "react";
function App() {
  return (
    <>
      <React.StrictMode>
        <FavContextProvider>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </FavContextProvider>
      </React.StrictMode>
    </>
  );
}

export default App;
