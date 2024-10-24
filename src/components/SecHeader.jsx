import React from "react";
import { Bell, User } from "lucide-react";
import Calendar from "./Calendar";
import Toggle from "./toggle";
import Arrow from "./Arrow";


const SecHeader = () => {
  return (
    <nav className="h-[49px] mt-[40px] p-8 flex items-center justify-between">
      <div className="flex items-center w-[168px] h-[44px] gap-4">
        <Calendar />
        <Toggle />
        <Arrow />
      </div>
      <div className="relative flex-1 max-w-[520px]">
      <input
          type="text"
          placeholder="Search Session"
          className="w-full h-[49px] pl-10 pr-4 border border-gray-200 rounded-tl-lg focus:outline-none focus:border-blue-500"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3226 13.8833C11.3996 14.5841 10.2484 15 9 15C5.96243 15 3.5 12.5376 3.5 9.5C3.5 6.46243 5.96243 4 9 4C12.0376 4 14.5 6.46243 14.5 9.5C14.5 10.7484 14.0841 11.8996 13.3833 12.8226L16.2803 15.7197C16.5732 16.0126 16.5732 16.4874 16.2803 16.7803C15.9874 17.0732 15.5126 17.0732 15.2197 16.7803L12.3226 13.8833ZM13 9.5C13 11.7091 11.2091 13.5 9 13.5C6.79086 13.5 5 11.7091 5 9.5C5 7.29086 6.79086 5.5 9 5.5C11.2091 5.5 13 7.29086 13 9.5Z" fill="#8A8A8A"/>
            </svg>
        </span>

      </div>
    </nav>
  );
};

export default SecHeader;