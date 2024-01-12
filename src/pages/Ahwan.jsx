import React from "react";
// import EventBox from "../Components/Event-box/EventBox";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import EventCard from "../Components/Events/EventCard";

const Ahwan = () => {
   
  return (
    <div className=" min-h-screen w-screen bg-gradient-to-b from-black via-purple-900 to-black">
        <Navbar/>
      {/* Tech Fest */}
      <div className=" pt-[60px]  h-full flex flex-col justify-center items-center">
      
        <h1 className="text-5xl font-bold my-4 text-white">Ahwan</h1>
        <p className="text-sm mb-8 text-center text-slate-200">
          Welcome to the gateway of Our Sports Registration Page Get ready to
          dive into a world of physical prowess and sportsmanship!
        </p>
        <div className="Event-Container w-full flex justify-around flex-wrap">
        <Link to="/ahwanBoys" className=" w-[95%] sm:w-[30%]">
          <EventCard name="Boys" url={"https://i.postimg.cc/N04y7f5x/men.webp"} />
        </Link>
        <Link to="/ahwanGirls" className=" w-[95%] sm:w-[30%]">
          <EventCard name="Girls" url={"https://i.postimg.cc/cHLvDy3G/women.jpg"} />
        </Link>
         
          {/*  */}
        </div>
      </div>
   </div>
  );
};

export default Ahwan;
