import React from "react";
import SmallEventBox from "./SmallEventBox";

const EventResisteredBox = (props) => {
  return (
    <div className=" w-full md:w-[45%] 2xl:w-[30%] my-5 border-2 rounded-xl bg-gradient-to-br from-black via-violet-900 to-black h-full shadow-lg shadow-blue-500">
      <div className=" flex flex-col ">
        <h1 className="text-2xl font-bold my-3 text-white underline underline-offset-8">
          {props.EventHeading}
        </h1>
        <SmallEventBox
          EventName={props.EventName}
          EventTime={props.EventTime}
        />
        <SmallEventBox
          EventName={props.EventName}
          EventTime={props.EventTime}
        />
        <SmallEventBox
          EventName={props.EventName}
          EventTime={props.EventTime}
        />
      </div>
    </div>
  );
};

export default EventResisteredBox;
