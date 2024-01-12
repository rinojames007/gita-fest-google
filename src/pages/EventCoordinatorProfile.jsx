import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../Components/Events/EventCard";
import EventCoordinatorNavbar from "../Components/Profile-Navbar/EventCoordinatorNavbar";


const EventCoordinatorProfile = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen">
      <div className="phone-nav w-full fixed top-0 backdrop-blur-lg">
        <EventCoordinatorNavbar />
        
      </div>
      <div className="Organiser-Profile-page w-full h-full flex justify-center py-[50px]">
        
        <div className="profile w-full flex flex-col py-[60px]">
          <h1 className="text-white font-bold text-center md:text-5xl text-3xl underline underline-offset-8">
            Welcome to your Dashboard!
          </h1>
          <div className="mt-[50px] flex justify-center items-center ">
            <Link to="/eventDetails" className="w-[95%] md:w-[50%]">
              <EventCard name="Event Details" url={"../Demo-pics/tech.jpg"} />
            </Link>
          </div>
          <div className="Participants w-full my-4">
            <Link
              to="/eventParticipants"
              className="w-full flex justify-center"
            >
              <div className="events w-full h-[80px] md:w-[50%] sm:h-[100px] bg-slate-800 px-3 rounded-xl opacity-80 hover:scale-90 hover:opacity-30  font-bold text-4xl  hover:text-6xl  flex justify-center items-center shadow-lg shadow-blue-400 ">
                <p className="text-center opacity-100 text-white ">
                  Participants
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCoordinatorProfile;
