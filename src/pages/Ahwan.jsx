import React, { useEffect, useState } from "react";
// import EventBox from "../Components/Event-box/EventBox";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import EventCard from "../Components/Events/EventCard";

const Ahwan = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
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

  const handleIframeLoad = () => {
    // Set loading to false when the iframe has finished loading
    setLoading(false);
  };

  return (
    <div className=" min-h-screen w-screen bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29]">
      <Navbar />
      {/* Tech Fest */}
      <div className=" pt-[60px]  h-full flex flex-col justify-center  items-center">
        <div className="headingSection flex flex-col md:flex-row md:space-x-2 mt-5 justify-center items-center">
          <h1 className="md:text-5xl text-3xl font-bold text-white text-center">
            Ahwaan
          </h1>
          <h1 className="md:text-5xl text-3xl font-bold my-2 text-white text-center">
            (Annual Sports)
          </h1>
        </div>

        <span className="md:text-2xl text-xl font-bold text-[#fcfcfc] my-4">
          ( 19.02.2024 & 20.02.2024 )
        </span>

        <p className="text-sm mb-8 text-center px-2 text-slate-200">
          Fuel your college fest excitement! Join Aahwan sports for fun,
          teamwork, and a chance to win. Register now for the thrill!
        </p>

        <div className="Event-Container w-full flex justify-around flex-wrap">
          <Link to="/ahwanBoys" className=" w-[90%] sm:w-[30%] h-fit active:scale-90">
            <EventCard
              name="Boys"
              url={
                "https://i.postimg.cc/xdy0N6SW/niraj.jpg"
              }
            />
          </Link>

          <Link to="/ahwanGirls" className=" w-[90%] sm:w-[30%] h-fit active:scale-90">
            <EventCard
              name="Girls"
              url={"https://i.postimg.cc/cHLvDy3G/women.jpg"}
            />
          </Link>
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

export default Ahwan;
