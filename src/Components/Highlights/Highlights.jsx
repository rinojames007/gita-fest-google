import React from "react";
import ImageSlider from "../Hero/ImageSlider";
import { Link } from "react-router-dom";
import EventCard from "../Events/EventCard";
import Illustrator from "../illustrator/Illustrator";
import AddComponent from "../Adds/AddComponent";

const Highlights = () => {
  const images = [
    // {
    //   url: "https://i.postimg.cc/ht3j6Cqc/glimpse.webp",
    // },
    {
      url: "https://i.postimg.cc/g0g1DSnw/Photo1.webp",
    },
    {
      url: "https://i.postimg.cc/wxynXkHv/Photo2.webp",
    },
    {
      url: "https://i.postimg.cc/1Rk2JN5K/Photo3.webp",
    },
    {
      url: "https://i.postimg.cc/SNc55Nnb/Photo4.webp",
    },
    {
      url: "https://i.postimg.cc/fRKPz27H/Photo5.webp",
    },
    {
      url: "https://i.postimg.cc/mrg5tY8T/Photo6.webp",
    },
    {
      url: "https://i.postimg.cc/MTc3YzC4/Photo7.webp",
    },
    {
      url: "https://i.postimg.cc/ncKR2RWH/Photo8.webp",
    },
    {
      url: "https://i.postimg.cc/RZVRRMfR/Photo9.webp",
    },
    {
      url: "https://i.postimg.cc/Gp4xWqXT/Photo10.webp",
    },
    {
      url: "https://i.postimg.cc/mkBMgwyw/Photo11.webp",
    },
    {
      url: "https://i.postimg.cc/Rhdt6HPz/Photo12.webp",
    },
  ];
  return (
    <div className=" w-full">
      <div className=" flex flex-col justify-center items-center md:flex-row w-full h-fit mx-auto ">
        {/* left content  */}
        <div className="left md:w-[40%] md:px-[50px] pt-[30px] flex justify-center items-center ">
          <h1 className="text-3xl px-2 md:text-4xl text-center font-bold text-white">
            Key Fest Highlights
          </h1>
        </div>

        {/* right-contents */}
        <div className="right Pt-[25px] w-full md:w-[60%] flex justify-center items-center mx-auto">
          <div className=" py-[50px]">
            <ImageSlider images={images} />
          </div>
        </div>
      </div>

      {/* <div className="ilustrator flex flex-col md:flex-row justify-center md:justify-around items-center">
        <div className="flex  w-full md:w-[32%]">
          <Illustrator url="https://i.postimg.cc/Cxb3cf2Z/Finish-line-pana.webp" />
        </div>
        <div className="flex  w-full md:w-[32%]">
          <Illustrator url="https://i.postimg.cc/RV2msmVY/Innovation-amico.webp" />
        </div>
        <div className="flex  w-full md:w-[32%]">
          <Illustrator url="https://i.postimg.cc/8P66g14g/Disc-jockey-rafiki.webp" />
        </div>
      </div> */}
      {/* <h1 className="text-white font-semibold text-center">Place To show Google AdSense</h1> */}
      {/* <AddComponent dataAdSlot='7064697648' />  */}

     
      <div className="last-year-gallery flex justify-center items-center my-3 md:my-10">
        <Link to="/gallery" className=" w-[90%] sm:w-[70%] ">
          <EventCard
            name="Fest Gallery"
            desc="Click me"
            url={"https://i.postimg.cc/0yWNY7Xg/gallery.webp"}
          />
        </Link>
      </div>
     
    </div>
  );
};

export default Highlights;
