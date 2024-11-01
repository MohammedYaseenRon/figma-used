import React from "react";
import Logout from "../../LogoutIcon";
import UserIcon from "../assets/Icon/UserIcon";

const Sidebar = () => {
  return (
    <aside className="fixed w-[295px] h-screen bg-white border-r border-gray-200">
      <div className="absolute left-8 top-[56px]">
        <span className="text-blue-600 text-3xl font-semibold">Coverfi</span>
      </div>
      
      <div className="absolute left-8 top-[144px] space-y-4 w-52">
        <div className="flex items-center gap-3 bg-[#BEDAFF] text-black text-base font-bold px-4 py-2 rounded-lg">
         <UserIcon />
          <span>On Boarding</span>
        </div>
        {['Lorem ipsum', 'Lorem ipsum'].map((item, index) => (
          <div key={index} className="flex items-center gap-3 px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">
             <UserIcon />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="absolute w-[237px] left-8 bottom-16">
        <button className="flex items-center gap-3 text-red-500 px-4 py-2 hover:bg-gray-100 rounded-lg">
          <Logout />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;