import Navbar from "../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
const Coordinators = () => {
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
    <div className="bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29] h-full min-h-screen">
      <Navbar />
      <div className="pt-[60px]">
        <h1 className="font-bold md:text-5xl text-3xl text-center py-5 text-white">
          Coordinators Page
        </h1>
      </div>
      <div className="desc md:mx-11">
        
        <p className="UpcommingEvents text-2xl md:text-4xl mt-[60px] text-center font-semibold text-white">
        To be Announced...
        </p>
      </div>
      <div className="ilustrator flex justify-center w-full items-center pt-[30px] ">
        <img
          src="https://i.postimg.cc/FszNfjy4/team.png"
          alt="ilustrator"
          className="w-[95%] md:w-[550px]"
        />
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

export default Coordinators;
