import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center h-fit w-full">
        <div className="about flex  justify-center items-center">
          <a
            href="https://gita.edu.in/"
            target="_blank"
            className="md:flex space-x-2 hidden text-white hover:text-red-500 "
          >
            <img src="Gita-logo.png" alt="Logo Gita" className="w-[20px]" />
            <p className=" text-xs underline underline-offset-2 ">
              GITA Autonomous College, Bhubaneswar
            </p>
          </a>
          {/* <a href="https://www.instagram.com/gitabbsr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="flex space-x-1">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="px-1 text-pink-600"
            />
            <p className=" text-xs underline underline-offset-2 text-white">gitabbsr</p>
          </a> */}
        </div>
        <ul className="flex flex-col md:flex-row justify-center items-center pt-[30px] md:h-[80px] h-fit w-full space-y-4 md:space-y-0  md:space-x-5">
          <Link to="/fest/CreditsPage">
            <li className="font-semibold underline text-sm sm:text-lg text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer">
              Credits
            </li>
          </Link>
          <Link to="/feedback">
            <li className="font-semibold underline text-sm sm:text-lg text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer">
              Your Feedback
            </li>
          </Link>
          <Link to="/coordinators" className="hidden md:block">
            <li className="font-semibold underline text-sm sm:text-lg text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer">
              Event Coordinators
            </li>
          </Link>
          <Link to="/help">
            <li className="font-semibold underline text-sm sm:text-lg text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer">
              Help and Support
            </li>
          </Link>
          <li className="font-semibold hidden md:block underline text-sm sm:text-lg text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer">
            <a
              href="https://www.instagram.com/utsah_gita?igsh=MThpaGJkMWo1d2xqMg"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSquareInstagram} className="px-1  text-pink-600 w-fit rounded-md" />
              Follow us
            </a>
          </li>
          <li className="font-semibold hidden underline text-sm sm:text-lg text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer">
            <Link
              to='/insta'
            >
              <FontAwesomeIcon icon={faSquareInstagram} className="px-1  text-pink-600 w-fit rounded-md" />
              Follow us
            </Link>
          </li>
        </ul>
        <a
            href="https://gita.edu.in/"
            target="_blank"
            className="flex space-x-2 md:hidden py-2 text-white hover:text-red-500 "
          >
            <img src="Gita-logo.png" alt="Logo Gita" className="w-[20px]" />
            <p className=" text-xs underline underline-offset-2 ">
              GITA Autonomous College, Bhubaneswar
            </p>
          </a>
      </div>
      <img
        src="https://i.postimg.cc/d0v1JPgT/Annual-Function-2024-Banner.webp"
        alt="Banner"
        className="mx-auto w-[100%] md:hidden rounded-lg border-2 border-black shadow-lg mt-6 shadow-black"
      />
    </div>
  );
};

export default Footer;
