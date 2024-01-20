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
    <div className="bg-gradient-to-b from-black via-purple-900 to-black h-full min-h-screen">
        <Navbar />
        <div className="py-20 flex flex-col justify-center items-center">
          <h1 className="text-white text-center font-bold md:text-5xl text-2xl my-5">
            Akanksha (Annual Cultural Fest)
          </h1>
        <span className="md:text-2xl text-xl font-bold text-[#fcfcfc] my-4">( 22.02.2024 & 23.02.2024 )</span>

          {/* {loading && (
          <div className="flex flex-col justify-center items-center h-[220px]">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
            <div className="loader text-center text-white font-semibold text-xl mt-6 ">Loading...</div>
          </div>
        )}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc-CpCEfvdYwmUS6MDx3o9taM-HB9UpMA7NXvaNAdXkUtjjKQ/viewform?embedded=true"
            className="mx-auto w-full md:w-2/3 lg:w-1/2"
            height="2330"
            onLoad={handleIframeLoad}
          >
            Loading…
          </iframe> */}
          <p className="UpcommingEvents text-2xl md:text-4xl font-bold text-white text-center pt-[80px]">To be Announced...</p>

        </div>

        {showBackToTop && (
        <button
          className="fixed bottom-9 md:bottom-[80px] md:text-xl font-semibold right-10 md:right-[160px] bg-blue-500 text-white px-4 md:w-[250px] md:py-4 py-2 rounded"
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      )}
      </div>
  );
};

export default Akanksha;
