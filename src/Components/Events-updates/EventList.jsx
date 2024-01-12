import React from "react";

const EventList = () => {
  return (
    <div>
      <div className="events flex w-full flex-col bg-white text-black justify-center items-center border-2 my-3 rounded-xl md:p-6 p-3 hover:cursor-pointer mx-auto">
        <div className="event-Info  flex flex-col justify-center items-center">
          <p className="font-bold text-2xl ">Face Painting</p>
          <p className=" font-semibold text-md ">Gita Garden-2</p>
        </div>

        <div className="event-timming mt-4 flex justify-between items-center ">
          <p className=" font-semibold w-[50%] text-md text-start">
            Fri, 4 Feb 2024
          </p>
          <p className=" text-md w-[50%] text-end font-semibold">11 : 15 AM</p>
        </div>
      </div>
    </div>
  );
};

export default EventList;
