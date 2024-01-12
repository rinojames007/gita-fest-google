import React from 'react'

import EventInchargeNavbar from '../Components/Profile-Navbar/EventInchargeNavbar';

const EventInchargeHelp = () => {
    return (
        <div className="bg-gradient-to-b from-black via-purple-900 to-black h-full min-h-screen">
          <div className=" flex flex-col justify-center w-screen h-full ">
            <div className="navbar w-full fixed top-0 backdrop-blur-lg">
              <EventInchargeNavbar/>
              
            </div>
            <div className=" flex py-[60px] justify-center w-full h-full">
              
              <div className="hero w-full h-full m-4 flex-col justify-center text-center item-center ">
                <p className="text-3xl font-bold text-white">
                  Help and support page....
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default EventInchargeHelp