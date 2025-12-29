import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Discounted from "../components/ui/Discounted";
import Explore from "../components/Explore";
import Featured from "../components/featured";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
