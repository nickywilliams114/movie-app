import React from "react";
import Landing from "../components/Landing";
import SearchMovie from "../components/SearchMovie";
import Animation from "../components/Animation";
import Movie from "../components/Movie";

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
