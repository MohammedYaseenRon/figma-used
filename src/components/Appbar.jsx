import React from "react";
import { Bell, User } from 'lucide-react';


const Navbar = () => {
    return (
      <nav className="fixed w-[1153px] h-[45px] left-[327px] top-[56px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-lg font-medium text-blue-600 border-b-2 border-blue-600">Onboarding Status</button>
          <button className="text-gray-600 text-lg hover:text-blue-600 transition-colors">
            Add Broker
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </nav>
    );
};

export default Navbar;