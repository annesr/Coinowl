import React from "react";
import FilterBar from "./components/compo";
import NavBar from "./components/Navbar/nabar";
import Frame from "./components/frame";

import Middle from "./components/Middlecard/middle";
import SocialLinks from "./components/Sociallinks/links";
import LowerPart from "./components/Lowercard/lowerpart";

const App = () => {
  const itemList = [
    "Overview",
    "Markets",
    "Tokenomics",
    "Unlocks",
    "Investors/Funds Raising",
  ];

  return (
    <div>
      <FilterBar />
      <NavBar />
      <div className="bg-[#171623] p-5 relative">
        <Frame items={itemList} />
      </div>
      <Middle />
      <SocialLinks />
      <LowerPart />
    </div>
  );
};

export default App;
