import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </>
  );
}

export default App;
