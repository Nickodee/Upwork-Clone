"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileDropdown = (item) => {
    setMobileDropdown(mobileDropdown === item ? null : item);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DEV.co
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {["Skills", "Services", "Technology"].map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => setHoveredDropdown(item)}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
                {item} {hoveredDropdown === item ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
              </button>

              {/* Dropdown - Centered Below Item */}
              {hoveredDropdown === item && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-96 bg-white shadow-lg rounded-lg mt-2">
                  <div className="p-4">
                    {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                      <Link
                        key={index}
                        href={`/${item.toLowerCase()}/${option.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-6 py-2 hover:bg-blue-100 rounded-lg"
                      >
                        {option}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link href="/industries" className="text-gray-700 hover:text-blue-600 transition">
            Industries
          </Link>
          <Link href="/our-work" className="text-gray-700 hover:text-blue-600 transition">
            Our Work
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="https://account.dev.co/login" className="text-gray-700 hover:text-blue-600 transition">
            Login
          </Link>
          <Link
            href="https://account.dev.co/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {["Skills", "Services", "Technology"].map((item) => (
            <div key={item}>
              <button
                onClick={() => toggleMobileDropdown(item)}
                className="flex justify-between items-center w-full py-2 px-6 text-gray-700 hover:bg-blue-100"
              >
                {item}
                {mobileDropdown === item ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              {/* Mobile Dropdown */}
              {mobileDropdown === item && (
                <div className="bg-gray-100 px-6 py-2">
                  {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                    <Link
                      key={index}
                      href={`/${item.toLowerCase()}/${option.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block py-2 text-gray-700 hover:bg-blue-200 rounded-lg"
                    >
                      {option}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/industries" className="block py-2 px-6 text-gray-700 hover:bg-blue-100">
            Industries
          </Link>
          <Link href="/our-work" className="block py-2 px-6 text-gray-700 hover:bg-blue-100">
            Our Work
          </Link>
          <Link href="/about" className="block py-2 px-6 text-gray-700 hover:bg-blue-100">
            About
          </Link>
          <Link href="/contact" className="block py-2 px-6 text-gray-700 hover:bg-blue-100">
            Contact
          </Link>
          <Link href="https://account.dev.co/login" className="block py-2 px-6 text-gray-700 hover:bg-blue-100">
            Login
          </Link>
          <Link href="https://account.dev.co/signup" className="block py-2 px-6 text-white bg-blue-600 hover:bg-blue-700">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
