import React from "react";
import Navbar from "@/components/Appbar";
import Sidebar from "@/components/sidebar";
import MainBody from "@/components/MainBody";

const Admin = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div className="ml-[300px] flex-1">
        <Navbar />
        <MainBody />
      </div>
    </div>
   
  );
}

export default Admin;