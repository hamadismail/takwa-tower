import React from 'react';
import banner from '../assets/images/banner.png';
import banner2 from '../assets/images/banner-2.jpg';
import '../styles/hero.css';

const Hero = () => {
  return (
    <div className="w-11/12 mx-auto border-4 border-white rounded-2xl py-4 md:py-12 bg-linear-to-b from-gray-100 to-white">
      <h1 className="text-3xl font-bold md:w-2/4 mx-auto text-center">
        Find Your Perfect Home Today
      </h1>
      <p className="md:w-5/6 mx-auto my-8 p-2 md:text-center text-justify">
        Trusted listings, easy communication, and flexible options, discover
        affordable rentals in your ideal neighborhood. Easy search, real-time
        listings, and trusted landlords. From cozy apartments to spacious family
        houses — find a place you'll love to call home.
      </p>

      <div className="flex justify-center flex-col md:flex-row gap-4 my-8 md:w-2/5 mx-auto">
        <img className="hero-img" src={banner} />
        <img className="hero-img" src={banner2} />
      </div>
    </div>
  );
};

export default Hero;
