import Navbar from "../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
const Shedules = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
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
    <div className="bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29] min-h-screen h-full">
      <Navbar />
      <h1 className="hero pt-[80px] text-center text-3xl sm:text-6xl font-bold text-white">
        Schedules
      </h1>

      <p className="UpcommingEvents text-2xl md:text-4xl mt-[40px] font-semibold text-center text-white">
        To be Announced...
      </p>
      <div className="ilustrator flex justify-center w-full items-center pt-[30px] ">
        <img
          src="https://i.postimg.cc/fygQgDLq/shedule.webp"
          alt="ilustrator"
          className="w-[90%] md:w-[550px]"
        />
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

export default Shedules;
