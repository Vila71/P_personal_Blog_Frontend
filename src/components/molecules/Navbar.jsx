// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className="navbar__links">
        <li><Link to="/conoceme">Conóceme</Link></li>
        <li><Link to="/salud">Salud</Link></li>
        <li><Link to="/nutricion">Nutrición</Link></li>
        <li><Link to="/autocuidado">Autocuidado</Link></li>
      </ul>
      <div className="navbar__search">
        <input type="text" placeholder="Buscar..." />
        <button>Buscar</button>
      </div>
    </nav>
  );
}

export default Navbar;

