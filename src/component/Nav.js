// Nav.js
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {

  return (
    <nav>
      <ul className="menu-list">
        <li><Link to="/" className="menu-item">Home</Link></li>
        <li><Link to="/about"className="menu-item">About</Link></li>
        <li><Link to="/menu"className="menu-item">Menu</Link></li>
        <li><Link to="/bookingPage"className="menu-item">Reservation</Link></li>
        <li><Link to="/order"className="menu-item">Order online</Link></li>
        <li><Link to="/login"className="menu-item">Login</Link></li>
      </ul>
    </nav>
  );
}
