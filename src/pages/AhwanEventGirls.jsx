import React, { useState, useEffect } from "react";

import Navbar from "../Components/Navbar/Navbar";

const AhwanEventGirls = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Add an event listener to check scroll position
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1200); // Change 200 to adjust when the button appears
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener on component unmount
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
  return (
    <div className="h-full min-h-screen w-full bg-gradient-to-b from-black via-purple-900 to-black">
      <Navbar />
      <div className="py-10 md:py-20">
        <h1 className="text-white text-center font-bold md:text-5xl text-2xl my-5">
          Ahwan Girls Events
        </h1>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeCcGs3GKxDAm64VDbs6X-aldGip-_l8FaSYvnn4WDJSD973w/viewform?embedded=true"
          className="mx-auto w-full md:w-2/3 lg:w-1/2"
          height="2334"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>

      {/* Back to Top Button */}
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

export default AhwanEventGirls;
