import React from "react";
import { Link } from "react-router-dom";

const EventBox = (props) => {
  return (
    <div className=" flex justify-center items-center sm:w-[48%] md:w-[30%] w-[90%] my-6 shadow-2xl shadow-blue-700 rounded-xl">
      <div className=" h-full border rounded-lg shadow-lg shadow-[#FFD700] bg-gray-800 border-[#FFD700]  w-full ">
        <img
          src={props.url}
          alt="event-img"
          className="w-full mx-auto rounded-xl"
        />

        <div className="p-5">
          
            <h1 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
              {props.name}
            </h1>
          
          <p className="mb-3 font-normal text-gray-400 text-center text-sm">
            {props.desc}
          </p>
          <div className="date-time text-sm flex justify-between items-center text-white">
            <p >Date: <span className="px-2 text-xs font-light text-slate-200">{props.date}</span></p>
            <p >Time: <span className="px-2 text-xs font-light text-slate-200">{props.time}</span></p>
          </div>
          <div className="venuec text-sm mt-4 flex justify-center items-center text-white">
            Venue: <span className="px-2 text-xs font-light text-slate-200">{props.venue}</span>
          </div>
          <div className="flex justify-center mt-8 items-center">
            
            {/* <Link
              to={props.redirect}
              className="flex items-center justify-center px-9 w-[80%] py-3 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBox;
