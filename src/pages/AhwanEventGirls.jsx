import React, { useEffect, useState } from "react";

import Navbar from "../Components/Navbar/Navbar";

const AhwanEventGirls = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timeToStart, setTimeToStart] = useState("");

  useEffect(() => {
    
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
    window.scrollTo(0, 0);
    // Add an event listener to check scroll position
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 700); // Change 200 to adjust when the button appears
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  const handleIframeLoad = () => {
    // Set loading to false when the iframe has finished loading
    setLoading(false);
  };
  const trackEvent = [
    "100 mts Running  Race",
    "200 mts Running Race",
    "4 X 100 mts Relay Race",
  ];

  const fieldEvent = ["Long Jump", "High Jump"];

  const throwEvent = ["Javelin Throw", "Shot put", "Discuss Throw"];

  const Others = ["Skipping"];

  
  const list = [
    {
      title: "Winners Ahwaan 2024 - (Girls)",
      sheet:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSi7DQiZ7pR2tqlrDJQ0MnhfyirmPrTT8ouZZbsSkkZA2-3Mf5xFIdtaVTSKfz-VT-vVTQij-fmQ-2M/pubhtml?widget=true&amp;headers=false",
    },
    
  ];

  return (
    <div className="h-full min-h-screen w-full bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29]">
      <Navbar />
      <div className="py-20">
        <h1 className="text-white text-center font-bold md:text-5xl text-2xl my-5">
          Ahwaan Girls Events
        </h1>

        {/* <div className="flec flex-col justify-center mx-auto items-center w-full h-full py-5 space-y-[40px]">
          {list.map((item, index) => (
            <div key={index}>
              <p className="UpcomingEvents text-2xl py-7 md:text-4xl text-center font-semibold text-white">
                {item.title}
              </p>
              {loading && (
                <div className="flex flex-col justify-center items-center h-[220px]">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
                  <div className="loader text-center text-white font-semibold text-xl mt-6 ">
                    Loading...
                  </div>
                </div>
              )}
              <iframe
                src={item.sheet}
                className="md:w-[70%] 2xl:w-[50%] w-[95%] md:h-[300px] h-[500px] mx-auto md:rounded-xl rounded-md"
                onLoad={handleIframeLoad}
              ></iframe>
            </div>
          ))}
        </div> */}
        {loading && (
          <div className="flex flex-col justify-center items-center h-[220px]">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
            <div className="loader text-center text-white font-semibold text-xl mt-6 ">
              Loading...
            </div>
          </div>
        )}
        
         <p className="UpcommingEvents text-2xl md:text-4xl font-bold text-white text-center pt-[10px]">
         Registration is Closed
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeCcGs3GKxDAm64VDbs6X-aldGip-_l8FaSYvnn4WDJSD973w/viewform?embedded=true"
          className="mx-auto w-full md:w-2/3 lg:w-1/2"
          height="700"
          onLoad={handleIframeLoad}
        >
          Loading…
        </iframe>
        
        {/* <div className="text-white text-center pt-[5px]">
          {loading ? (
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
          ) : (
            <p className="timer ToGo shadowText mt-2 text-[#9FFFF5] font-semibold text-2xl md:text-3xl text-center"> {timeToStart}</p>
          )}
        </div> */}


        {/* Add a separate section for Track Events */}
        <div className="flex justify-around items-center flex-col md:flex-row mt-[30px]">
          <div className="mb-8 flex flex-col justify-center items-center w-[95%] md:w-[30%]">
            <h2 className="text-white text-center underline underline-offset-4 font-bold md:text-4xl text-2xl my-3">
              Track Events
            </h2>
            <ul className="text-white">
              {trackEvent.map((event, index) => (
                <li key={index} className="text-lg font-semibold">
                  {event}
                </li>
              ))}
            </ul>
          </div>

          {/* Add a separate section for Field Events */}
          <div className="mb-8 flex flex-col justify-center items-center w-[95%] md:w-[30%]">
            <h2 className="text-white text-center underline underline-offset-4 font-bold md:text-4xl text-2xl my-3">
              Field Events
            </h2>
            <ul className="text-white">
              {fieldEvent.map((event, index) => (
                <li key={index} className="text-lg font-semibold">
                  {event}
                </li>
              ))}
            </ul>
          </div>

          {/* Add a separate section for Throw Events */}
          <div className="mb-8 flex flex-col justify-center items-center w-[95%] md:w-[30%]">
            <h2 className="text-white text-center underline underline-offset-4 font-bold md:text-4xl text-2xl my-3">
              Throw Events
            </h2>
            <ul className="text-white">
              {throwEvent.map((event, index) => (
                <li key={index} className="text-lg font-semibold">
                  {event}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8 flex flex-col justify-center items-center w-[95%] md:w-[30%]">
            <h2 className="text-white text-center underline underline-offset-4 font-bold md:text-4xl text-2xl my-3">
              Others
            </h2>
            <ul className="text-white">
              {Others.map((event, index) => (
                <li key={index} className="text-lg font-semibold">
                  {event}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
