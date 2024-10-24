import React from "react";
import { Bell, User } from "lucide-react";
import NotificationIcon from "./NotificationIcon";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <nav className="h-[43px] mt-[50px] px-8 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <button className="text-lg font-medium text-blue-600 border-b-2 border-blue-600 pb-1">Onboarding Status</button>
        <button className="text-gray-600 text-lg hover:text-blue-600 transition-colors">
          Add Broker
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <NotificationIcon />
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          <Profile />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;