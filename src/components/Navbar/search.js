import React, { useState } from "react";

import searchicon from "../../icons/Search/Line.svg";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    console.log(newQuery);
  };

  return (
    <div className="h-10  pr-3 rounded-[10px] border border-slate-600 justify-start items-center gap-3 inline-flex">
      <img src={searchicon} alt="" className="pl-2" />
      <input
        type="text"
        placeholder="Search coin"
        value={query}
        onChange={handleInputChange}
        className="text-white text-xs font-normal leading-tight outline-none bg-transparent"
      />
    </div>
  );
};

export default SearchBar;
