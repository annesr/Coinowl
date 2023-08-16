import React from "react";

import tagiconn from "../../icons/Tagsicon/code.svg";
import gticon from "../../icons/communityicons/Shape.svg";

const TagLinks = () => {
  return (
    <div className="w-auto h-[54px] flex-col justify-center items-start gap-2.5 inline-flex">
      <div className="px-1 justify-center items-center gap-2.5 inline-flex">
        <div className="w-6 h-6 bg-[#5548EC] rounded-full flex justify-center items-center">
          <img src={tagiconn} alt="" />
        </div>
        <div className="text-slate-600 text-sm font-bold leading-[21px] tracking-tight">
          Tags
        </div>
      </div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="justify-start items-start gap-1 flex">
          <div className="px-2 py-px bg-gray-800 rounded-2xl justify-start items-center gap-2 flex">
            <div className="text-slate-400 text-xs font-medium leading-tight tracking-tight">
              Blockchain
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-1 flex">
          <div className="px-2 py-px bg-gray-800 rounded-2xl justify-start items-center gap-2 flex">
            <div className="text-slate-400 text-xs font-medium leading-tight tracking-tight">
              NFT
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-1 flex">
          <div className="px-2 py-px bg-gray-800 rounded-2xl justify-start items-center gap-2 flex">
            <div className="text-slate-400 text-xs font-medium leading-tight tracking-tight">
              Coin
            </div>
          </div>
        </div>
        <img src={gticon} alt="" />
      </div>
    </div>
  );
};

export default TagLinks;
