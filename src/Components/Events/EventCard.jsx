import React from "react";

const EventCard = (props) => {
  return (
    <div className="w-full h-full rounded-xl mb-5 md:mb-8 ">
      <div
        style={{ backgroundImage: `url(${props.url})` }}
        className="events z-0 w-full h-[150px] sm:h-[250px] bg-cover bg-center bg-no-repeat px-3 rounded-xl opacity-80 hover:scale-90 hover:opacity-30  font-bold text-4xl  hover:text-6xl flex justify-center items-center hover:delay-150 shadow-lg shadow-blue-400 "
      >
        <p className="text-center opacity-100 text-white ">
          {props.name}
        </p>
      </div>
      
    </div>
  );
};

export default EventCard;
