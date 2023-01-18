import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/todos/todoSlice";
import { toggle } from "../../redux/todos/todoSlice";
import { useDispatch } from "react-redux";

const NoteList = () => {
  const dispatch = useDispatch();
  const noteTodos = useSelector(selectTodos);

  return (
    <ul className="noteList">
      {noteTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="note2">
            <div className="noteF">Note </div>
            <input
              className="toggle"
              type="checkbox"
              onChange={() => dispatch(toggle({ id: item.id }))}
              checked={item.completed}
            />
            <label className="noteT">{item.title}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
