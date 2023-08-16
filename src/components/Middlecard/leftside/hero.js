import React, { useState } from "react";

import ellipseicon from "../../../icons/Polyicon/Ellipse 1.svg";
import copyicon from "../../../icons/copyicon/Group 88.svg";
import triangle from "../../../icons/up-down/triangle-up.svg";
import CoinInfo from "./coininfo";

const polygonData = {
  name: "POLYGON",
  symbol: "MATIC",
  number: "#22",
  contract: "0xgfsehdhfgfgifjdjtyugx5252",
};

const formatContractAddress = (address) => {
  const firstSix = address.slice(0, 6);
  const lastSix = address.slice(-6);
  const middleDots = "....";
  return `${firstSix}${middleDots}${lastSix}`;
};

const PolygonInfo = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(polygonData.contract);
    setIsCopied(true);
    setShowTooltip(true);

    
    setTimeout(() => {
      setIsCopied(false);
      setShowTooltip(false);
    }, 1500);
  };

  return (
    <div>
      <div className="max-w-[1240px] text-slate-600 text-xs font-semibold mx-auto">
        Cryptocurrencies {">"} Coins {">"}{" "}
        <span className="text-slate-200">Polygon</span>
      </div>
      <div className="mb-8" />
      <div className="max-w-[1240px] flex items-center justify-between  mx-auto">
        <div className="flex flex-col justify-start items-start">
          <div className="flex items-center gap-4">
            <img src={ellipseicon} alt="" />
            <div className="text-white text-3xl font-medium">
              {polygonData.name}
            </div>
            <div className="text-slate-600 text-xl font-medium">
              {polygonData.symbol}
            </div>
            <div className="bg-gray-800 rounded-lg px-2 py-1 flex items-center gap-4">
              <div className="text-zinc-600 text-xs font-medium">
                {polygonData.number}
              </div>
            </div>
          </div>
          <div className="mb-4" />
          <div className="h-5">
            <div className="bg-gray-800 rounded-xl px-6 py-[5px] flex items-center gap-5">
              <div className="text-slate-600 text-sm font-medium ">
                Contract:
              </div>
              <div className="text-white text-sm font-medium">
                {formatContractAddress(polygonData.contract)}
              </div>

              <img
                src={copyicon}
                alt="Copy"
                onClick={handleCopyClick}
                style={{ cursor: "pointer" }}
              />

              <img src={triangle} alt="" />
            </div>

            {showTooltip && (
              <p className="bg-gray-800 rounded-lg px-2 py-1 text-white text-xs mt-1 ml-40">
                Copied to clipboard!
              </p>
            )}
          </div>

          <CoinInfo />
        </div>
      </div>
    </div>
  );
};

export default PolygonInfo;
