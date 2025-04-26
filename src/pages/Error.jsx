import React from 'react';
import { Link, useNavigation, useRouteError } from 'react-router';
import Navbar from '../components/Navbar';
import Spinner from '../components/ui/Spinner';

const Error = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  const error = useRouteError();
  return (
    <>
      <Navbar />
      {isNavigating ? (
        <Spinner />
      ) : (
        <div className="py-24 text-center">
          <h1 className="mb-8 text-7xl font-thin text-gray-900">
            {error?.status || 404}
          </h1>
          <p className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
            {error?.error?.message || 'Something Went Wrong!'}
          </p>
          <Link to="/">
            <button className="btn btn-wide bg-[#1A77F2] text-white border-none rounded-3xl">
              Go To Home Page
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Error;
