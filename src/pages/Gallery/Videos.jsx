import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Videos = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1200);
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

  const handleIframeLoad = (index) => {
    setLoadingStates((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const [loadingStates, setLoadingStates] = useState({});
  const [videos] = useState({
    
    "2k23": [
      "https://www.youtube.com/embed/SECIxFV8L0Q?si=333hwu6lZTU8MyAf",
      "https://www.youtube.com/embed/7S6Min_Fxvs?si=nwGAhuqoUUyeDvq-",
      "https://www.youtube.com/embed/M5H5q4tHPik?si=vaeY1Lx3fAX5nAfA",
      "https://www.youtube.com/embed/ZkluWYxc8Rs?si=pMjybMs34PmMq_xS",
      "https://www.youtube.com/embed/ln8RBpyQR5o?si=FQ-J-CPXXbXp5lZE",
      "https://www.youtube.com/embed/H6CdRnVMIK0?si=v9wHTImG11EbNow8",
      "https://www.youtube.com/embed/fDVQ7O9aUCc?si=TRwefYSS2o81VpFj",
      "https://www.youtube.com/embed/GzKPfOPSeAQ?si=KjO1-GB5McAFHUR7",
      "https://www.youtube.com/embed/FoDOP4leUok?si=dI8Dl-pqqGHyWEGk",
      "https://www.youtube.com/embed/uxhP-TXyyR4?si=P1-zreUKHSnkVf9u",
      "https://www.youtube.com/embed/S8w5L8OGYHU?si=9uO7x4jn5o-0He94",
      "https://www.youtube.com/embed/8aAOTyx5BJE?si=uu2fZqItrM6wY7_Q",
      "https://www.youtube.com/embed/Oh-7wOKgGHw?si=2OnhdJlS5H7J0xqn",
    ],

    "2024": [
      "https://www.youtube.com/embed/MrRyjHCYiPU?si=MCB3rKArru__eyvO",
      "https://www.youtube.com/embed/O4TwllYuSWg?si=sVV8M9XfKrtA7hsz",
      "https://www.youtube.com/embed/aWYWuve-mT4?si=RUH7dmAmxeTOs4Pa",
      "https://www.youtube.com/embed/uFJ2i6MkTA8?si=qpcN7z8zUrT8Yydl",
      "https://www.youtube.com/embed/KfgFBk2gkY4?si=WO1aFkNeu5vDGm71",
      "https://www.youtube.com/embed/AfztptQerLw?si=49t1DeDzbhOypPRO",
      "https://www.youtube.com/embed/OyNnhXXyonQ?si=pml2DXw2Id4SYYVe",
    ],
  });

  return (
    <div className="bg-gradient-to-b py-[50px] from-[#161b29] via-purple-900 to-[#161b29] min-h-screen h-full">
      {/* Header and Back Button */}
      <div className="absolute top-4 left-4">
        <Link to="/gallery" className="w-fit">
          <button className="bg-slate-600 px-5 py-2 text-lg font-semibold rounded-md hover:scale-90 hover:text-red-600 text-white">
            Back
          </button>
        </Link>
      </div>
      <p className="text-white font-semibold text-lg text-center pt-[30px]">
        Wait for Some Seconds to load the Videos
      </p>
      {/* Videos */}
      {Object.entries(videos).map(([year, videoList]) => (
        <div key={year}>
          <h1 className=" block text-white font-bold text-4xl text-center py-8">
            Akanksha {year}
          </h1>
          <div className="videos w-[90%] rounded-md flex items-center justify-center flex-col sm:flex-row flex-wrap sm:space-x-5 mx-auto space-y-8  py-6">
            {videoList.map((url, index) => (
              <div
                key={index}
                className="md:w-[30%] rounded-md md:h-[300px]  2xl:h-[400px]  h-[250px] w-full max-w-screen my-5"
              >
                {loadingStates[index] && (
                  <div className="flex flex-col justify-center items-center h-[220px]">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
                    <div className="loader text-center text-white font-semibold text-xl mt-6 ">
                      Loading...
                    </div>
                  </div>
                )}
                <iframe
                  className="w-full h-full"
                  src={url}
                  title={`Dance Performance ${index}`}
                  onLoad={() => handleIframeLoad(index)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Back to Top Button */}
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

export default Videos;
