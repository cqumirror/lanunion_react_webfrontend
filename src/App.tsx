import React from "react";
import HeadBar from "./components/HeadBar/HeadBar";
import { BrowserRouter, Outlet } from "react-router-dom";
import Router from "./router/Router";

function App() {
  return (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  );
}

export default App;
