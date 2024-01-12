import React from "react";
import EventWinners from "../Components/Events/EventWinners";
import OrganiserProfileNavbar from "../Components/Profile-Navbar/OrganiserProfileNavbar";

const AnweshWinnerPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen h-full">
        <div className="phone-nav w-full fixed top-0 backdrop-blur-lg">
          <OrganiserProfileNavbar/>
        </div>
        <div className="Organiser-Profile-page py-[60px] w-full h-full flex justify-center">
          
          <div className="profile w-full flex flex-col py-[60px] md:py-5">
            <div>
              <h1 className="text-white font-bold text-3xl mt-8 text-center">
                Anwesh Winners
              </h1>
              <div className="event-winners flex justify-around flex-wrap">
                <div className=" flex flex-col flex-wrap sm:flex-row justify-around items-center w-full py-[50px]">
                  <EventWinners EventName="Codathon" />
                  <EventWinners EventName="Codathon" />
                  <EventWinners EventName="Codathon" />
                  <EventWinners EventName="Codathon" />
                  <EventWinners EventName="Codathon" />
                  <EventWinners EventName="Codathon" />
                  <EventWinners EventName="Codathon" />
                  <EventWinners EventName="Codathon" />
                  <EventWinners EventName="Codathon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnweshWinnerPage;
