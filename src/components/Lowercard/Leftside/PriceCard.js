import React from 'react';

const PriceCard = ({ title, price, change , color }) => {
  return (
    <div className="w-[147.40px] h-[60px] px-3 py-2 rounded-lg border border-gray-800 flex-col justify-start items-center gap-1 inline-flex">
      <div className="flex-col justify-start items-start gap-1 flex">
        <div className="text-slate-600 text-xs font-semibold leading-none">{title}</div>
      </div>
      <div className="flex-col justify-center items-center gap-[3px] flex">
        <div className="justify-start items-start gap-1.5 inline-flex">
          <div className={`${color} text-sm font-semibold leading-normal`}>{price}</div>
          <div className="text-pink-600 text-sm font-semibold leading-normal">{change}</div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
