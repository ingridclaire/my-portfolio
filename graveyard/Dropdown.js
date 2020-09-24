import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {

  return (
    <div className="dropdown-container">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/portfolio">
        <div>Portfolio</div>
      </Link>
      <Link to="/contact">
        <div>Contact</div>
      </Link>
    </div>
  );
};

export default Dropdown;