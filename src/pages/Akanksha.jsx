import Navbar from "../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";


const Akanksha = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  useEffect(() => {
    const targetDate = new Date("February 1, 2024 07:30:00").getTime();

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
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

  const events = ["Song", "Dance", "Fashion Show", "Drama", "Anchoring"];

  return (
    <div className="bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29] h-full min-h-screen">
      <Navbar />
      <div className="pt-20 flex flex-col justify-center items-center">
        <div className="headingSection flex flex-col md:flex-row md:space-x-2 mt-5 justify-center items-center">
          <h1 className="md:text-5xl shadowText text-4xl font-bold text-white text-center">
            Akanksha
          </h1>
          <h1 className="md:text-3xl shadowText text-xl font-semibold my-2 text-white text-center">
            (Annual Cultural Fest)
          </h1>
        </div>
        <span className="md:text-lg text-sm font-semibold text-[#fcfcfc] my-1">
          ( 22.02.2024 & 23.02.2024 )
        </span>

        {/* {loading && (
          <div className="flex flex-col justify-center items-center h-[220px]">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
            <div className="loader text-center text-white font-semibold text-xl mt-6 ">Loading...</div>
          </div>
        )}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc-CpCEfvdYwmUS6MDx3o9taM-HB9UpMA7NXvaNAdXkUtjjKQ/viewform?embedded=true"
            className="mx-auto w-full md:w-2/3 lg:w-1/2"
            height="700"
            onLoad={handleIframeLoad}
          >
            Loading…
          </iframe> */}
          
       
        {countdown.days >= 0 ? (
          <div className="UpcomingEvents text-2xl md:text-3xl font-bold text-white text-center pt-[10px] flex flex-col justify-center items-center py-4 w-full">
            <p>Registration opens in:</p>
            <p className="ToGo shadowText mt-2 text-[#9FFFF5] font-semibold text-center">
              {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
            </p>
            <div className="mb-2 flex flex-col justify-center items-center w-[95%] mt-2">
          <h2 className="text-white shadowText text-center underline underline-offset-4 font-bold md:text-5xl text-3xl my-3">
            Audition Categories
          </h2>
          <ul className="text-white flex flex-col justify-center items-center md:flex-row md:mt-5 md:space-x-8 space-x-0">
            {events.map((event, index) => (
              <li
                key={index}
                className="text-2xl py-2 md:text-3xl text-center font-semibold"
              >
                {event}
              </li>
            ))}
          </ul>
        </div>
          </div>
        ) : (
          <div className="UpcomingEvents text-2xl md:text-3xl font-bold text-white text-center pt-[10px] flex flex-col justify-center items-center py-4 w-full">
            <p>Registration is now open!</p>
            {loading && (
          <div className="flex flex-col justify-center items-center h-[220px]">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
            <div className="loader text-center text-white font-semibold text-xl mt-6 ">Loading...</div>
          </div>
        )}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc-CpCEfvdYwmUS6MDx3o9taM-HB9UpMA7NXvaNAdXkUtjjKQ/viewform?embedded=true"
            className="mx-auto w-full md:w-2/3 lg:w-1/2"
            height="700"
            onLoad={handleIframeLoad}
          >
            Loading…
          </iframe>
          </div>
        )}
        
        <div className="ilustrator flex justify-center w-full items-center py-[8px] ">
          <img
            src="https://i.postimg.cc/1tLT0GQY/DJ-party-amico.webp"
            alt="ilustrator"
            className="w-[70%] md:w-[600px]"
          />
        </div>
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
