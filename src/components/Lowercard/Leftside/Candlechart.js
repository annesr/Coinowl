import React, { useEffect } from "react";
import * as echarts from "echarts";

function CandlestickChart() {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("candlestick-chart"));

    const data = [
      [2300, 2291.3, 2288.26, 2308.38],
      [2295.35, 2346.5, 2295.35, 2346.92],
      [2347.22, 2358.98, 2337.35, 2363.8],
      [2360.58, 2388.35, 2360.58, 2393.53],
      [2389.55, 2393.53, 2382.5, 2397.94],
      [2373.46, 2389.56, 2364.35, 2393.7],
      [2380.44, 2382.44, 2372.4, 2385.59],
      [2367.82, 2384.55, 2367.82, 2389.32],
    ];

    const hours = [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "01:00 PM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM",
    ];

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      xAxis: {
        type: "category",
        data: hours,
      },
      yAxis: {
        scale: true,
      },
      series: [
        {
          type: "candlestick",
          name: "Candlestick",
          data: data,
          itemStyle: {
            color: "#17aa7e",
            color0: "#d92a69",
            borderColor: "#17aa7e",
            borderColor0: "#d92a69",
          },
          barWidth: 7,
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div
      id="candlestick-chart"
      style={{ width: "100%", height: "520px", margin: "0 auto" }}
    />
  );
}

export default CandlestickChart;
