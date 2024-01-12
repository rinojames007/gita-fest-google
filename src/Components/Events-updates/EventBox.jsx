import React from "react";
import { Link } from "react-router-dom";

const EventBox = (props) => {
  return (
    <div className=" flex justify-center items-center sm:w-[48%] md:w-[30%] w-[90%] my-6 shadow-xl shadow-blue-700 rounded-xl">
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  w-full ">
        
          <img
            src={props.url}
            alt="event-img"
            className="w-full mx-auto rounded-xl"
          />
    
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Event Name
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
          Seize the opportunity to showcase your skills, learn from the best, 
          and leave your mark on the digital frontier.
          </p>
          <div className="flex justify-around">
          <Link
            to='/eventDetails'
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           Details
            
          </Link>
          <Link
            to='/register'
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           Register
            
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBox;
