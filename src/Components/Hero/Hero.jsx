import React, { useState, useEffect } from "react";

const Hero = () => {
  const festStartDate = new Date("2024-02-19T08:00:00");

  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = festStartDate - now;

    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setImageLoaded(true);
    };
    image.src = "https://i.postimg.cc/5ySGZRr3/cultural.webp";
  }, []);

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {!imageLoaded && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75">
          <div className="text-white text-lg font-semibold">Loading...</div>
        </div>
      )}
      <div
        style={{
          backgroundImage: `url(https://i.postimg.cc/5ySGZRr3/cultural.webp)`,
        }}
        className={`flex justify-center items-center bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29] bg-no-repeat bg-cover bg-center h-screen w-full ${imageLoaded ? '' : 'hidden'}`}
      >
        {/* left-contents */}
        <div className="left w-full mx-auto flex justify-center items-center ">
          <div className="flex flex-col items-center justify-center ">
            <div className="header text-center font-alkatra ">
              <img
                src="Gita-logo.png"
                alt=""
                className="w-[120px] md:w-[160px] pb-[20px] pt-[40px] mx-auto"
              />
              <span
                id="shadowText"
                className="text-5xl sm:text-8xl font-bold text-white "
              >
                Utsãh
              </span>
            </div>

            <div className="desc flex flex-col justify-center items-center">
              <p
                id="shadowText"
                className="py-5 text-xl md:text-3xl px-2 text-white font-bold text-center "
              >
                ( GITA Annual Fest 2024 )
              </p>
              <p
                id="shadowText"
                className="py-5 font-semibold md:text-xl px-2 text-white  text-center "
              >
                Discover, Learn, and Enjoy Unforgettable Moments Together!
              </p>

              {/* <div className="timer ToGo shadowText mt-4 text-[#9FFFF5] font-semibold text-2xl md:text-3xl text-center ">
                {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s <br /> to go
              </div> */}
              <div className="timer ToGo shadowText mt-4 text-[#9FFFF5] font-semibold text-2xl md:text-3xl text-center ">
                WELCOME TO UTSAH
              </div>
            </div>

            <div
              className="arrow-down absolute bottom-8 md:bottom-2 cursor-pointer mt-[10px]  animate-bounce"
              onClick={handleScrollDown}
            >
              {/* You can replace the arrow icon below with your own image or use a library */}
              <span role="img" aria-label="down-arrow" className="text-white text-5xl font-semibold">
                ↓
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
