import React from "react";

const NoteList = () => {
  return (
    <div className="noteList">
      <div className="note">
        <div className="noteF">Note</div>
        <div>
          <label className="noteT">title</label>
          <input type="checkbox" />
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default NoteList;
