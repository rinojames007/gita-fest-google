import React from 'react'
import EventCoordinatorNavbar from '../Components/Profile-Navbar/EventCoordinatorNavbar';

const EventCoordinatorsHelp = () => {
    return (
        <div className="bg-gradient-to-b from-black via-purple-900 to-black h-full min-h-screen">
          <div className=" flex flex-col justify-center w-screen h-full ">
            <div className="navbar w-full fixed top-0 backdrop-blur-lg">
              <EventCoordinatorNavbar/>
              
            </div>
            <div className=" flex justify-center py-[60px] w-full h-full">
              
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

export default EventCoordinatorsHelp