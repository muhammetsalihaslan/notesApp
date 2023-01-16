import React from "react";
import Content from "../content/Content";
import EnterNote from "../enterNote/EnterNote";
import Search from "../search/Search";

const Home = () => {
  return (
    <div className="home">
      <Search />
      <EnterNote />
      <Content />
    </div>
  );
};

export default Home;
