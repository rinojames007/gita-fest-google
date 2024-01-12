import React from "react";
import { Link } from "react-router-dom";

const NavToPages = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen">
      <div className="eventIncharge">
        <ul className="flex flex-col w-full justify-center items-center text-white font-bold text-2xl h-screen space-y-11 ">
        <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/profile"
            >
              Student Profile
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/eventIncharge/Profile"
            >
              Event Incharge Profile
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/eventCoordinator/Profile"
            >
              Event Coordinator Profile
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/organiser/Profile"
            >
              Organiser Profile
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/support/profile"
            >
              Help & Support Team Profile
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default NavToPages;
