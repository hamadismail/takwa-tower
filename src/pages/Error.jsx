import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../components/Navbar';

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      Error
    </>
  );
};

export default Error;
