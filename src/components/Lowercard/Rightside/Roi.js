import React from "react";

const ROIItem = ({ label, value, subValue }) => {
  return (
    <div className="self-stretch justify-between items-center gap-[43px] inline-flex">
      <div className="flex-col justify-start items-start gap-1 inline-flex">
        <div className="text-slate-400 text-[15px] font-medium leading-none">
          {label}
        </div>
      </div>
      <div className="justify-center items-end gap-[5px] inline-flex">
        <div className="text-white text-[15px] font-medium ">{value}</div>
        {subValue && (
          <div className="text-emerald-500 text-[15px] font-medium">
            {subValue}
          </div>
        )}
      </div>
    </div>
  );
};

const ROIInfo = () => {
  return (
    <div className="w-[344px] h-[226px] p-6 bg-gray-900 rounded-2xl border border-gray-800 flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch justify-start items-start gap-8 inline-flex">
        <div className="w-[249px] text-white text-xl font-bold leading-[30px] tracking-tight">
          Matic ROI since ICO
        </div>
      </div>
      <div className="self-stretch h-[124px] flex-col justify-start items-start gap-3 flex">
        <ROIItem label="ROI" value="50x" />
        <ROIItem label="Current Price" value="0.95$" />
        <ROIItem label="ICO Price" value="0.05$" subValue="200%" />
        <ROIItem label="ICO date" value="21-11-2021" />
      </div>
    </div>
  );
};

export default ROIInfo;
