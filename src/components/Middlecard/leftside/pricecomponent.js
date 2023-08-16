import React from "react";

import downicon from "../../../icons/up-downn/triangle-down.svg";

const PriceComponent = () => {
  const price = 19.001;
  const percentage = 2.05;

  return (
    <div className="flex items-center gap-6 mt-9">
      <div className="text-4xl text-white font-medium">${price.toFixed(3)}</div>
      <div className="h-[30px] px-2 py-2 bg-emerald-500 rounded-xl flex items-center ">
        <img src={downicon} alt="" />
        <div className="ml-2 text-white text-2xl font-medium">
          {percentage.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default PriceComponent;
