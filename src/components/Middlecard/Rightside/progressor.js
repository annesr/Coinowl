import React, { useState } from "react";

const ProgressBar = () => {
  const [progressor, setProgressor] = useState(40);
  return (
    <div className="flex items-center  mx-auto">
      <div className="w-[100px] h-1 relative">
        <div className="w-[100px] h-1 absolute bg-gray-800 rounded-lg " />
        <div
          style={{ width: `${progressor}%` }}
          className="h-1 absolute bg-indigo-600 rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
