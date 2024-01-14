import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="h-[50px] fixed backdrop-blur-xl sm:h-[60px] md:h-[70px] w-full  flex justify-between items-center px-1 py-3 sm:px-5 gradient-shift z-50">
      {/* Logo */}
      <div className="logo h-[40px] w-[160px] sm:h-[50px] sm:w-[260px] rounded-full neon-border p-3 ring-4 ring-blue-500 flex justify-center items-center transition-all duration-300 hover:cursor-pointer ">
        <Link to="/" className="w-full h-full">
          <div className="header flex justify-center items-center bg-cover w-full h-full bg-center rounded-full ">
            <h1 className="text-xl font-bold sm:text-3xl text-white">
              Akanksha
            </h1>
          </div>
        </Link>
      </div>

      {/* navigations */}
      <div className="nav-contents hidden md:flex items-center">
        <ul className="flex items-center justify-center sm:space-x-4 xl:space-x-6 text-xl font-bold">
          <li className="hover:underline text-white  hover:shadow-purple-800 hover:shadow-lg  hover:cursor-pointer">
            <Link to="/schedules">Schedules</Link>
          </li>

          <li className="hover:underline text-white  hover:shadow-purple-800 hover:shadow-lg  hover:cursor-pointer">
            <Link to="/coordinators">Coordinators</Link>
          </li>

          <li className="hover:underline text-white  hover:shadow-purple-800 hover:shadow-lg  hover:cursor-pointer">
            <Link to="/gallery">Gallery</Link>
          </li>

          <li className="hover:underline text-white  hover:shadow-purple-800 hover:shadow-lg  hover:cursor-pointer">
            <Link to="/fest/CreditsPage">Credits</Link>
          </li>

          <li className="hover:underline text-white  hover:shadow-purple-800 hover:shadow-lg  hover:cursor-pointer">
            <a
              href="https://www.instagram.com/akanksha_gita?igsh=ODA1NTc5OTg5Nw=="
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} /> Follow us
            </a>
          </li>
        </ul>
      </div>

      {/* Side-Menu (mobile option) */}
      <div
        className="side-menu px-2 flex items-center my-auto md:hidden "
        id="MenuBar"
        onClick={toggleMobileMenu}
      >
        <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
      </div>
      <div
        className={`Mobile-Menu  transition-all  ease-out z-10 ${
          isMobileMenuOpen ? "right-0" : "-right-[100%] hidden"
        }   absolute top-0 bg-slate-100 w-[60%] rounded-10 space-y-4 delay-200 shadow-sm shadow-blue-300 px-8 py-16 text-lg font-semibold h-fit rounded-xl`}
      >
        <div
          className="cancel font-bold w-fit text-3xl relative -top-8 left-[2%]"
          onClick={toggleMobileMenu}
        >
          <img src="./cross.png" alt="cross-icon" className="h-[30px]" />
        </div>
        <ul className="nav-menu flex flex-col items-center space-y-3 font-semibold ">
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/coordinators"
              onClick={toggleMobileMenu}
            >
              Coordinators
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/gallery"
              onClick={toggleMobileMenu}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/fest/CreditsPage"
              onClick={toggleMobileMenu}
            >
              Credits
            </Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <a
              href="https://www.instagram.com/akanksha_gita?igsh=ODA1NTc5OTg5Nw=="
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} /> Follow us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
