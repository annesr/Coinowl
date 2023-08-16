import React from "react";

const CustomValues = ({ value, ValueVisible, percentageVisible }) => {
  return (
    <div className="justify-start items-start gap-0.5 flex">
      <div className="text-white text-xs font-medium">{value}</div>
      {percentageVisible && (
        <div className="text-indigo-600 text-xs font-medium">( {percentageVisible}% )</div>
      )}
      {ValueVisible && (
        <span className="text-slate-400 text-xs font-medium leading-normal">
          ( {ValueVisible} )
        </span>
      )}
    </div>
  );
};

export default CustomValues;
