import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const EnterNote = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  return (
    <form className="enter">
      <textarea
        className="Itext"
        placeholder="some text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>
      <div className="buttons">
        <div className="buttons1">
          <input className="btn btn1" type="button" />
          <input type="button" className="btn btn2" />
          <input type="button" className="btn btn3" />
          <input type="button" className="btn btn4" />
          <input type="button" className="btn btn5" />
        </div>
        <div className="buttons2">
          <button className="addB">ADD</button>
        </div>
      </div>
    </form>
  );
};

export default EnterNote;
