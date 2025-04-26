import React from 'react';
import { FaChartArea, FaHome, FaPenNib } from 'react-icons/fa';
import { MdLiving } from 'react-icons/md';
import '../styles/house.css';
import { useNavigate } from 'react-router';

const House = ({ house }) => {
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img className="house-img" src={house.image} alt="Apartment" />
      </figure>
      <div className="p-4">
        <h2 className="card-title">{house.title}</h2>
        <div className="flex justify-between my-4 text-gray-600 font-medium">
          <div>
            <p className="flex gap-2 items-center">
              <FaHome />
              {house.features.type}
            </p>
            <p className="flex gap-2 items-center">
              <MdLiving />
              {house.features.rooms}
            </p>
          </div>
          <div>
            <p className="flex gap-2 items-center">
              <FaChartArea />
              {house.features.area}
            </p>
            <p className="flex gap-2 items-center">
              <FaPenNib />
              {house.features.year}
            </p>
          </div>
        </div>
        <div className="border-t pt-4 border-gray-300">
          <div className="flex justify-between gap-2 mb-2">
            <p className="line-through text-gray-500 font-medium">
              {house.price.original}
            </p>
            <p className="font-medium">{house.price.current}</p>
          </div>
          <div
            onClick={() => {
              navigate(`/house-details/${house.id}`);
              window.scrollTo(0, 0);
            }}
            className="bg-blue-600 text-white text-center font-medium cursor-pointer px-2 py-1 rounded"
          >
            View Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
