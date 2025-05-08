import React from "react";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import HouseContainer from "../components/HouseContainer";
import { useLoaderData } from "react-router";
import Finance from "../components/Finance";

const Home = () => {
  const houses = useLoaderData();
  return (
    <div>
      <Hero />
      <Finance />
      <HouseContainer houses={houses} />
      <Partners />
    </div>
  );
};

export default Home;
