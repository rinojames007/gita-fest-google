import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";

const Akanksha = () => {
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
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-black via-purple-900 to-black pt-[60px] min-h-screen h-full">
        <h1 className="font-bold text-3xl md:text-5xl text-center py-5 text-white">
          Akanksha Events...
        </h1>
        <div className="Participants w-full my-9">
          <Link to="/akanksha/registrationPage" className="w-full flex justify-center ">
            <div className="events w-[90%] h-[100px] md:w-[50%] sm:h-[150px] bg-slate-800 px-3 rounded-xl opacity-80 transition-transform transform hover:scale-105 focus:scale-105 hover:opacity-30  font-bold text-4xl  hover:text-6xl  flex justify-center items-center shadow-lg shadow-blue-400 ">
              <p className="text-center text-xl font-semibold md:text-3xl opacity-100 text-white ">
                Click to Register
              </p>
            </div>
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

export default Akanksha;
