import React from "react";

const EventCard = (props) => {
  return (
    <div className="w-full h-fit rounded-xl  mb-11 md:mb-8 ">
      <div
        style={{ backgroundImage: `url(${props.url})` }}
        className="events z-0 w-full h-[170px] border border-blue-600 sm:h-[250px] bg-cover bg-center bg-no-repeat px-3 rounded-xl opacity-80 sm:hover:scale-105 focus:scale-100  sm:hover:opacity-40 active:scale-95  font-bold    flex flex-col justify-center items-center hover:delay-200 shadow-lg shadow-blue-400 hover:shadow-2xl transition-all ease-in-out "
      >
        <p className="text-center text-3xl md:text-5xl hover:text-4xl md:hover:text-6xl text-white" id="shadowText">
          {props.name}
        </p>
        <span className="UpcommingEvents text-sm font-semibold text-white underline mt-4" id="shadowText">{props.desc}</span>
      </div>
    </div>
  );
};

export default EventCard;
