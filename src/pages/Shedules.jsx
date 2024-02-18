import Navbar from "../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import SheduleList from "../Components/Shedules/SheduleList";
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
  

  
  const list = [
    {
      title: "Shedules of Anwesh events",
      sheet:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTeod_RNoBDwKYfnjekHcE24tVxR8G1Eis81dA6D4d29w5_8bjwlFj11hAlxRsiDSbb9UEwgrHjA4cF/pubhtml?widget=true&amp;headers=false",
    },
    {
      title: "Shedules of Ahwaan events",
      sheet:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQv6aL_RITKntduoJ4jPn3c1ZaymV6q-nNaKsg5eUGytKqD0MMTWt9Mw9CT0Peje1D6coNcoB00VNli/pubhtml?widget=true&amp;headers=false",
    },

    {
      title: "Shedules of Akanksha Day-1 events",
      sheet:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTa2ldC8nx-LboQbrsQ74SB1BMudnkdtmJ8960LBi_G7aI5DtOGtnNgeJsUWsEwE6FqjhRdzDGaMk43/pubhtml?widget=true&amp;headers=false",
    },

    {
      title: "Shedules of Akanksha Day-2 events",
      sheet:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSoaEjV50m_qsZyHRlXD6XrfRuyi-7tHX2sI4yPqi3cEQFk5A-HA5C8UJi3GEKcg-f9pRrYw8x4YEZ1/pubhtml?widget=true&amp;headers=false",
    },
    
  ];

  return (
    <div className="bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29] min-h-screen h-full">
      <Navbar />
      <h1 className="hero pt-[80px] text-center text-3xl sm:text-6xl font-bold text-white">
        Schedules
      </h1>

      {/* <p className="UpcommingEvents text-2xl md:text-4xl mt-[40px] font-semibold text-center text-white">
        To be Announced soon...
      </p>
       */}
      <div className="flec flex-col justify-center mx-auto items-center w-full h-full py-5 space-y-[40px]">
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
          </div>

      {/* <SheduleList/> */}
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
