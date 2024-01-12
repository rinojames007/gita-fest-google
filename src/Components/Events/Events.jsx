import React from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className=" pt-[50px] flex flex-col justify-center items-center">
      <div className="heading flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Experience the Best of{" "}
        </h1>
        <h1 className="text-2xl sm:text-4xl font-bold text-white">College fest! </h1>
        <p className="pt-5 text-lg text-center font-semibold text-slate-300 ">
          Explore various events, workshops, competitions and much more.
        </p>
      </div>
      <div className=" flex flex-col sm:flex-row justify-around items-center w-full py-[50px]">
        <Link to="/ahwan" className=" w-[95%] sm:w-[30%]">
          <EventCard name="Ahwan" url={"https://i.postimg.cc/VNyszV4H/sports.webp"} />
        </Link>

        <Link to="/anwesh" className=" w-[95%] sm:w-[30%]">
          <EventCard name="Anwesh" url={"https://i.postimg.cc/yYd8j9kn/tech.webp"} />
        </Link>

        <Link to="/akanksha" className=" w-[95%] sm:w-[30%]">
          <EventCard name="Akanksha" url={"https://i.postimg.cc/QMp8CJyN/logo.webp"} />
        </Link>
      </div>
    </div>
  );
};

export default Events;
