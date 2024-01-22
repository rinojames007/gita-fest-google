import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../../Components/Events/EventCard";
import Navbar from "../../Components/Navbar/Navbar";

const Gallery = () => {
  return (
    <div className="bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29] min-h-screen h-full">
      <Navbar />
      <div className="flex pt-[150px]  justify-around flex-col md:flex-row items-center">
        <Link
          to="/gallery/Photoes"
          className="w-[90%] sm:w-[40%] transition-transform transform hover:scale-105 focus:scale-105m hover:delay-200"
        >
          <EventCard
            name="Photos"
            desc="Click me"
            url={"https://i.postimg.cc/154JBZSs/photo.jpg"}
          />
        </Link>

        <Link
          to="/gallery/Videos"
          className="w-[90%] sm:w-[40%] transition-transform transform hover:scale-105 focus:scale-105m hover:delay-200"
        >
          <EventCard
            name="Videos"
            desc="Click me"
            url={
              "https://i.postimg.cc/FH6tpx8n/5e64c4917fd67c71a4a93820cddee7a8.gif"
            }
            // Add the GIF URL for the video here
            videoGifUrl={"https://example.com/your-video.gif"} // when it will use then should be
          />
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
