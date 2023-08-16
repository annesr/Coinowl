import React from "react";

import walleticonn from "../../icons/walletlicons/ion_wallet-outline.svg";
import caticoin from "../../icons/walletlicons/MetaMask_Fox 1.svg";
import linkicoin from "../../icons/walletlicons/Icon.svg";

import gticon from "../../icons/communityicons/Shape.svg";

const WalletLinks = () => {
  return (
    <div className="w-auto h-[54px] flex-col justify-center items-start gap-2.5 inline-flex">
      <div className="px-1 justify-center items-center gap-2.5 inline-flex">
        <div className="w-6 h-6 bg-[#5548EC] rounded-full flex justify-center items-center">
          <img src={walleticonn} alt="" />
        </div>
        <div className="text-slate-600 text-sm font-bold leading-[21px] tracking-tight">
          Wallets:
        </div>
      </div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="justify-start items-start gap-1 flex">
          <div className="px-2 py-px bg-gray-800 rounded-2xl justify-start items-center gap-2 flex">
            <img src={caticoin} alt="" />
            <div className="text-slate-400 text-xs font-medium leading-tight tracking-tight">
              Etherscan
            </div>
            <img src={linkicoin} alt="" />
          </div>
        </div>
        <div className="justify-start items-start gap-1 flex">
          <div className="px-2 py-px bg-gray-800 rounded-2xl justify-start items-center gap-2 flex">
            <img src={caticoin} alt="" />
            <div className="text-slate-400 text-xs font-medium leading-tight tracking-tight">
              Bscscan
            </div>
            <img src={linkicoin} alt="" />
          </div>
        </div>

        <img src={gticon} alt="" />
      </div>
    </div>
  );
};

export default WalletLinks;
