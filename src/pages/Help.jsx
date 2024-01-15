import Navbar from "../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";

export default function Help() {
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
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen h-full">
      
        <div className="navbar w-full fixed top-0 backdrop-blur-lg">
          <Navbar/>
        </div>
        <div className=" flex py-[60px] justify-center w-full h-full">
         
          <div className="hero w-full h-full m-4 flex-col justify-center text-center item-center ">
            <p className="text-3xl font-bold text-white">
              Help and support page....
            </p>

            <p className="text-4xl mt-[100px] text-center font-semibold text-white">
              Comming Soon...
            </p>
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
}
