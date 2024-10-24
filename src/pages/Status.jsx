import React from "react";
import Navbar from "@/components/Appbar";
import Sidebar from "@/components/sidebar";
import SecHeader from "@/components/SecHeader";
import Card from "@/components/Card";

const Status = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div className="ml-[327px] flex-1">
        <Navbar />
        <SecHeader />
        <div className="px-6">
        <Card />
        </div>
      </div>
    </div>
  );
  }

  export default Status;