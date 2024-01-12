import React from 'react'
import EventBox from '../Components/Events-updates/EventBox'
import Navbar from "../Components/Navbar/Navbar";
const TechFestEvents = () => {
    const AnweshElements = [
        {
          url: "https://i.postimg.cc/1Xy5R4wq/techfest.jpg",
          EventName: "Codathon",
          desc: "Show your Codding skills",
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
          url: "https://i.postimg.cc/1Xy5R4wq/techfest.jpg",
          EventName: "Rangoli",
          desc: "Creativity with Colours",
          details: [
            {
              EventIncharge: "Xyz",
              EventCoordinators: ["ABC", "XYZ", "RST"],
              volunteers: ["Arman", "Jyoti", "Ashutosh"],
              timming: "2:10 pm",
            },
          ],
        },
      ];
  return (
    <div className=" min-h-screen w-full bg-gradient-to-b from-black via-purple-900 to-black">
      <Navbar />
      {/* Tech Fest */}
      <div className=" pt-[60px] flex flex-col justify-center items-center w-full">
        <h1 className="text-5xl font-bold my-4 text-white">Tech Fest Events</h1>
        
        <div className="Event-Container w-full flex justify-around flex-wrap">
        
          <EventBox url={AnweshElements[0].url} />
          <EventBox url={AnweshElements[0].url} />
          <EventBox url={AnweshElements[0].url} />
          <EventBox url={AnweshElements[0].url} />
          <EventBox url={AnweshElements[1].url} />
          <EventBox url={AnweshElements[1].url} />
          <EventBox url={AnweshElements[1].url} />
          <EventBox url={AnweshElements[0].url} />
          <EventBox url={AnweshElements[0].url} />
        </div>
      </div>
    </div>
  )
}

export default TechFestEvents