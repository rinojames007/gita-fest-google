import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../../Components/Events/EventCard";
import Navbar from "../../Components/Navbar/Navbar";

const Gallery = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen h-full">
      <Navbar/>
    <div className="flex pt-[150px] justify-around flex-col md:flex-row items-center">
      
      
      <Link to="/gallery/Photoes" className=" w-[90%] sm:w-[40%] ">
        <EventCard name="Photos" url={"../Gallery/gallery2.webp"} />
      </Link>

      <Link to="/gallery/Videos" className=" w-[90%] sm:w-[40%] ">
        <EventCard name="Videos" url={"../Gallery/gallery2.webp"} />
      </Link>
    </div>
    </div>
  );
};

export default Gallery;
