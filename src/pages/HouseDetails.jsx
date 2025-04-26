import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import '../styles/house-details.css';
import { FaLocationDot } from 'react-icons/fa6';
import { FaChartArea, FaHome, FaPenNib } from 'react-icons/fa';
import { MdLiving } from 'react-icons/md';

const HouseDetails = () => {
  const { houseId } = useParams();
  const houses = useLoaderData();
  const house = houses.find(h => h.id === parseInt(houseId));

  return (
    <div className="w-11/12 mx-auto text-gray-800">
      <p className="text-xl font-semibold rounded-2xl bg-white p-4">
        Property Details
      </p>

      <div className="flex flex-col md:flex-row gap-4 mt-4 bg-white p-8 rounded-2xl">
        <div className="flex-[5]">
          <img className="w-full rounded-t-2xl house-img" src={house.image} />
        </div>
        <div className="flex-[5]">
          <p className="text-2xl font-semibold">{house.title}</p>
          <p className="flex mt-1 gap-1 text-xl font-medium text-gray-600 items-center">
            <FaLocationDot />
            {house.location}
          </p>
          <p className="mt-4 text-gray-800 font-medium">{house.description}</p>

          <div className="text-gray-600 font-medium">
            <div className="flex mt-4 gap-2">
              <p className="flex gap-2 items-center bg-gray-200 px-2 rounded-full">
                <FaHome />
                {`Type: ${house.features.type}`}
              </p>
              <p className="flex gap-2 items-center bg-gray-200 px-2 rounded-full">
                <MdLiving />
                {`Rooms: ${house.features.rooms}`}
              </p>
            </div>

            <div className="flex mt-2 gap-2">
              <p className="flex gap-2 items-center bg-gray-200 px-2 rounded-full">
                <FaChartArea />
                {`Area: ${house.features.area}`}
              </p>
              <p className="flex gap-2 items-center bg-gray-200 px-2 rounded-full">
                <FaPenNib />
                {`Year: ${house.features.year}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
