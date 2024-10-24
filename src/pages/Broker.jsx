import React from "react";
import Navbar from "@/components/Appbar";
import Sidebar from "@/components/sidebar";
import Main from "@/components/Main";

const Broker = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div className="ml-[300px] flex-1">
        <Navbar />
        <Main />
      </div>
    </div>
   
  );
}

export default Broker;