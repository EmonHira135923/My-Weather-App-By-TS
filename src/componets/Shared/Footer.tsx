import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Weather App. All rights reserved.
        </p>

        {/* Center - Developer */}
        <p className="text-sm">
          Made with ❤️ by{" "}
          <span className="font-semibold">Emon Hossain Hira</span>
        </p>

        {/* Right - Links */}
        <div className="flex gap-4 text-sm">
          <a href="/" className="hover:text-sky-200 transition">
            Home
          </a>
          <a href="/about" className="hover:text-sky-200 transition">
            About Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
