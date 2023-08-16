import React from "react";
import LinearProgressBar from "./linearprogressor";
import PriceComponent from "./pricecomponent";

const CoinInfo = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <PriceComponent />
      <LinearProgressBar />
      <div className="flex justify-between items-start gap-0.5">
        <div className="text-xs font-medium text-slate-600">Low: $0.05</div>
        <div className="text-xs font-medium text-slate-600">High: $24.50</div>
      </div>
    </div>
  );
};

export default CoinInfo;
