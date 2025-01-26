import React, { useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/order" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkOut" },
  ];

  return (
    <nav className="navbar bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg px-4 lg:px-10">
      {/* Left Section: Logo and Hamburger */}
      <div className="flex items-center">
        <Link to="/" className="text-3xl text-white">
          <HiBars3CenterLeft />
        </Link>
        <span className="ml-4 font-bold text-lg hidden md:block">
          Saylani Welfare Qarze Hasana
        </span>
      </div>

      {/* Right Section: Icons and Dropdown */}
      <div className="flex items-center gap-4">
        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdown((prev) => !prev)}
            className="btn btn-ghost btn-circle"
          >
            <CiUser className="text-2xl" />
          </button>
          {isDropdown && (
            <div className="absolute mt-2 right-0 bg-white text-gray-800 shadow-lg rounded-lg w-48 z-10">
              <ul className="menu menu-compact">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      onClick={() => setIsDropdown(false)}
                      className="px-4 py-2 hover:bg-blue-100 hover:text-blue-800"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Favorites Icon */}
        <Link to="/favorites" className="btn btn-ghost btn-circle">
          <CiHeart className="text-2xl" />
        </Link>

        {/* Cart Button */}
        <Link
          to="/cart"
          className="btn btn-primary btn-circle flex items-center justify-center gap-2"
        >
          <IoCartOutline className="text-xl" />
          <span className="hidden md:inline text-sm font-medium">Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
