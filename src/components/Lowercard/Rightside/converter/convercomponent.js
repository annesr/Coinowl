import React from "react";

import circleicon from "../../../../icons/convertericon/Ellipse 1.svg";
import light from "../../../../icons/Light/Iconly/Light/Arrow - Down 2.svg";

const ConverterComponent = ({text, value }) => {
  return (
    <div className="w-[296px] h-[110px] p-3 bg-zinc-950 rounded-2xl border border-gray-800 flex-col justify-between items-center inline-flex">
      <div className="self-stretch justify-center items-center gap-3 inline-flex">
        <img src={circleicon} alt="" />
        <div className="text-slate-600 text-xs font-normal leading-none">
          {text}
        </div>

        <img src={light} alt="" />
        <div className="w-[19px] h-[19px] relative" />
      </div>
      <div className="self-stretch h-px bg-gray-800" />
      <div className="self-stretch py-px bg-gray-800 rounded-2xl justify-center items-center h-7 flex">
        <div className="text-slate-400 text-xs font-medium leading-tight tracking-tight">
          {value}
        </div>
      </div>
    </div>
  );
};

export default ConverterComponent;
