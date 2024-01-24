import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faIdBadge,
  faCalendarDays,
  faImages,
  faAward,
  faInbox,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navElem = [
    {
      url: "/notice",
      name: "Notices",
    },
    {
      url: "/schedules",
      name: "Schedules",
    },
    {
      url: "/coordinators",
      name: "Coordinators",
    },
    {
      url: "/gallery",
      name: "Gallery",
    },
    {
      url: "/fest/CreditsPage",
      name: "Credits",
    },
  ];
  return (
    <nav className="h-[50px] absolute sm:h-[60px] md:h-[70px] w-full flex justify-between items-center px-1 py-3 sm:px-5  z-50">
      {/* Logo */}
      <div className="logo flex justify-center items-center ">
        <Link
          to="/"
          className=" rounded-full backdrop-blur-sm md:backdrop-blur-none gradient-shift  h-[40px] w-[160px] sm:h-[50px] sm:w-[260px]  neon-border p-3 ring-4 ring-blue-500 transition-all duration-300 hover:cursor-pointer "
        >
          <div className="header  flex justify-center items-center bg-cover w-full h-full bg-center ">
            <h1
              className="text-2xl shadowText font-bold md:text-3xl text-white"
              id="Salsa-font"
              
            >
              Utsãh
            </h1>
            
          </div>
        </Link>
      </div>

      {/* navigations */}
      <div className="nav-contents hidden md:flex items-center">
        <ul className="flex items-center justify-center sm:space-x-4 xl:space-x-6 ">
          {navElem.map((item) => (
            <li
              key={item.name}
              className="hover:underline hover:scale-110 text-2xl font-bold hover:cursor-pointer "
              id="shadowText"
            >
              <Link
                to={item.url}
                className="transition-all duration-300 ease-in-out text-white hover:text-[#F5EFFF] hover:font-bold hover:shadow-md hover:shadow-[#9e92b0]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Side-Menu (mobile option) */}
      <div
        className="side-menu px-2 flex items-center my-auto md:hidden "
        id="MenuBar"
        onClick={toggleMobileMenu}
      >
        <FontAwesomeIcon icon={faBars} className="text-white text-3xl" />
      </div>
      <div
        className={`Mobile-Menu transition-all ease-out duration-300 transform ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } right-0 fixed top-0 bg-slate-100 w-[65%] rounded-10 space-y-3 delay-200 shadow-sm shadow-blue-300 px-8 py-12 text-lg font-semibold h-fit rounded-l-xl`}
      >
        <div
          className="cancel font-bold w-fit  relative -top-5"
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={faXmark} className="text-red-600 text-4xl" />
        </div>
        <ul className="nav-menu flex flex-col  space-y-5 font-semibold sm:pl-3 ">
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faHouse} className="px-1" />
              Home
            </Link>
          </li>

          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/notice"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faInbox} className="px-1" />
              Notices
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/schedules"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faCalendarDays} className="px-1" />
              Schedules
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/coordinators"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faIdBadge} className="px-1" />
              Coordinators
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/gallery"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faImages} className="px-1" />
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/fest/CreditsPage"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faAward} className="px-1" />
              Credits
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/help"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faHeadset} className="px-1" />
              help
            </Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <a
              href="https://www.instagram.com/akanksha_gita?igsh=ODA1NTc5OTg5Nw=="
              target="_blank"
            >
              <FontAwesomeIcon icon={faSquareInstagram} className="px-1" />{" "}
              Follow us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
