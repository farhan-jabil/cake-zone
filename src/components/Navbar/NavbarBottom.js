import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const NavbarBottom = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [topButton, setTopButton] = useState("hidden");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsNavbarFixed(true);
        setTopButton("block");
      } else {
        setIsNavbarFixed(false);
        setTopButton("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <nav
          className={`navbar-transition ${
            isNavbarFixed ? "fixed top-0 left-0 right-0 z-50" : ""
          } hidden lg:block bg-[#2B2825] border-gray-200 dark:bg-gray-900`}
        >
          <div className="max-w-screen-xl flex items-center mx-auto">
            <div className="mx-auto w-full md:w-auto" id="navbar-default">
              <ul className="font-medium text-lg flex flex-col mt-4 border border-gray-100 rounded-lg md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li
                  className={`${
                    isNavbarFixed ? "py-5" : "py-8"
                  } px-4 cursor-pointer`}
                >
                  <Link
                    to="hero"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                    className="block rounded transition duration-500 ease-in-out text-white hover:text-[#E88F2F] md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    HOME
                  </Link>
                </li>
                <li
                  className={`${
                    isNavbarFixed ? "py-5" : "py-8"
                  } px-4 cursor-pointer`}
                >
                  <Link
                    to="about"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                    className="block rounded transition duration-500 ease-in-out text-white hover:text-[#E88F2F] md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    ABOUT US
                  </Link>
                </li>
                <li
                  className={`${
                    isNavbarFixed ? "py-5" : "py-8"
                  } px-4 cursor-pointer`}
                >
                  <Link
                    to="menu-pricing"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                    className="block rounded transition duration-500 ease-in-out text-white hover:text-[#E88F2F] md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    MENU & PRICING
                  </Link>
                </li>
                <li
                  className={`${
                    isNavbarFixed ? "py-5" : "py-8"
                  } px-4 cursor-pointer`}
                >
                  <Link
                    to="service"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                    className="block rounded transition duration-500 ease-in-out text-white hover:text-[#E88F2F] md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    SERVICES
                  </Link>
                </li>
                <li
                  className={`${
                    isNavbarFixed ? "py-5" : "py-8"
                  } px-4 cursor-pointer`}
                >
                  <Link
                    to="master-chefs"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                    className="block rounded transition duration-500 ease-in-out text-white hover:text-[#E88F2F] md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    MASTER CHEFS
                  </Link>
                </li>
                <li
                  className={`${
                    isNavbarFixed ? "py-5" : "py-8"
                  } px-4 cursor-pointer`}
                >
                  <Link
                    to="testimonial"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                    className="block rounded transition duration-500 ease-in-out text-white hover:text-[#E88F2F] md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    TESTIMONIAL
                  </Link>
                </li>
                <li
                  className={`${
                    isNavbarFixed ? "py-5" : "py-8"
                  } px-4 cursor-pointer`}
                >
                  <Link
                    to="contact"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                    className="block rounded transition duration-500 ease-in-out text-white hover:text-[#E88F2F] md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav
          className={`navbar-transition ${
            isNavbarFixed ? "fixed top-0 left-0 right-0 z-50" : ""
          } block lg:hidden bg-[#2B2825] border-b-[1px] border-gray-200 dark:bg-gray-900 p-4`}
        >
          <div className="flex justify-between items-center">
            <a href="#home">
              <div className="flex h-full text-[26px] space-x-3 justify-center items-center">
                <div>
                  <i className="fa-solid fa-cake-candles text-[#E88F2F]"></i>
                </div>
                <div className="font-bold text-white">CAKEZONE</div>
              </div>
            </a>
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
                  to="hero"
                  smooth={true}
                  spy={true}
                  activeClass="active"
                  className="block rounded transition duration-500 ease-in-out text-white hover:text-[#E88F2F] md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={toggleMobileMenu}
                >
                  HOME
                </Link>
              </li>
              <li className="py-4 px-4 cursor-pointer">
                <Link
                  to="about"
                  smooth={true}
                  spy={true}
                  activeClass="active"
                  className="block rounded transition duration-500 ease-in-out text-white hover:text-[#E88F2F] md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={toggleMobileMenu}
                >
                  ABOUT
                </Link>
              </li>
              <li className="py-4 px-4 cursor-pointer">
                <Link
                  to="menu-pricing"
                  smooth={true}
                  spy={true}
                  activeClass="active"
                  className="block rounded transition duration-500 ease-in-out text-white hover:text-[#E88F2F] md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={toggleMobileMenu}
                >
                  MENU & PRICING
                </Link>
              </li>
              <li className="py-4 px-4 cursor-pointer">
                <Link
                  to="services"
                  smooth={true}
                  spy={true}
                  activeClass="active"
                  className="block rounded transition duration-500 ease-in-out text-white hover:text-[#E88F2F] md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={toggleMobileMenu}
                >
                  SERVICES
                </Link>
              </li>
              <li className="py-4 px-4 cursor-pointer">
                <Link
                  to="testimonial"
                  smooth={true}
                  spy={true}
                  activeClass="active"
                  className="block rounded transition duration-500 ease-in-out text-white hover:text-[#E88F2F] md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={toggleMobileMenu}
                >
                  TESTIMONIAL
                </Link>
              </li>
              <li className="py-4 px-4 cursor-pointer">
                <Link
                  to="contact"
                  smooth={true}
                  spy={true}
                  activeClass="active"
                  className="block rounded transition duration-500 ease-in-out text-white hover:text-[#E88F2F] md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={toggleMobileMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="cursor-pointer opacity-100">
          <Link
            to="hero"
            smooth={true}
            className={`${topButton} fixed right-3 lg:right-10 text-white rounded-lg bottom-5 p-1 bg-[#E88F2F]`}
          >
            <div className="border border-white p-2 rounded-lg">
              <i className="fa-solid fa-chevron-up"></i>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarBottom;
