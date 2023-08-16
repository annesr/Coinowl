import React from "react";

import maximise from "../../../icons/charticons/maximize.svg";
import dots from "../../../icons/charticons/dots-vertical.svg";

const Chart = () => {
  return (
    
    <div className="w-[800px] h-8 justify-between items-center inline-flex ">
      <div className="text-white text-2xl font-bold whitespace-nowrap">
        Solana Chart
      </div>
      <div className="justify-start items-center gap-4 flex">
        <img src={maximise} alt="" />
        <img src={dots} alt="" />
      </div>
    </div>
   
  );
};

export default Chart;
