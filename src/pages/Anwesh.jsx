import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import EventCard from "../Components/Events/EventCard";

const Anwesh = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [timeToStart, setTimeToStart] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  

  
  return (
    <div className=" min-h-screen w-screen bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29]">
      <Navbar />
      {/* Tech Fest */}
      <div className=" pt-[60px] flex flex-col justify-center items-center text-center w-full">
        
        <div className="headingSection flex flex-col md:flex-row md:space-x-2 mt-5 justify-center items-center">
          <h1 className="md:text-5xl text-3xl font-bold text-white text-center">
          Anwesh 
          </h1>
          <h1 className="md:text-3xl text-xl font-semibold my-2 text-white text-center">
          (Tech-Fest)
          </h1>
        </div>
        <span className="md:text-lg text-sm font-semibold text-[#fcfcfc] my-4">( 20.02.2024 & 21.02.2024 )</span>
        <p className="text-sm mb-8 text-slate-200 px-2 text-center">
          Welcome to the gateway of innovation! Our Techfest Registration Page
          is your ticket to an exhilarating world of technology and creativity.
        </p>
       
        <div className="Event-Container w-full flex justify-around flex-wrap">
        <Link to="/anwesh/techEvents" className=" w-[90%] sm:w-[30%] h-fit active:scale-90">
          <EventCard name="Tech Fest" url={"https://i.postimg.cc/1Xy5R4wq/techfest.jpg"} desc={"Click here"} />
        </Link>
        <Link to="/roboticsDetails" className=" w-[90%] sm:w-[30%] h-fit active:scale-90">
          <EventCard name="Robotics" url={"https://i.postimg.cc/y6rQB070/robotics.jpg"} desc={"Click here"} />
        </Link> 

        <div className="ilustrator flex justify-center w-full items-center py-[8px] ">
          <img
            src="https://i.postimg.cc/RV2msmVY/Innovation-amico.webp"
            alt="ilustrator"
            className="w-[70%] md:w-[350px]"
          />
        </div>
          
        </div>
      </div>
      {showBackToTop && (
          <button
            className="fixed bottom-8 right-8 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={scrollToTop}
          >
            Back to Top
          </button>
        )}
    </div>
  );
};

export default Anwesh;
