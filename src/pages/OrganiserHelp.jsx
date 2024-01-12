import React from "react";
import OrganiserProfileNavbar from "../Components/Profile-Navbar/OrganiserProfileNavbar";
const OrganiserHelp = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black h-full min-h-screen">
      
        <div className="navbar w-full fixed top-0 backdrop-blur-lg">
        <OrganiserProfileNavbar/>
        </div>
        <div className=" flex py-[60px] justify-center w-full h-full">
         
          <div className="hero w-full h-full m-4 flex-col justify-center text-center item-center ">
            <p className="text-3xl font-bold text-white">
              Help and support page....
            </p>
          </div>
       
      </div>
    </div>
  );
};

export default OrganiserHelp;
