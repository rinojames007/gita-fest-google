import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
const NoticeBox = () => {
  return (
    
    <div className=" flex flex-col justify-center items-center space-y-9">
      {/* <div className="md:w-full w-full flex flex-col items-center justify-center space-y-3 text-[#721c24] text-center bg-[#f8d7da] p-[15px] rounded-lg border-[2px] shadow-xl shadow-black border-[#f4a1aa]">
        <h2 className="text-2xl font-bold text-center w-full">
          Registration Started for Ahwaan (Sports)
        </h2>
        <p className="text-lg font-semibold">
          <strong className="text-lg font-bold">Date:</strong> 19/02/2024 -
          20/02/2024
        </p>

        <Link to="/ahwan">
        <button className="bg-[#042136] text-white text-sm px-8 py-4 hover:scale-90 delay-100 rounded-md BlinkText">
          Register Now <FontAwesomeIcon icon={faLocationArrow} />
        </button>
        </Link>
      </div>

      <div className="md:w-full w-full flex flex-col items-center justify-center space-y-3 text-[#721c24] text-center bg-[#f8d7da] p-[15px] rounded-lg border-[2px] shadow-xl shadow-black border-[#f4a1aa]">
        <h2 className="text-2xl font-bold text-center w-full">
          Registration Started for Anwesh (Tech Fest)
        </h2>
        <p className="text-lg font-semibold">
          <strong className="text-lg font-bold">Date:</strong> 20/02/2024 -
          21/02/2024
        </p>

        <Link to="/anwesh/techEvents">
        <button className="bg-[#042136] text-white text-sm px-8 py-4 hover:scale-90 delay-100 rounded-md BlinkText">
          Register Now <FontAwesomeIcon icon={faLocationArrow} />
        </button>
        </Link>
      </div> */}
      <div className=" w-full flex flex-col items-center justify-center space-y-3 text-[#721c24] text-center bg-[#f8d7da] p-[15px] rounded-lg border-[2px] shadow-xl shadow-black border-[#f4a1aa]">
        <h2 className="text-2xl font-bold text-center w-full">
          Akanksha 2024 (Cultural Fest)
        </h2>
        <p className="text-lg font-semibold">
          <strong className="text-lg font-bold">Audition Date:</strong>{" "}
          08/02/2024 - 09/02/2024
        </p>

        <div className="flex space-x-7">
          <ul>
            <li className="font-bold text-xl">Date</li>
            <li className="text-sm font-semibold">08/02/2024</li>
            <li className="text-sm font-semibold">08/02/2024</li>
            <li className="text-sm font-semibold">08/02/2024</li>
            <li className="text-sm font-semibold">09/02/2024</li>
            <li className="text-sm font-semibold">09/02/2024</li>
          </ul>
          <ul>
            <li className="font-bold text-xl">Event</li>
            <li className="text-sm font-semibold">Song</li>
            <li className="text-sm font-semibold">Drama</li>
            <li className="text-sm font-semibold">Dance</li>
            <li className="text-sm font-semibold">Fashion</li>
            <li className="text-sm font-semibold">Anchoring</li>
          </ul>
          <ul>
            <li className="font-bold text-xl">Venue:</li>
            <li className="text-sm font-semibold">W004</li>
            <li className="text-sm font-semibold">Library</li>
            <li className="text-sm font-semibold">W001</li>
            <li className="text-sm font-semibold">W001</li>
            <li className="text-sm font-semibold">W003</li>
          </ul>
        </div>
      </div>

      <div className=" md:w-full w-full   flex flex-col md:px-[150px] items-center justify-center space-y-3 text-[#721c24] text-center bg-[#f8d7da] p-[15px] rounded-lg border-[2px] shadow-xl shadow-black border-[#f4a1aa]">
        <h2 className="text-2xl font-bold text-center w-full">Robotronics</h2>
        <p className="text-lg font-semibold">
          <strong className="text-lg font-bold">Registration Started</strong>
        </p>

        <Link to="/roboticsDetails">
          <button className="bg-[#042136] text-white text-sm px-8 py-4 hover:scale-90 delay-100 rounded-md BlinkText">
            More details <FontAwesomeIcon icon={faLocationArrow} />
          </button>
        </Link>
      </div>

      

      {/* <div className=" w-full flex flex-col items-center justify-center space-y-3 text-[#721c24] text-center bg-[#f8d7da] p-[15px] rounded-lg border-[2px] shadow-xl shadow-black border-[#f4a1aa]">
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
      </div> */}
    </div>
  );
};

export default NoticeBox;
