import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/todos/todoSlice";

const NoteList = () => {
  const noteTodos = useSelector(selectTodos);

  return (
    <div className="noteList">
      {noteTodos.map((item) => (
        <div className="note2" key={item.id}>
          <div className="noteF">Note {item.id}</div>
          <input className="toggle" type="checkbox" />
          <label className="noteT">{item.title}</label>
          <button className="destroy"></button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
