import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarBottom = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const getLinkClass = (path) =>
    `block rounded transition duration-500 ease-in-out ${
      currentPath === path
        ? "text-[#E88F2F]"
        : "text-white hover:text-[#E88F2F]"
    } md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent`;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <>
      <div>
        <nav className="hidden md:block bg-[#2B2825] border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex items-center mx-auto">
            <div className="mx-auto w-full md:w-auto" id="navbar-default">
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
                    <i className="fa-solid fa-caret-down ml-[6px]"></i>
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
                  <Link to="/contact" className={getLinkClass("/contact")}>
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="block md:hidden bg-[#2B2825] border-b-[1px] border-gray-200 dark:bg-gray-900 p-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <div className="flex h-full text-[26px] space-x-3 justify-center items-center">
                <div>
                  <i className="fa-solid fa-cake-candles text-[#E88F2F]"></i>
                </div>
                <div className="font-bold text-white">CAKEZONE</div>
              </div>
            </Link>
            <div
              className="py-1 px-4 border-[1px] border-[#9F9E9D] cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <i className="fa-solid fa-bars text-[#9F9E9D] text-xl"></i>
            </div>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "max-h-screen" : "max-h-0"
            } overflow-hidden transition-max-height duration-500 ease-in-out`}
          >
            <ul className="font-medium text-lg flex flex-col mt-4 dark:bg-gray-800 dark:border-gray-700">
              <li className="py-4 px-4 cursor-pointer">
                <Link
                  to="/"
                  className={getLinkClass("/")}
                  onClick={toggleMobileMenu}
                >
                  HOME
                </Link>
              </li>
              <li className="py-4 px-4 cursor-pointer">
                <Link
                  to="/about"
                  className={getLinkClass("/about")}
                  onClick={toggleMobileMenu}
                >
                  ABOUT US
                </Link>
              </li>
              <li className="py-4 px-4 cursor-pointer">
                <Link
                  to="/menu-pricing"
                  className={getLinkClass("/menu-pricing")}
                  onClick={toggleMobileMenu}
                >
                  MENU & PRICING
                </Link>
              </li>
              <li className="py-4 px-4 cursor-pointer">
                <Link
                  to="/master-pages"
                  className={getLinkClass("/master-pages")}
                  onClick={toggleMobileMenu}
                >
                  MASTER PAGES
                </Link>
              </li>
              <li className="relative py-4 px-4 cursor-pointer">
                <div
                  onClick={toggleMobileDropdown}
                  className={`flex items-center cursor-pointer ${
                    currentPath.startsWith("/pages")
                      ? "text-[#E88F2F]"
                      : "text-white hover:text-[#E88F2F]"
                  }`}
                >
                  <span>PAGES</span>
                  <i className="fa-solid fa-caret-down ml-[10px]"></i>
                </div>
                {isMobileDropdownOpen && (
                  <ul className="mt-2 pl-4 border-l-2 border-gray-700">
                    <li className="py-2">
                      <Link
                        to="/service"
                        className="block text-white dark:text-gray-200 dark:hover:bg-gray-600"
                        onClick={() => {
                          setIsMobileDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Our Service
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/testimonial"
                        className="block text-white dark:text-gray-200 dark:hover:bg-gray-600"
                        onClick={() => {
                          setIsMobileDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Testimonial
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="py-4 px-4 cursor-pointer">
                <Link
                  to="/contact"
                  className={getLinkClass("/contact")}
                  onClick={toggleMobileMenu}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarBottom;
