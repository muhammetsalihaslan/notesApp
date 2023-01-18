import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/todos/todoSlice";

const NoteList = () => {
  const noteTodos = useSelector(selectTodos);

  return (
    <ul className="noteList">
      {noteTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="note2">
            <div className="noteF">Note {item.id}</div>
            <input className="toggle" type="checkbox" />
            <label className="noteT">{item.title}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
