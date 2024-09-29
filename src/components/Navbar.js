import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-links">
            <Link className="navbar-link" to="/">Entries</Link>
            <Link className="navbar-link" to="/dues">Dues</Link>
        </div>
    </nav>
  );
}

export default Navbar;
