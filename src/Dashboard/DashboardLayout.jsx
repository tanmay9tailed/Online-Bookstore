import Navbar from "../components/Navbar";
import SideBar from "./SideBar";
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
