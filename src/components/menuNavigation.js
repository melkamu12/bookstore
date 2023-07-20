import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLink = () => (
  <header>
    {' '}
    <nav className="menulist">
      <span>BookStore CMS</span>
      <ul className="nav-list">
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </header>
);
export default NavigationLink;
