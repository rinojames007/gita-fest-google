import React, { useEffect, useState } from "react";import { Link } from "react-router-dom";

const Photoes = () => {
  const prevYr = [
    {
      name: "Link 1",
      link: "https://drive.google.com/drive/folders/1Vxuo9wEf10BayA9eWi4HdgPy6hIMKPpM",
    },
    {
      name: "Link 2",
      link: "https://drive.google.com/drive/folders/1hKp5aeeHOA_ZTH54Md3YXbdzSByb6G4t",
    },
  ];
  const ahwan = [
    // {
    //   name: "100 mts",
    //   link: "https://drive.google.com/drive/folders/1Vxuo9wEf10BayA9eWi4HdgPy6hIMKPpM",
    // },
   
  ];
  const anwesh = [
    // {
    //   name: "Link-1",
    //   link: "https://drive.google.com/drive/folders/1Vxuo9wEf10BayA9eWi4HdgPy6hIMKPpM",
    // },
    
  ];

  const akanksha = [
    // {
    //   name: "Previous",
    //   link: "https://drive.google.com/drive/folders/1Vxuo9wEf10BayA9eWi4HdgPy6hIMKPpM",
    // },
    
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
      <div className="mx-auto flex items-center justify-center w-full">
        <div className="flex flex-col py-5 w-[90%] px-2 border-2 my-[60px] gradiantbg rounded-xl border-blue-500 shadow-xl shadow-blue-500">
          <h1 className="text-4xl font-bold text-white text-center">
           Akanksha 2023
          </h1>
          <div className="flex md:space-x-10  justify-around md:justify-center my-[60px] flex-wrap ">
            {prevYr.map((item) => (
              <div className="Events" key={item.name}>


                <a
                  href={item.link}
                  target="_blank"
                  className="text-white text-xl bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl px-6 md:px-[80px] py-3 md:py-[20px] text-center me-2 mb-2 "
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-14 md:space-y-0 justify-center items-center md:justify-around">
      <div className="flex flex-col py-5 w-[90%] md:w-[30%] px-2 border-2 gradiantbg rounded-xl border-[#FFD700] shadow-xl shadow-blue-500  ">
        <h1 className="text-4xl font-bold text-white text-center">Ahwan</h1>
        <div className="flex space-x-4 justify-center my-8 flex-wrap ">
          {ahwan.map((item) => (
            <div className="Events" key={item.name}>
              <a
                href={item.link}
                target="_blank"
                className="text-white text-xl focus:outline-none focus:ring-4  font-medium rounded-2xl px-6 md:px-[80px] py-3 md:py-[20px] text-center me-2 mb-2 bg-orange-500 hover:bg-orange-600 focus:ring-blue-800"
              >
                {item.name}
              </a>
            </div>
          ))}
          <p className="text-3xl text-slate-300 my-[100px] font-semibold">
            Coming Soon
          </p>
        </div>
      </div>
      <div className="flex flex-col py-5 w-[90%] md:w-[30%] px-2 border-2 gradiantbg rounded-xl  border-[#FFD700] shadow-xl shadow-blue-500  ">
        <h1 className="text-4xl font-bold text-white text-center">Anwesh</h1>
        <div className="flex space-x-4 justify-center my-8 flex-wrap ">
          {anwesh.map((item) => (
            <div className="Events" key={item.name}>
              <a
                href={item.link}
                target="_blank"
                className="text-white text-xl  focus:outline-none focus:ring-4  font-medium rounded-2xl px-6 md:px-[80px] py-3 md:py-[20px] text-center me-2 mb-2 bg-orange-500 hover:bg-orange-600 focus:ring-blue-800"
              >
                {item.name}
              </a>
            </div>
          ))}
          <p className="text-3xl text-slate-300 my-[100px] font-semibold">
            Coming Soon
          </p>
        </div>
      </div>
      <div className="flex flex-col py-5 w-[90%] md:w-[30%] px-2 border-2 gradiantbg rounded-xl  border-[#FFD700] shadow-xl shadow-blue-500  ">
        <h1 className="text-3xl font-bold text-white text-center">Akanksha</h1>
        <div className="flex space-x-4 justify-center my-8 flex-wrap ">
          {akanksha.map((item) => (
            <div className="Events" key={item.name}>
              <a
                href={item.link}
                target="_blank"
                className="text-white text-xl  focus:outline-none focus:ring-4  font-medium rounded-2xl px-6 md:px-[80px] py-3 md:py-[20px] text-center me-2 mb-2 bg-orange-500 hover:bg-orange-600 focus:ring-blue-800"
              >
                {item.name}
              </a>
            </div>
          ))}
          <p className="text-3xl text-slate-300 my-[100px] font-semibold">
            Coming Soon
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Photoes;
