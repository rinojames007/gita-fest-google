import React from "react";
const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(https://i.postimg.cc/ZKMKMRNm/cultural.webp)` }} className="flex justify-center items-center bg-no-repeat bg-cover bg-center h-screen w-full">

      {/* left-contents */}
      <div className="left w-full mx-auto flex justify-center items-center ">
        <div className="flex flex-col items-center justify-center ">
          <div className="header text-center font-alkatra ">
            <h1 className="hero text-3xl sm:text-6xl font-bold text-white shadow-lg text-shadow-black">
              Welcome Back
            </h1>
            <span className="text-4xl sm:text-8xl font-bold text-white shadow-lg text-shadow-black">Akanksha 2024!</span>
          </div>

          <div className="desc flex flex-col justify-center items-center">
            <p className="py-5 text-xl text-white font-semibold text-center shadow-lg text-shadow-black">
              Join us for a week full of excitement, learning and entertainment
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
