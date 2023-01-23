import React from "react";
import { useState } from "react";
import { filtered } from "../../redux/todos/todoSlice";
import { useDispatch } from "react-redux";

const Search = () => {
  const [filterText, setFilterText] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(dispatch(filtered()))}
      />
    </div>
  );
};

export default Search;
