import React from 'react';
import sponson1 from '../assets/images/sponsor-1.jpg';

const Partners = () => {
  return (
    <div className="mt-8 bg-base-100 py-12">
      <h1 className="text-center text-3xl font-bold">Our Partners</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-4">
        <div className="flex items-center gap-4">
          <img className="w-12" src={sponson1} />
          <div>
            <h1 className="text-xl font-bold">Xpeed</h1>
            <p className="text-sm text-gray-600 font-medium">
              Xpeed Energy Resources Ltd.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img className="w-12 rounded" src={sponson1} />
          <div>
            <h1 className="text-xl font-bold">Xpeed</h1>
            <p className="text-sm text-gray-600 font-medium">
              Xpeed Energy Resources Ltd.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img className="w-12" src={sponson1} />
          <div>
            <h1 className="text-xl font-bold">Xpeed</h1>
            <p className="text-sm text-gray-600 font-medium">
              Xpeed Energy Resources Ltd.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img className="w-12" src={sponson1} />
          <div>
            <h1 className="text-xl font-bold">Xpeed</h1>
            <p className="text-sm text-gray-600 font-medium">
              Xpeed Energy Resources Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
