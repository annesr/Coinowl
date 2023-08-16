import React from "react";
import ConverterComponent from "./convercomponent";

import loadicon from "../../../../icons/convertericon/simple-icons_convertio.svg"

const Converter = () => {
  return (
    <div className="w-[344px] h-[392px] px-6 py-[5px] bg-gray-900 rounded-xl border border-gray-800 backdrop-blur-md flex-col justify-start  gap-5 inline-flex">
      <div className="flex justify-start mb-7">
        <div className="text-slate-200 text-xl font-bold ">Converter</div>
      </div>
      <ConverterComponent text="MATIC" value="0.65" />
      <div className="flex justify-center">
      <img className="w-[30px] h-[30px] relative" src={loadicon} alt=""/>
      </div>
      <ConverterComponent text="USDT" value="0.4" />
    </div>
  );
};

export default Converter;
