import React, { useState } from "react";

const NavContents = () => {
  const linkItems = [
    { title: "Coins", link: "#Coins" },
    { title: "Unlocks", link: "#Unlocks" },
    { title: "ICO's", link: "#ICO's" },
    { title: "LaunchPads", link: "#LaunchPads" },
    { title: "Investors", link: "#Investors" },
    { title: "Events", link: "#Events" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex text-slate-600 text-base font-medium gap-5">
      {linkItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`relative hover:text-blue-500 ${
            hoveredIndex === index ? "before:content-[''] before:w-full before:absolute before:h-0.5 before:bg-blue-500 before:-bottom-3" : ""
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default NavContents;



