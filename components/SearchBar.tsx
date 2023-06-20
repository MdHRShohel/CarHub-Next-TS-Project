"use client";

import { useState } from "react";
import { SearchManufacturer } from "./";

const SearchBar = () => {
  const [menufacturer, setMenufacturer] = useState(""); // ['BMW', 'Audi', 'Mercedes'

  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
        manufacturer={menufacturer}
        setManufacturer={setMenufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
