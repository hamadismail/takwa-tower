import React from 'react';
import House from './House';

const HouseContainer = ({ houses }) => {
  return (
    <div className="my-8 w-11/12 mx-auto">
      <h1 className="text-2xl text-center font-bold">
        Our Best Properties For Sold
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {houses.map(house => (
          <House key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default HouseContainer;
