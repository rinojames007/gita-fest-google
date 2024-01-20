import React from "react";

const EventCard = (props) => {
  return (
    <div className="w-full h-full rounded-xl mb-11 md:mb-8 ">
      <div
        style={{ backgroundImage: `url(${props.url})` }}
        className="events z-0 w-full h-[170px] sm:h-[250px] bg-cover bg-center bg-no-repeat px-3 rounded-xl opacity-70 sm:hover:scale-105 focus:scale-100  sm:hover:opacity-40 active:scale-95  font-bold    flex flex-col justify-center items-center hover:delay-200 shadow-lg shadow-blue-400 "
      >
        <p className="text-center text-5xl hover:text-6xl text-white">
          {props.name}
        </p>
        {/* <span className="text-lg font-bold text-[#fcfcfc] mt-4">{props.date}</span> */}

        <span className="UpcommingEvents text-xs font-semibold text-white underline mt-4">{props.desc}</span>
      </div>
    </div>
  );
};

export default EventCard;
