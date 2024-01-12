import Navbar from "../Components/Navbar/Navbar";
import React from "react";

const Coordinators = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black h-full min-h-screen">
      <Navbar />
      <div className="pt-[60px]">
        <h1 className="font-bold text-5xl text-center py-5 text-white">
          Coordinators Page
        </h1>
      </div>
      <div className="desc md:mx-11">
        <p className="text-center text-white">
          "As Event Coordinators, our mission is to orchestrate seamless and
          memorable experiences for every participant. From meticulous event
          planning to on-the-day execution, we thrive on precision and
          creativity. Our team collaborates to ensure each detail, from
          scheduling to logistics, contributes to the overall success of the
          event. With a passion for delivering exceptional experiences, we bring
          innovation and enthusiasm to every project, creating moments that
          resonate with attendees and leave a lasting impression."
        </p>
      </div>
      <div>
        
      </div>
     
    </div>
  );
};

export default Coordinators;
