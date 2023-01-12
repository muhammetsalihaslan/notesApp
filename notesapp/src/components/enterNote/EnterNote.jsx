import React from "react";

const EnterNote = () => {
  return (
    <form className="enter">
      <textarea className="Itext">Some text</textarea>
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
