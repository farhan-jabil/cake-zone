import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarBottom = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getLinkClass = (path) =>
    `block rounded transition duration-500 ease-in-out ${
      currentPath === path
        ? "text-[#E88F2F]"
        : "text-white hover:text-[#E88F2F]"
    } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent`;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div>
        <nav className="bg-[#2B2825] border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex items-center mx-auto">
            <div
              className="hidden mx-auto w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium text-lg flex flex-col mt-4 border border-gray-100 rounded-lg md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="py-8 px-4 cursor-pointer">
                  <Link to="/" className={getLinkClass("/")}>
                    HOME
                  </Link>
                </li>
                <li className="py-8 px-4 cursor-pointer">
                  <Link to="/about" className={getLinkClass("/about")}>
                    ABOUT US
                  </Link>
                </li>
                <li className="py-8 px-4 cursor-pointer">
                  <Link
                    to="/menu-pricing"
                    className={getLinkClass("/menu-pricing")}
                  >
                    MENU & PRICING
                  </Link>
                </li>
                <li className="py-8 px-4 cursor-pointer">
                  <Link
                    to="/master-pages"
                    className={getLinkClass("/master-pages")}
                  >
                    MASTER PAGES
                  </Link>
                </li>
                <li className="relative py-8 px-4 cursor-pointer">
                  <div
                    onClick={toggleDropdown}
                    className={`flex items-center justify-between cursor-pointer ${
                      currentPath.startsWith("/pages")
                        ? "text-[#E88F2F]"
                        : "text-white hover:text-[#E88F2F]"
                    }`}
                  >
                    <span>PAGES</span>
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 011.06 1.06l-4 3.5a.75.75 0 01-1.06 0l-4-3.5a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg dark:bg-gray-800">
                      <li>
                        <Link
                          to="/service"
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Our Service
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/testimonial"
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Testimonial
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="py-8 px-4 cursor-pointer">
                  <Link
                    to="/contact"
                    className={getLinkClass("/contact")}
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarBottom;
