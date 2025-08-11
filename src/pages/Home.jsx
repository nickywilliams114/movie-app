import React from "react";
import Landing from "../components/Landing";
import SearchMovie from "./SearchMovie";
import Animation from "../components/Animation";

const Home = () => {
  return (
    <div>
      <Landing />
      <main>
        <SearchMovie />
        <Animation />
      </main>
    </div>
  );
};

export default Home;
