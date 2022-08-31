import React from "react";

function SearchBar({ searchEventHandler, filterEventHandler }) {
  return (
    <div className="flex items-center gap-x-4 bg-violet-600 rounded-lg px-3 py-4 mt-4">
      {/* icon filter */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-funnel"
        viewBox="0 0 16 16"
      >
        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
      </svg>

      {/* input filter */}
      <select
        name="filter"
        className="bg-violet-600"
        defaultValue="nofilter"
        onChange={filterEventHandler}
      >
        <option id="1" value="nofilter">
          No Filter
        </option>
        <option id="2" value="aktif">
          Aktif
        </option>
        <option id="3" value="arsip">
          Arsip
        </option>
      </select>

      <div className="self-stretch bg-white w-px"></div>

      {/* icon search */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>

      {/* input search */}
      <input
        type="text"
        className="w-full bg-transparent focus:outline-none placeholder-white"
        placeholder="Search"
        onChange={searchEventHandler}
      />
    </div>
  );
}

export default SearchBar;
