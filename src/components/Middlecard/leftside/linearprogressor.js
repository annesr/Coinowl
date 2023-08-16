import React, { useState } from "react";

import light from "../../../icons/Light/Iconly/Light/Arrow - Down 2.svg";

const LinearProgressBar = () => {
  const [progress, setProgress] = useState(50);
  return (
    <div className="flex items-center gap-2 mx-auto">
      <div className="w-[290px] h-2 relative">
        <div className="w-[290px] h-2 absolute bg-gray-800 rounded-lg " />
        <div
          style={{ width: `${progress}%` }}
          className="h-2 absolute bg-indigo-600 rounded-lg"
        />
      </div>
      <div className="px-2 py-1.5 bg-gray-800 rounded-md text-xs font-medium inline-flex  items-center">
        <span className="text-xs font-medium  text-slate-400 mr-1">24h</span>
        <img src={light} alt="" />
      </div>
    </div>
  );
};

export default LinearProgressBar;
