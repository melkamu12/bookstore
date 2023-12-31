import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import './navmenu.css';

const NavigationLink = () => (
  <header>
    <nav className="nav">
      <ul className="nav-container">
        <h1 className="Bookstore-CMS">Bookstore CMS</h1>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>

      <UserProfile />
    </nav>
  </header>
);
export default NavigationLink;
