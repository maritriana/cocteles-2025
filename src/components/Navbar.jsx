import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-pink-600">🍹 Cocteles App</h1>
      <ul className="flex gap-4">
        <li><Link to="/" className="hover:text-pink-500">Inicio</Link></li>
        <li><Link to="/cocteles" className="hover:text-pink-500">Cócteles</Link></li>
        <li><Link to="/infoapi" className="hover:text-pink-500">Info API</Link></li>
        <li><Link to="/equipo" className="hover:text-pink-500">Equipo</Link></li>
        <li><Link to="/login" className="hover:text-pink-500">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
