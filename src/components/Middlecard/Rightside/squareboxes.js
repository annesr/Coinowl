import React from "react";
import ProgressBar from "./progressor";
import CustomValues from "./Customvalues";

import questionmark from "../../../icons/infoblock/mdi_question-mark-circle-outline.svg";

const InfoBlock = ({ label, value, showProgressBar = false, customValues }) => {
  const formattedValue =
    value !== undefined
      ? new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(value)
      : null;

  return (
    <div className="w-[170px] h-[95px] px-3 py-2 bg-gray-900 rounded-2xl border border-gray-800 flex-col justify-evenly items-center gap-2 flex mt-4 ">
      <div className="justify-evenly items-center gap-1 inline-flex">
        <div className="text-slate-600 text-xs font-normal">{label}</div>
        <img src={questionmark} alt="" />
        <div className="w-[19px] h-[19px] relative" />
      </div>
      <div className="self-stretch h-px bg-gray-800" />
      {customValues && (
        <CustomValues
          value={customValues.value}
          ValueVisible={customValues.ValueVisible}
          percentageVisible={customValues.percentageVisible}
        />
      )}
      {showProgressBar && <ProgressBar />}

      {formattedValue && (
        <div className="text-white text-sm font-semibold leading-normal">
          {formattedValue}
        </div>
      )}
    </div>
  );
};

export default InfoBlock;
