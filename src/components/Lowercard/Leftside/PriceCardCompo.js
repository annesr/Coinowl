import React from "react";
import PriceCard from "./PriceCard";

const PriceCardComponnet = () => {
  return (
    <div className="flex gap-4">
      <PriceCard
        title="1 hr Low/High"
        price="$1.5"
        change="-4.5%"
        color="text-slate-50"
      />
      <PriceCard
        title="24 hr Low/High"
        price="$1.5"
        change="-4.5%"
        color="text-slate-50"
      />
      <PriceCard
        title="7 day Low/High"
        price="$1.5"
        change="-4.5%"
        color="text-slate-50"
      />
      <PriceCard
        title="1 month Low/High"
        price="$1.5"
        change="-4.5%"
        color="text-emerald-500"
      />
      <PriceCard
        title="1 yr Low/High"
        price="$1.5"
        change="-4.5%"
        color="text-slate-50"
      />
    </div>
  );
};

export default PriceCardComponnet;
