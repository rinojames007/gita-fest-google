import React, { useEffect, useState } from "react";
import EventUpdates from "../Components/Events-updates/EventUpdates";
import Events from "../Components/Events/Events";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Highlights from "../Components/Highlights/Highlights";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function Landing() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const openWhatsApp = () => {
    window.open(
      "https://whatsapp.com/channel/0029VaJmZcQ6BIEezcBq8U23",
      "_blank"
    );
  };

  const showPopUp = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4200);
  };

  const handleAddToHomeScreen = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      showPopUp();
    }, 2000);

    const interval = setInterval(() => {
      showPopUp();
    }, 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const messages = [
    "The registration process will be held from February 1, 2024.",
  ];

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  return (
    <div
      onLoad={handleIframeLoad}
      className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen h-full"
    >
      <Navbar />
      {loading && (
        <div className="flex flex-col justify-center items-center h-[220px]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
          <div className="loader text-center text-white font-semibold text-xl mt-6 ">
            Loading...
          </div>
        </div>
      )}
      <Hero />
      <marquee
        className="marquee hidden md:flex text-blue-700 bg-[#dddaeb] py-[8px] md:py-[15px] md:text-xl text-[1.2rem] font-semibold"
        behavior="alternate"
        loop=""
      >
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </marquee>

      <marquee
        className="marquee md:hidden text-blue-700 bg-[#dddaeb] py-[8px] md:py-[15px] md:text-xl text-[1.2rem] font-semibold"
        behavior="Scroll"
        loop=""
      >
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </marquee>
      <Events />
      <EventUpdates />
      <Highlights />
      <Footer />

      {/* WhatsApp Button */}
      <div className={showPopup ? "whatsapp-popup active" : "whatsapp-popup"}>
        Join our WhatsApp Channel!
      </div>
      <div className="whatsapp-button" onClick={openWhatsApp}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
          alt="WhatsApp Icon"
          width="30"
        />
      </div>

      {/* Add to Home Screen Button */}
      {deferredPrompt && (
        <div className="add-to-home-screen-button text-white" onClick={handleAddToHomeScreen}>
          Add to Home Screen
        </div>
      )}
    </div>
  );
}
