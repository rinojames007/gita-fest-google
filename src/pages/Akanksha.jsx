import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const Akanksha = () => {
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

  const events = ["Song", "Dance", "Fashion Show", "Drama", "Anchoring"];
  const list = [
    {
      title: "Song Participants ( Akanksha 2024 )",
      sheet:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTu-PRnH9x-aW3f07tpgrfK1npOVPg_mJ_OeC_Gc-iMoqq3Fzhe26JoEe4TGsV76yoiV9FJAvoOY-P6/pubhtml?widget=true&amp;headers=false",
    },
    {
      title: "Anchoring Participants (Akanksha 2024)",
      sheet:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQVvdqzIhv-j6SbXqvcIXBgPVVKSvoW9t77qyQqOviGXfs0WzeuZ-cqcMTrhTty802UyaVTNgheWHdL/pubhtml?widget=true&amp;headers=false",
    },
    {
      title: "Dance Participants (Akanksha 2024)",
      sheet:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRyWejF3ub-7OtdFDTv4Ho9cdiobdbpiGgrnsApWh28sifjV8481elhHvkdqkcRsXBidSXBc78ADaLO/pubhtml?widget=true&amp;headers=false",
    },
    {
      title: "Drama Participants (Akanksha 2024)",
      sheet:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQKczBixg5miLpcZCV5PvJsGJUhcQy82FZSkFBKpTxWEdCzAKouL0aR_E7POYOsUWTmQU33ta_GHwOy/pubhtml?widget=true&amp;headers=false",
    },
    {
      title: "Fashion Show Participants (Akanksha 2024)",
      sheet:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT4qdRl81qUBu4m4CK5BuYqq7r0BY_eR8U53J72-8zGoCaxf_8SjJIhDfLPcjSezg0-VpclCptt1_Hk/pubhtml?widget=true&amp;headers=false",
    },
  ];

  

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

        <div className="UpcomingEvents text-2xl md:text-3xl font-bold text-white text-center pt-[10px] flex flex-col justify-center items-center py-4 w-full">
          {/* {loading && (
            <div className="flex flex-col justify-center items-center h-[220px]">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
              <div className="loader text-center text-white font-semibold text-xl mt-6 ">
                Loading...
              </div>
            </div>
          )}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc-CpCEfvdYwmUS6MDx3o9taM-HB9UpMA7NXvaNAdXkUtjjKQ/viewform?embedded=true"
            className="mx-auto w-full md:w-2/3 lg:w-1/2"
            height="300"
            onLoad={handleIframeLoad}
          >
            Loading…
          </iframe> */}
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

          {/* <img
            src="https://i.postimg.cc/tTq4Yp2g/Audition-poster.webp"
            alt="Poster-Audition"
            className="md:h-[500px] h-[400px] rounded-lg"
          /> */}
        </div>
        <Link
          to="/coordinators"
          className="text-blue-500 text-center mx-auto text-xl md:text-3xl font-semibold py-3 w-fit hover:text-red-600 underline block mb-2"
        >
          Coordinators <FontAwesomeIcon icon={faLocationArrow} />
        </Link>

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
