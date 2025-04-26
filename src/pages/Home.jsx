import React from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import HouseContainer from '../components/HouseContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
  const houses = useLoaderData();
  return (
    <div>
      <Hero />
      <HouseContainer houses={houses} />
      <Partners />
    </div>
  );
};

export default Home;
