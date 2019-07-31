import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify App</h1>
    <NavLink to="/" exact={true} activeClassName="is-active">Homepage </NavLink>
    <NavLink to="/create" activeClassName="is-active">Create </NavLink>
  </header>
);

export default Header;