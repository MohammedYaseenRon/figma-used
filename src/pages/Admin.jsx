import React from "react";
import Navbar from "../components/Appbar";
import Sidebar from "../components/sidebar";
import MainBody from "../components/MainBody";

const Admin = () => {
    return (
      <div className="bg-gray-100 h-screen">
        <Sidebar />
        <Navbar />
        <MainBody />
      </div>
    );
  }

  export default Admin;