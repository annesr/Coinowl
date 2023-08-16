import React from "react";
import PolygonInfo from "./leftside/hero";
import Rightside from "./Rightside/rightside";

const Middle = () => {
  return (
    <div className="bg-[#0D0C13] p-5 flex justify-between">
      <PolygonInfo />
      <Rightside />
    </div>
  );
};

export default Middle;
