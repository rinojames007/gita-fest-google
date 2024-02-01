import React from "react";

const EventUpdates = () => {
  // console.log(upcomingEvents);
  return (
    <div className=" w-full mx-auto">
      <div className="heading flex flex-col justify-center items-center space-y-4">
        <h1 className=" text-3xl md:text-5xl font-bold text-center text-white mx-auto">
          Upcoming Events
        </h1>
        <p className="font-semibold text-sm text-slate-300 px-3 text-center">
          Check out the upcoming events lined up in the next 30 minutes and join
          the fun.
        </p>
      </div>
      <div className=" flex md:flex-row flex-col items-center justify-center md:justify-between py-7 px-3 md:py-[40px] md:px-[40px] md:space-x-6 mx-auto">
        <div className="left hidden md:w-[40%] md:flex items-center justify-center">
        <div className="ilustrator flex justify-center w-full items-center py-[8px] ">
                <img
                  src="https://i.postimg.cc/8c8sR322/coordinator.webp"
                  alt="ilustrator"
                  className="w-[90%] md:w-[520px] rounded-3xl"
                />
              </div>
        </div>
        <div>
          <div className="right w-full px-2 flex flex-col items-center space-y-5 py-3 md:py-0 mx-auto">
            <div className="Event-lists w-full flex flex-col md:flex-row justify-center flex-wrap">
            
              {/* {upcomingEvents.map((item) => (
              <EventList
                key={item.key}
                name={item.name}
                venue={item.venue}
                time={item.time}
                date={item.date}
              />
            ))} */}
              {/* <p className="BlinkText text-xl md:text-4xl mb-[20px]  font-bold text-white text-center pt-[15px] md:pt-[20px] UpcommingEvents">
                To be Announced...
              </p> */}

              
            </div>
            <div className=" w-full flex flex-col items-center justify-center space-y-3 text-[#721c24] text-center bg-[#f8d7da] p-[15px] rounded-lg border-[2px] shadow-xl shadow-black border-[#f4a1aa]">
              <h2 className="text-2xl font-bold text-center w-full">
                Audition for Odissi and Semi-Classical
              </h2>
              <p className="text-lg font-semibold">
                <strong className="text-xl font-bold">Audition Date:</strong>{" "}
                06/02/2024
              </p>
              <p>If anyone is interested, contact to:</p>
              <ul>
                <li>
                  <strong>Coordinator:</strong> Kaibalya Ray (4th Year)
                </li>

                <li>
                  <strong>Contact Number:</strong>{" "}
                  <span className="font-semibold pl-3">7681011068</span>
                </li>
                <li className="mt-4">
                  <strong>Faculty Coordinator:</strong> Dr. Sushmita Dash
                </li>

                <li>
                  <strong>Contact Number:</strong>
                  <span className="font-semibold pl-3">8895435809</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventUpdates;
