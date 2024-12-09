import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import HeadBar from "../components/HeadBar/HeadBar";
import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";
import { AboutPage, AdminPage, CheckPage, ComplainPage, LankerPage, NotFoundPage, RepairPage, RootPage, SuggestPage, UserInfoPage } from "../pages";

export default function RouterList(): JSX.Element {
  return (
    <Routes>
      <Route element={<><HeadBar/><Box sx={{ paddingTop: "70px", paddingBottom: "80px" }}><Outlet /></Box><Footer /></>}>
        <Route path='/' element={<RootPage />} />
        <Route path='about' element={<AboutPage/>} />
        <Route path='check' element={<CheckPage />} />
        <Route path='complain' element={<ComplainPage />} />
        <Route path='lanke' element={<LankerPage />} />
        <Route path='suggest' element={<SuggestPage />} />
        <Route path='repair' element={<RepairPage />} />
        <Route path='userinfo' element={<UserInfoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="admin" element={<AdminPage />}>
      </Route>
    </Routes>
  );
}