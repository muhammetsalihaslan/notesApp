import React from "react";

const NoteList = () => {
  return (
    <div className="noteList">
      <div className="note">
        <div className="note2">
          <div className="noteF">Note</div>
          <input className="toggle" type="checkbox" />
          <label className="noteT">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus ipsam vel facilis debitis quam, nam tempora. Qui vitae
            iste reprehenderit odit corporis? Debitis porro iste quibusdam quam,
            accusantium repellendus explicabo unde neque in consequuntur
            consectetur ducimus vitae laborum tenetur excepturi autem dolor
            nulla iusto qui, natus at et. Doloremque, quod!
          </label>
          <button className="destroy"></button>
        </div>
      </div>
    </div>
  );
};

export default NoteList;
