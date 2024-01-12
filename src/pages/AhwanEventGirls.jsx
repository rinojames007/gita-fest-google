import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import EventBox from "../Components/Events-updates/EventBox";

const AhwanEventGirls = () => {
  const AhwanElements = [
    {
      url: "https://i.postimg.cc/cHLvDy3G/women.jpg",
      EventName: "100 M Boys",
      desc: "show your Sports skills...",
      details: [
        {
          EventIncharge: "Xyz",
          EventCoordinators: ["ABC", "XYZ", "RST"],
          volunteers: ["Rohan", "Mohan", "Simran"],
          timming: "12:15 pm",
        },
      ],
    },
    {
      url: "./Demo-pics/tech.jpg",
      EventName: "Long Jump",
      desc: "show your Sports skills...",
      details: [
        {
          EventIncharge: "Xyz",
          EventCoordinators: ["ABC", "XYZ", "RST"],
          volunteers: ["Rohan", "Mohan", "Simran"],
          timming: "12:15 pm",
        },
      ],
    },
  ];
  return (
    <div className="h-full  w-full bg-gradient-to-b from-black via-purple-900 to-black">
      <Navbar />
      <div className="py-[60px]">
        <h1 className="text-white text-center font-bold md:text-5xl text-2xl my-5">
          Ahwan Girls Events
        </h1>
        <div className="box-container flex flex-wrap justify-around">
          <EventBox url={AhwanElements[0].url} />
          <EventBox url={AhwanElements[0].url} />
          <EventBox url={AhwanElements[0].url} />
          <EventBox url={AhwanElements[0].url} />
          <EventBox url={AhwanElements[0].url} />
          <EventBox url={AhwanElements[0].url} />
          <EventBox url={AhwanElements[0].url} />
          <EventBox url={AhwanElements[0].url} />
          <EventBox url={AhwanElements[0].url} />
        </div>
      </div>
    </div>
  );
};

export default AhwanEventGirls;
