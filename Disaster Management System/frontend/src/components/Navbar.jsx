import React, { useState } from "react";
import { Globe2, Phone, Menu, X } from "lucide-react";
import logo from "../assets/DisasterLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState("normal");

  const increaseFontSize = () => {
    if (fontSize === "normal") setFontSize("large");
    else if (fontSize === "large") setFontSize("larger");
  };

  const decreaseFontSize = () => {
    if (fontSize === "larger") setFontSize("large");
    else if (fontSize === "large") setFontSize("normal");
  };

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-16">
          {/* Logo/Home */}
          <div className="flex-shrink-0">
            <img src={logo} alt="" className="w-29 h-30" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </a>
            {/* <a href="/disasters" className="text-gray-600 hover:text-gray-900">
              Disasters
            </a> */}

            <div className="relative group">
              <a
                href="/disasters"
                className="text-gray-600 hover:text-gray-900 inline-flex items-center"
              >
                Disasters
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>

              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <a
                  href="/disasters/flood"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Flood
                </a>
                <a
                  href="/disasters/landslide"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Landslide
                </a>
                <a
                  href="/disasters/drought"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Drought
                </a>
                <a
                  href="/disasters/cyclone"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Cyclone
                </a>
              </div>
            </div>
            {/* <a
              href="/current-climate"
              className="text-gray-600 hover:text-gray-900"
            >
              Current climate
            </a> */}
            {/* <a href="/locations" className="text-gray-600 hover:text-gray-900">
              Locations
            </a>
            <a href="/faqs" className="text-gray-600 hover:text-gray-900">
              FAQs
            </a> */}
          </div>

          {/* Accessibility and Language Controls */}
          <div className="hidden md:flex items-center space-x-4">
           
           
       
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Globe2 className="h-5 w-5 mr-1" />
                <span>English</span>
              </button>
            </div>
            <a
              href="tel:+1234567890"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <Phone className="h-5 w-5 mr-1" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="/disasters"
                className="text-gray-600 hover:text-gray-900"
              >
                Disasters
              </a>
              <a
                href="/current-climate"
                className="text-gray-600 hover:text-gray-900"
              >
                Current climate
              </a>
              <a
                href="/locations"
                className="text-gray-600 hover:text-gray-900"
              >
                Locations
              </a>
              <a href="/faqs" className="text-gray-600 hover:text-gray-900">
                FAQs
              </a>
              <div className="flex items-center space-x-4 pt-4">
                <button
                  onClick={decreaseFontSize}
                  className="text-gray-600 hover:text-gray-900 px-2"
                >
                  A
                </button>
                <button
                  onClick={increaseFontSize}
                  className="text-gray-600 hover:text-gray-900 px-2 text-lg"
                >
                  A
                </button>
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  <Globe2 className="h-5 w-5 mr-1" />
                  <span>English</span>
                </button>
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <Phone className="h-5 w-5 mr-1" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
