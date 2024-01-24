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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(https://i.postimg.cc/ZKMKMRNm/cultural.webp)`,
      }}
      className="flex justify-center items-center bg-no-repeat bg-cover bg-center h-screen w-full"
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

            <div className="timer ToGo shadowText mt-2 text-[#9FFFF5] font-semibold text-2xl md:text-3xl text-center ">
              {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s <br /> to go
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
