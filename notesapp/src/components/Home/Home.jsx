import React from "react";
import EnterNote from "../enterNote/EnterNote";
import Search from "../search/Search";

const Home = () => {
  return (
    <div className="home">
      <Search />
      <EnterNote />
    </div>
  );
};

export default Home;
