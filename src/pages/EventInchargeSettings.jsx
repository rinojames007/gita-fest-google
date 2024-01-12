import React from 'react'
import ProfileSetting from '../Components/ProfileSetting/ProfileSetting';
import EventInchargeNavbar from '../Components/Profile-Navbar/EventInchargeNavbar';


const EventInchargeSettings = () => {
    return (
        <div className=" bg-gradient-to-b from-black via-purple-900 to-black flex flex-col justify-center w-full min-h-screen h-full ">
          <div className="navbar w-full fixed top-0 backdrop-blur-lg">
           <EventInchargeNavbar/>
          </div>
          <div className=" flex py-[60px] justify-center w-full h-full">
            
            <div className="hero  w-full h-full md:m-4 flex-col justify-center text-center item-center ">
              <p className="text-3xl font-bold text-white">Profile Settings</p>
              <ProfileSetting />
            </div>
          </div>
        </div>
      );
}

export default EventInchargeSettings