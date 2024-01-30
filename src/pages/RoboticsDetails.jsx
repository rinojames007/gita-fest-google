import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const RoboticsDetails = () => {
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
    <div className="bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29] h-full min-h-screen">
      <Navbar />
      <div className=" pt-[10px] h-full">
      <p className="UpcommingEvents text-2xl md:text-4xl my-[40px] font-bold text-white text-center mx-auto pt-[80px]">
              To be Announced...
            </p>
        {/* <div className=" flex flex-col md:flex-row"> */}
          {/* <div className="left md:w-[50%] hidden w-full md:p-6 md:flex justify-center items-center p-2">
            <img
              src="https://i.postimg.cc/y6rQB070/robotics.jpg"
              alt="event-image"
              className=" rounded-xl shadow-md shadow-blue-700"
            />
          </div> */}
          
          <div className="flex justify-center items-center flex-col w-full ">
            
            <div className="ilustrator flex justify-center w-full items-center my-[45px] ">
              <img
                src="https://i.postimg.cc/FzKvzKzG/img-20240130-wa0025-removebg-preview-65b90fa897fe9.webp"
                alt="ilustrator"
                className="w-[70%] md:w-[400px]"
              />
            </div>
          </div>
        {/* </div> */}
      </div>
      {showBackToTop && (
        <button
          className="fixed bottom-8 right-8 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      )}
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

export default RoboticsDetails;
