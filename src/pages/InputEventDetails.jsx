import React from "react";
import EventInchargeNavbar from "../Components/Profile-Navbar/EventInchargeNavbar";
import InputEventDetailsForm from "./Input pages/InputEventDetailsForm";

const InputEventDetails = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen h-full">
      <div className="phone-nav w-full fixed top-0 backdrop-blur-lg">
        <EventInchargeNavbar />
      </div>
      <div className="Organiser-Profile-page py-[60px] w-full h-full flex justify-center">
        
        <div className="profile w-full flex flex-col py-[60px]">
          <InputEventDetailsForm />
        </div>
      </div>
    </div>
  );
};

export default InputEventDetails;
