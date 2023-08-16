import React from "react";
import CustomComp from "./Rightside/customcomp";

import Converter from "./Rightside/converter/Converter";
import ROIInfo from "./Rightside/Roi";
import Chart from "./Leftside/chartheading";

import ChartNames from "./Leftside/chartnames";
import CandlestickChart from "./Leftside/Candlechart";
import PriceCardComponnet from "./Leftside/PriceCardCompo";

const LowerPart = () => {
  return (
    <div className="bg-[#0D0C13] p-3 relative">
      <div className=" flex items-start justify-between  mx-auto">
        <div className=" flex-col ">
          <Chart />
          <div className="mb-5" />
          <ChartNames />
          <CandlestickChart />
          <div className="self-stretch h-px bg-gray-800" />
          <div className="mb-5" />
          <PriceCardComponnet />
        </div>

        <div className=" flex-col">
          <CustomComp />
          <div className="mb-5" />
          <Converter />
          <div className="mb-5" />
          <ROIInfo />
        </div>
      </div>
    </div>
  );
};

export default LowerPart;
