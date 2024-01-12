import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import React from "react";

const Akanksha = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-black via-purple-900 to-black pt-[60px] min-h-screen">
        <h1 className="font-bold text-5xl text-center py-5 text-white">
          Akanksha Events...
        </h1>
        <div className="Participants w-full my-9">
          <Link to="/akanksha/registrationPage" className="w-full flex justify-center">
            <div className="events w-full h-[80px] md:w-[50%] sm:h-[100px] bg-slate-800 px-3 rounded-xl opacity-80 hover:scale-90 hover:opacity-30  font-bold text-4xl  hover:text-6xl  flex justify-center items-center shadow-lg shadow-blue-400 ">
              <p className="text-center opacity-100 text-white ">
                Register
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Akanksha;
