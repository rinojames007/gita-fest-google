import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../../Components/Events/EventCard";

const Gallery = () => {
  return (
    <div className="bg-gradient-to-b py-[60px] md:py-5  from-black via-purple-900 to-black min-h-screen h-full flex justify-around flex-col md:flex-row items-center">
      <div className="absolute top-4 left-4">
        <Link to="/" className="w-fit">
          <button className="bg-slate-600 px-5 py-2 text-lg font-semibold rounded-md hover:scale-90 hover:text-red-600 text-white">
            Back
          </button>
        </Link>
      </div>
      <Link to="/gallery/Photoes" className=" w-[90%] sm:w-[40%] ">
        <EventCard name="Photos" url={"../Gallery/gallery2.webp"} />
      </Link>

      <Link to="/gallery/Videos" className=" w-[90%] sm:w-[40%] ">
        <EventCard name="Videos" url={"../Gallery/gallery2.webp"} />
      </Link>
    </div>
  );
};

export default Gallery;
