import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Spinner from '../components/ui/Spinner';

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <>
      <Navbar />
      {isNavigating ? (
        <Spinner />
      ) : (
        <div className="min-h-[calc(100vh-421px)]">
          <Outlet />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Root;
