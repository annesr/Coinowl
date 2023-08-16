import React from "react";
import CommunityLinks from "./communitylinks";
import OfficialLinks from "./officiallink";
import WalletLinks from "./walletlinks";
import TagLinks from "./taglinks";

const SocialLinks = () => {
  return (
    <div className="bg-[#0D0C13] h-32 p-3 relative">
      <div className=" w-auto h-[78px] p-2 bg-[#171623] rounded-2xl items-center mx-auto">
        <div className="flex justify-between">
          <CommunityLinks />
          <div className="w-px  bg-gray-800" />
          <OfficialLinks />
          <div className="w-px  bg-gray-800" />
          <WalletLinks />
          <div className="w-px  bg-gray-800" />
          <TagLinks />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800" />
    </div>
  );
};

export default SocialLinks;
