import React from "react";
import { Link } from "react-router-dom";

const Navvar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold hover:text-sky-200">
          🌤️ Weather App
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-6 text-lg">
          <li>
            <Link to="/" className="hover:text-sky-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-sky-200 transition">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navvar;
