import React from "react";

import bellicon from "../../icons/Bell/notification-2-line 1.svg";
import usericon from "../../icons/usericon/carbon_user-avatar-filled.svg";

import SearchBar from "./search";
import NavContents from "./Navcontents";

const NavBar = () => {
  return (
    <div className="bg-[#0D0C13] p-4 relative">
      <div className="flex items-center justify-between  mx-auto">
        <div className="w-[37px] h-[37px] relative rounded-[7px] bg-[#5548EC] " />
        <div className="text-white text-[28px] font-medium ">XYZ.io</div>
        <NavContents />
        <ul className=" text-xs flex text-slate-600  gap-3 ">
          <li className="hover:underline hover:text-blue-500">Watchlist</li>
          <li className="hover:underline hover:text-blue-500">My Portfolio</li>
        </ul>
        <div className="flex gap-7">
          <div className=" flex relative">
            <img src={bellicon} alt="" />
            <div className="p-1.5 left-[20px] -top-px absolute bg-green-400 rounded-lg" />
          </div>
          <img src={usericon} alt="" />
          <SearchBar></SearchBar>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-800" />
    </div>
  );
};

export default NavBar;
