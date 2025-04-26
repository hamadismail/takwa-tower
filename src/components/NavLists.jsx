import React from 'react';
import { NavLink } from 'react-router';

const NavLists = () => {
  const navLists = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/expenses">Expenses</NavLink>
      </li>
    </>
  );
  return navLists;
};

export default NavLists;
