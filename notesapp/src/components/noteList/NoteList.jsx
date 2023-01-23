import React from "react";
import { useSelector } from "react-redux";
import { filterTodos, selectTodos } from "../../redux/todos/todoSlice";
import { toggle, destroy } from "../../redux/todos/todoSlice";
import { useDispatch } from "react-redux";

const NoteList = () => {
  const dispatch = useDispatch();
  const noteTodos = useSelector(selectTodos);
  const filteredText = useSelector(filterTodos);

  const filtered = noteTodos.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filteredText.toLowerCase())
    );
  });

  const handleDestroy = (id) => {
    if (window.confirm(`Are you sure`)) {
      dispatch(destroy(id));
    }
  };

  return (
    <ul className="noteList">
      {filtered.map((item, index) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="note2">
            <div className="noteF">Note {index + 1} </div>
            <input
              className="toggle"
              type="checkbox"
              onChange={() => dispatch(toggle({ id: item.id }))}
              checked={item.completed}
            />
            <label className="noteT">{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
