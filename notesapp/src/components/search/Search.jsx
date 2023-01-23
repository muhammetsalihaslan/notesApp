import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { filterTodos } from "../../redux/todos/todoSlice";
import { findNote } from "../../redux/todos/todoSlice";

const Search = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(filterTodos);

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={filtered}
        onChange={(e) => dispatch(findNote(e.target.value))}
      />
    </div>
  );
};

export default Search;
