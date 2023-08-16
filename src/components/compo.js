import React from "react";

import linesvg from "../icons/Brightness Down/Line.svg";
import light from "../icons/Light/Iconly/Light/Arrow - Down 2.svg";

const InfoItem = ({ label, value, num }) => (
  <div className="text-left">
    <span className="text-[#575571] text-xs font-medium ">{label} :</span>
    <span className="pl-1 text-[#8F8EA1] text-xs font-medium ">{value}</span>
    <span className="pl-1 text-xs font-medium text-green-600">{num}</span>
  </div>
);

const CurrencyInfo = ({ label, value }) => (
  <div className="border rounded-lg border-gray-500 inline-flex  items-center px-2.5 py-0.5">
    <span className="text-[10px] font-medium text-[#575571]">{label}:</span>
    <span className="pl-1 text-[10px] font-medium text-[#8F8EA1]">{value}</span>
    <img className="pl-1" src={light} alt="" />
  </div>
);

const FilterBar = () => {
  return (
    <div className="bg-[#171623] p-3 relative">
      <div className=" flex items-center justify-between  mx-auto">
        <div className="flex gap-3">
          <InfoItem label="Total Market Cap" value="$823,451,000" num="+3%" />
          <div className="w-px  bg-gray-800" />
          <InfoItem label="24 Hours Volume" value="$23,451,000" />
          <div className="w-px  bg-gray-800" />
          <div>
            <span className="text-xs font-medium text-[#575571] mr-1">
              Dominance :
            </span>
            <span className="text-sm font-medium text-[#575571] mr-1">BTC</span>
            <span className="text-xs font-medium text-[#8F8EA1] mr-1">
              40.2%
            </span>
            <span className="text-xs font-medium text-[#575571] mr-1">ETH</span>
            <span className="text-xs font-medium text-[#8F8EA1] mr-1">
              15.3%
            </span>
          </div>
          <div className="w-px  bg-gray-800" />
          <InfoItem label="Gas" value="36 Gwei" />
          <div className="w-px  bg-gray-800" />
        </div>
        <div className=" flex gap-3">
          <img src={linesvg} alt="" />
          <CurrencyInfo label="Lan" value="Eng" />
          <CurrencyInfo label="Currency" value="USDT" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-800" />
    </div>
  );
};

export default FilterBar;
