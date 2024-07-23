import React, { useContext } from 'react';
// import profile from "../assets/profile.jpg";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiHome, HiInbox, HiOutlineCloudDownload, HiTable } from "react-icons/hi";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId")

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Sidebar aria-label="Default sidebar example" className="h-screen">
      <Sidebar.Logo href="#" img={profile} imgAlt="Profile image" className="pt-14">
        User Profile
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item onClick={() => handleNavigation('/')} icon={HiHome}>
            Home
          </Sidebar.Item>
          <Sidebar.Item onClick={() => handleNavigation(`/admin/dashboard/${userId}`)} icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item onClick={() => handleNavigation('/admin/dashboard/upload')} icon={HiOutlineCloudDownload}>
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item onClick={() => handleNavigation('/admin/dashboard/manage')} icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item onClick={() => { logOut(); handleNavigation('/login'); }} icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
