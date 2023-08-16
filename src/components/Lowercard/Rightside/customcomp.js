import React from "react";
import CustomComponent from "./customcomponent";

const CustomComp = () => {
  return (
    <div className="flex gap-3">
      <CustomComponent showicon={true} color="bg-gray-800" name="Buy Spot" />
      <CustomComponent showicon={false} color="bg-emerald-500" name="Long/Buy" />
      <CustomComponent showicon={false} color="bg-pink-600" name="Short/Sell" />
    </div>
  );
};

export default CustomComp;
