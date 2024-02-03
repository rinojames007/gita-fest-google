import Navbar from "../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";

export default function Help() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleIframeLoad = () => {
    // Set loading to false when the iframe has finished loading
    setLoading(false);
  };

  const openWhatsAppChat = () => {
    // Replace the phone number and message with your own
    const phoneNumber = "9040567377";
    const message = "Hello, I need help!";

    // Create a WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open the link in a new tab
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29] min-h-screen h-full">
      <div className="navbar w-full fixed top-0 backdrop-blur-lg">
        <Navbar />
      </div>
      <div className=" flex py-[60px] justify-center w-full h-full">
        <div className="hero w-full h-full m-4 flex-col justify-center text-center item-center ">
          <p className="text-3xl font-bold text-white">Help and support</p>
          <p className="text-xl font-semibold text-green-600 py-2 md:hidden">Whatsapp us: <span className="text-white text-lg"> +91 90405 67377</span></p>
          <button
            className="bg-green-500 hidden md:flex mx-auto hover:bg-green-600 text-white px-4 py-2 my-8 rounded"
            onClick={openWhatsAppChat}
          >
            Need Help? Chat on WhatsApp
          </button>
          <div className="loader text-center mx-auto text-white font-semibold my-6 text-xl mt-6 ">
            Or
          </div>
          {loading && (
            <div className="flex flex-col justify-center items-center h-[220px]">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
              <div className="loader text-center text-white font-semibold text-xl mt-6 ">
                Loading...
              </div>
            </div>
          )}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe4XxJr5TVxCg9OAi1Vbhx3WMq0veWmVrpENnkUbysTYKxouA/viewform?embedded=true"
            className="mx-auto w-full md:w-2/3 lg:w-1/2 md:hidden"
            height="700"
            onLoad={handleIframeLoad}
          >
            Loading…
          </iframe>
          <iframe
            src="https://whatsform.com/KtHSid"
            width="100%"
            className="hidden md:block"
            height="600"
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      </div>
      {showBackToTop && (
        <button
          className="fixed bottom-8 right-8 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      )}
    </div>
  );
}
