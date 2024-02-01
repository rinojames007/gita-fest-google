import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
const NoticeBox = () => {
  return (
    <div className=" flex flex-col justify-center items-center space-y-9">
      <div className=" w-full flex flex-col items-center justify-center space-y-3 text-[#721c24] text-center bg-[#f8d7da] p-[15px] rounded-lg border-[2px] shadow-xl shadow-black border-[#f4a1aa]">
        <h2 className="text-2xl font-bold text-center w-full">
          Akanksha 2024 (Cultural Fest)
        </h2>
        <p className="text-lg font-semibold">
          <strong className="text-lg font-bold">Audition Date:</strong>{" "}08/02/2024 - 09/02/2024
          
        </p>
        <p>If anyone is interested to participate</p>
        <Link to="/akanksha">
          <button className="bg-[#042136] text-white text-sm px-8 py-4 hover:scale-90 delay-100 rounded-md BlinkText">
            Register here
          </button>
        </Link>
      </div>

      <div className=" w-full flex flex-col items-center justify-center space-y-3 text-[#721c24] text-center bg-[#f8d7da] p-[15px] rounded-lg border-[2px] shadow-xl shadow-black border-[#f4a1aa]">
        <h2 className="text-2xl font-bold text-center w-full">
          Audition for Odissi and Semi-Classical
        </h2>
        <p className="text-lg font-semibold">
          <strong className="text-xl font-bold">Audition Date:</strong>{" "}06/02/2024
          
        </p>
        <p>If anyone is interested, contact to:</p>
        <ul>
          <li>
            <strong>Coordinator:</strong> Kaibalya Ray (4th Year)
          </li>

          <li>
            <strong>Contact Number:</strong>{" "}
            <span className="font-semibold pl-3">7681011068</span>
          </li>
          <li className="mt-4">
            <strong>Faculty Coordinator:</strong> Dr. Sushmita Dash
          </li>

          <li>
            <strong>Contact Number:</strong>
            <span className="font-semibold pl-3">8895435809</span>
          </li>
        </ul>
      </div>

      <div className=" w-full flex flex-col items-center justify-center space-y-3 text-[#721c24] text-center bg-[#f8d7da] p-[15px] rounded-lg border-[2px] shadow-xl shadow-black border-[#f4a1aa]">
            <h2 className="text-2xl font-bold text-center w-full">
              Robotronics
            </h2>
            <p className="text-lg font-semibold">
              <strong className="text-lg font-bold">
                Registration Started
              </strong>
            </p>
            
            <Link to="/roboticsDetails">
              <button className="bg-[#042136] text-white text-sm px-8 py-4 hover:scale-90 delay-100 rounded-md BlinkText">
                More <FontAwesomeIcon icon={faLocationArrow} />
              </button>
            </Link>
          </div>
    </div>
  );
};

export default NoticeBox;
