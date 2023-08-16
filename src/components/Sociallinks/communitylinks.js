import React from "react";

import usersiconn from "../../icons/Solid/users.svg";
import twittericon from "../../icons/communityicons/ri_twitter-fill.svg";
import redditicon from "../../icons/communityicons/logos_reddit-icon.svg";
import Discordicon from "../../icons/communityicons/Vector.svg";
import gticon from "../../icons/communityicons/Shape.svg";

const CommunityLinks = () => {
  return (
    <div className="w-[278px] h-[54px] flex-col justify-center items-start gap-2.5 inline-flex">
      <div className="px-1 justify-center items-center gap-2.5 inline-flex">
        <div className="w-6 h-6 bg-[#5548EC] rounded-full flex justify-center items-center">
          <img src={usersiconn} alt="" />
        </div>
        <div className="text-slate-600 text-sm font-bold leading-[21px] tracking-tight">
          Community:
        </div>
      </div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="justify-start items-start gap-1 flex">
          <div className="px-2 py-px bg-gray-800 rounded-2xl justify-start items-center gap-2 flex">
            <div className="text-slate-400 text-xs font-medium leading-tight tracking-tight">
              Twitter
            </div>
            <img src={twittericon} alt="" />
          </div>
        </div>
        <div className="justify-start items-start gap-1 flex">
          <div className="px-2 py-px bg-gray-800 rounded-2xl justify-start items-center gap-2 flex">
            <div className="text-slate-400 text-xs font-medium leading-tight tracking-tight">
              Discord
            </div>
            <div className="w-4 h-4 bg-[#5548EC] rounded-full flex justify-center items-center">
              <img src={Discordicon} alt="" />
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-1 flex">
          <div className="px-2 py-px bg-gray-800 rounded-2xl justify-start items-center gap-2 flex">
            <div className="text-slate-400 text-xs font-medium leading-tight tracking-tight">
              Reddit
            </div>
            <img src={redditicon} alt="" />
          </div>
        </div>
        <img src={gticon} alt="" />
      </div>
    </div>
  );
};

export default CommunityLinks;
