import React from "react";
import Frame from "../../frame";

const ChartNames = () => {
  const chartname = ["Candles", "Line Charts"];
  const charttime = ["1H", "1D", "1W", "1M"];
  return (
    <div className="flex justify-between">
      <Frame items={chartname} />
      <Frame items={charttime} />
    </div>
  );
};

export default ChartNames;
