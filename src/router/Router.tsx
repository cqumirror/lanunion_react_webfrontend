import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import RootPage from "../pages/root/Index";
import AboutPage from "../pages/about/Index";
import CheckPage from "../pages/check/Index";
import ComplainPage from "../pages/complain/Index";
import LankerPage from "../pages/lanker/Index";
import SuggestPage from "../pages/suggest/Index";
import RepairPage from "../pages/repair/Index";
// import AdminPage from "../pages/admin/Index";
import NotFoundPage from "../pages/404/Index";
import HeadBar from "../components/HeadBar";
import { Box } from "@mui/material";
import Footer from "../components/Footer";

export default function RouterList(): JSX.Element {
  return (
    <Routes>
      <Route element={<><HeadBar/><Box sx={{ paddingTop: "80px" }}><Outlet /></Box><Footer /></>}>
        <Route path='/' element={<RootPage />} />
        <Route path='about' element={<AboutPage/>} />
        <Route path='check' element={<CheckPage />} />
        <Route path='complain' element={<ComplainPage />} />
        <Route path='lanke' element={<LankerPage />} />
        <Route path='suggest' element={<SuggestPage />} />
        <Route path='repair' element={<RepairPage />} />
        <Route path='admin' element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}