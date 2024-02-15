import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";

const AhwanEventBoys = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timeToStart, setTimeToStart] = useState("");

  useEffect(() => {
    // Calculate the time remaining until registration starts
    const registrationStartDate = new Date("2024-02-10T12:00:00"); // Example start date
    const currentTime = new Date();
    const timeDifference = registrationStartDate - currentTime;
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

  const trackEvent = [
    "100 mts Running  Race",
    "200 mts Running Race",
    "400 mts Running Race",
    "800 mts Running Race",
    "4 X 100 mts Relay Race",
  ];

  const fieldEvent = ["Long Jump", "High Jump"];

  const throwEvent = ["Javelin Throw", "Shot put", "Discuss Throw"];

  const list = [
    {
      title: "Winners Ahwaan 2024 - (Boys)",
      sheet:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQiqmBzuhNDpESJE8Ugz9mr6P3dofKrzsJ9GQLgeVGtTRINoYzt7mfor2JJPmbHhz9-_dutZ6G1MMM0/pubhtml?widget=true&amp;headers=false",
    },
    
  ];

  return (
    <div className="h-fit min-h-screen w-full bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29]">
      <Navbar />
      <div className="py-20">
        <h1 className="text-white text-center font-bold md:text-5xl text-2xl my-5">
          Ahwaan Boys Events
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


        <p className="UpcommingEvents text-2xl md:text-4xl font-bold text-white text-center pt-[10px]">
          Registration is open
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
          src="https://docs.google.com/forms/d/e/1FAIpQLSeHrLthxFaQsH9XtaU-6lE5QqxrTSVkztK1tjEjQztKvBCz7w/viewform?embedded=true"
          className={`mx-auto w-full md:w-2/3 lg:w-1/2 ${
            loading ? "hidden" : ""
          } `}
          height="700"
          onLoad={handleIframeLoad}
        >
          Loading...
        </iframe>

        {/* Add a separate section for Track Events */}
        <div className="flex justify-around items-center flex-col md:flex-row mt-[20px]">
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

export default AhwanEventBoys;
