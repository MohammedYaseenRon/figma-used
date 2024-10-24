import React from "react";
import Navbar from "@/components/Appbar";
import Sidebar from "@/components/sidebar";
import SecHeader from "@/components/SecHeader";
import Card from "@/components/Card";

const StatusTwo = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div className="ml-[327px] flex-1">
        <Navbar />
        <SecHeader />
        <div className="p-2">
        <Card />
        </div>
      </div>
    </div>
   
  );
}

  export default StatusTwo;