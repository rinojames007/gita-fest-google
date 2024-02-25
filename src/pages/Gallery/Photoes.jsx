import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Photoes = () => {
  const prevYr = [
    {
      name: "Akanksha Day 1",
      link: "https://drive.google.com/drive/folders/1Vxuo9wEf10BayA9eWi4HdgPy6hIMKPpM",
    },
    {
      name: "Akanksha Day 2",
      link: "https://drive.google.com/drive/folders/1hKp5aeeHOA_ZTH54Md3YXbdzSByb6G4t",
    },
    {
      name: "Anwesh & Ahwaan",
      link: "https://drive.google.com/drive/folders/1r5W0iV_MvlejhYv3-vy0paiYIjlHVH8u",
    },
  ];
  const ahwan = [
    {
      name: "DAY-1",
      link: "https://drive.google.com/drive/folders/1ztKkv4aHTPag6wTowog6K7i_Adw_s-94?usp=sharing",
    },
  ];
  const anwesh = [
    {
      name: "DAY-1 & DAY-2",
      link: "https://drive.google.com/drive/folders/1XX5c7PHblNrWb6T3MzlPbWQRMxj1660M?usp=sharing",
    },
  ];

  const akanksha = [
    {
      name: "Practice Sessions",
      link: "https://drive.google.com/drive/folders/1U9C0jseJ0cElx6s1MXc5fISaO1nGSDKZ?usp=sharing",
    },
    {
      name: "DAY-2",
      link: "https://drive.google.com/drive/folders/1sKRjat2z2DPCcPma7gJUzB_nDDo7t3bn?usp=sharing",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-[#161b29] via-purple-900 flex mx-auto flex-col to-[#161b29] min-h-screen h-full py-9">
      <div className="absolute top-4 left-4">
        <Link to="/gallery" className="w-fit">
          <button className="bg-slate-600 px-5 py-2 text-lg font-semibold rounded-md hover:scale-90 hover:text-red-600 text-white">
            Back
          </button>
        </Link>
      </div>
      <h1 className="md:text-5xl text-3xl py-5 font-bold text-white text-center">
      Utsãh 2024
      </h1>
      <div className="flex py-9 flex-col md:flex-row space-y-14 md:space-y-0 justify-center items-center md:justify-around">
        <div className="flex flex-col py-5 w-[90%] md:w-[30%] px-2 border-2 gradiantbg rounded-xl  border-[#FFD700] shadow-xl shadow-blue-500  ">
          <h1 className="text-3xl font-bold text-white text-center shadowText">
            Akanksha 2024
          </h1>
          <div className="flex pt-8 justify-around items-center my-8 flex-wrap ">
            {akanksha.map((item) => (
              <div className="Events" key={item.name}>
                <a
                  href={item.link}
                  target="_blank"
                  className="text-white md:text-xl text-lg flex my-3 items-center justify-center bg-orange-500 border-2 shadow-md shadow-black border-black hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl px-6 md:px-[50px] py-3 md:py-[20px] text-center "
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col py-5 w-[90%] md:w-[30%] px-2 border-2 gradiantbg rounded-xl  border-[#FFD700] shadow-xl shadow-blue-500  ">
          <h1 className="text-4xl font-bold text-white text-center shadowText">
            Anwesh 2024
          </h1>
          <div className="flex pt-8 justify-around items-center my-8 flex-wrap ">
            {anwesh.map((item) => (
              <div className="Events" key={item.name}>
                <a
                  href={item.link}
                  target="_blank"
                  className="text-white md:text-xl text-lg flex my-3 items-center justify-center bg-orange-500 border-2 shadow-md shadow-black border-black hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl px-6 md:px-[50px] py-3 md:py-[20px] text-center "
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col py-5 w-[90%] md:w-[30%] px-2 border-2 gradiantbg rounded-xl border-[#FFD700] shadow-xl shadow-blue-500 h-full ">
          <h1 className="text-4xl font-bold text-white text-center shadowText">
            Ahwaan 2024
          </h1>
          <div className="flex pt-8 justify-around items-center my-8 flex-wrap ">
            {ahwan.map((item) => (
              <div className="Events" key={item.name}>
                <a
                  href={item.link}
                  target="_blank"
                  className="text-white md:text-xl text-lg flex my-3 items-center justify-center bg-orange-500 border-2 shadow-md shadow-black border-black hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl px-6 md:px-[50px] py-3 md:py-[20px] text-center "
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex items-center justify-center w-full">
        <div className="flex flex-col py-5 w-[90%] px-2 border-2 my-[60px] gradiantbg rounded-xl border-[#FFD700] shadow-xl shadow-blue-500">
          <h1 className="text-4xl shadowText font-bold text-white text-center">
            Utsãh 2023
          </h1>
          <div className="flex  justify-around my-[60px] flex-wrap ">
            {prevYr.map((item) => (
              <div className="Events" key={item.name}>
                <a
                  href={item.link}
                  target="_blank"
                  className="text-white md:text-xl text-lg flex my-3 items-center justify-center bg-orange-500 border-2 shadow-md shadow-black border-black hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl px-6 md:px-[50px] py-3 md:py-[20px] text-center "
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photoes;
