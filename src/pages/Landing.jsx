import React, { useEffect, useState } from "react";
import EventUpdates from "../Components/Events-updates/EventUpdates";
import Events from "../Components/Events/Events";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Highlights from "../Components/Highlights/Highlights";
import Navbar from "../Components/Navbar/Navbar";

export default function Landing() {
  
  return (

      <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen h-full">
        <Navbar />
        <Hero />
        <Events />
        <EventUpdates />
        <Highlights />
        <Footer />
      </div>

  );
}
