import React from "react";
import Alert from "../Components/Notification/Alert";
import OrganiserProfileNavbar from "../Components/Profile-Navbar/OrganiserProfileNavbar";

const OrganiserNotification = () => {
  return (
    <div className=" flex flex-col justify-center w-screen h-full min-h-screen bg-gradient-to-b from-black via-purple-900 to-black">
      <div className="navbar w-full fixed top-0 backdrop-blur-lg">
        <OrganiserProfileNavbar/>
      </div>
      <div className=" flex py-[60px] justify-center w-full h-full">
        
        <div className="hero w-full h-full m-4 flex-col justify-center text-center item-center ">
          <p className="text-3xl font-bold text-white">Notification page....</p>
          <div className=" sm:w-[80%] mx-auto py-5">
            <Alert />
            <Alert />
            <Alert />
            <Alert />
            <Alert />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganiserNotification;
