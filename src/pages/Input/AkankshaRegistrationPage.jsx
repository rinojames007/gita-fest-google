import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const AkankshaRegistrationPage = () => {
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
    <div>
      <div className="bg-gradient-to-b from-black via-purple-900 to-black h-full min-h-screen">
        <Navbar />
        <div className="py-10 md:py-20">
          <h1 className="text-white text-center font-bold md:text-5xl text-2xl my-5">
            Ahwan Boys Events
          </h1>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc-CpCEfvdYwmUS6MDx3o9taM-HB9UpMA7NXvaNAdXkUtjjKQ/viewform?embedded=true"
            className="mx-auto w-full md:w-2/3 lg:w-1/2"
            height="2230"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
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
    </div>
  );
};

export default AkankshaRegistrationPage;
