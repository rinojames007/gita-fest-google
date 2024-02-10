import React, { useEffect, useState } from "react";
import EventBox from "../Components/Events-updates/EventBox";
import Navbar from "../Components/Navbar/Navbar";
import EventDetails from "../AnweshEventDetails";

const TechFestEvents = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timeToStart, setTimeToStart] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Function to calculate and update the time remaining
    const updateTimeRemaining = () => {
      const registrationStartDate = new Date("2024-02-10T12:00:00"); // Example start date
      const currentTime = new Date();
      const timeDifference = registrationStartDate - currentTime;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeToStart(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        // Registration has already started
        setTimeToStart("Registration has started");
      }

      setLoading(false); // Set loading to false when the timer is calculated
    };

    updateTimeRemaining(); // Initial call to calculate time remaining

    // Update the timer every second
    const timer = setInterval(updateTimeRemaining, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" min-h-screen h-full w-full bg-gradient-to-b from-[#141e39] via-purple-900 to-[#1c2439]">
      <Navbar />
      {/* Tech Fest */}
      <div className=" py-[60px] flex flex-col justify-center items-center w-full">
        <h1 className="text-3xl md:text-5xl font-bold my-4 text-center text-white">
          Tech Fest Events
        </h1>
        <p className="text-sm mb-8 text-center px-2 text-slate-200">
          Explore the future at our tech fest! Unleash innovation, connect with
          tech enthusiasts, and witness cutting-edge advancements. Join us for an
          unforgettable journey into technology's wonders.
        </p>
        <p className="UpcommingEvents text-2xl md:text-4xl font-bold text-white text-center pt-[10px]">
        Registration is open
        </p>
        
        {/* <div className="text-white text-center pt-[5px]">
          {loading ? (
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
          ) : (
            <p className="timer ToGo shadowText mt-2 text-[#9FFFF5] font-semibold text-2xl md:text-3xl text-center">{timeToStart}</p>
          )}
        </div> */}

        <div className="Event-Container w-full flex justify-around flex-wrap">
          {EventDetails.map((item) => (
            <EventBox
              key={item.key}
              url={item.url}
              name={item.name}
              desc={item.desc}
              date={item.date}
              time={item.time}
              redirect={item.redirect}
              venue={item.venue}
            />
          ))}
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

export default TechFestEvents;
