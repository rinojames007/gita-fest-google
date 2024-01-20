import React from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className="pt-[50px] flex flex-col justify-center items-center">
      <div className="heading flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl text-center font-bold text-white">
          Experience the Best of
        </h1>
        <h1 className="text-2xl md:text-4xl text-center font-bold text-white">
          College fest!
        </h1>
        <p className="pt-5 text-lg text-center font-semibold text-slate-300">
          Explore various events, workshops, competitions and much more.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-around items-center w-full py-[50px]">
        <Link
          to="/ahwan"
          className="w-[90%] sm:w-[30%] focus:border-blue-300"
        >
          <EventCard
            name="Aahwan"
            desc = "Click to Register"
            url={"https://i.postimg.cc/VNyszV4H/sports.webp"}
            date = "19.02.2024 & 20.02.2024"
          />
        </Link>

        <Link
          to="/anwesh"
          className="w-[90%] sm:w-[30%] focus:border-blue-300"
        >
          <EventCard
            name="Anwesh"
            desc = "Click to Register"
            url={"https://i.postimg.cc/yYd8j9kn/tech.webp"}
            date = "20.02.2024 & 21.02.2024 "
          />
        </Link>

        <Link
          to="/akanksha"
          className="w-[90%] sm:w-[30%] focus:border-blue-300"
        >
          <EventCard
            name="Akanksha"
            desc = "Click to Register"
            url={"https://i.postimg.cc/QMp8CJyN/logo.webp"}
            date = "22.02.2024 & 23.02.2024"
          />
        </Link>
      </div>
    </div>
  );
};

export default Events;
