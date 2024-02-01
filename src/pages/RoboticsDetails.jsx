import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar/Navbar";

const RoboticsDetails = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
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

  const Robo = [
    {
      title: "Robo Racer",
      content: "Line Following Robot",
      imageSrc: "https://i.postimg.cc/76rYp81q/robo-race.webp",
      pdfLink:
        "https://drive.google.com/file/d/1XhnG0v6eJIp1xPzT6KiLh0ebmuxaU9mI/view?usp=sharing",
    },
    {
      title: "Robo Tracker",
      content: "Line Following Robot",
      imageSrc: "https://i.postimg.cc/636phsdq/Robo-Tracker.webp",
      pdfLink:
        "https://drive.google.com/file/d/1h9Nd8ZLbvM8CE3RXyxe0tVxaR44SH1jY/view?usp=sharing",
    },
    {
      title: "Prototype Exhibition",
      content: "WORKING MODEL",
      imageSrc: "https://i.postimg.cc/ydGvTHwy/robotics.webp",
      pdfLink:
        "https://drive.google.com/file/d/1XpzG0cQCtB5uNUtsjIg9jUfbY7x7XLLw/view?usp=sharing",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29] h-full min-h-screen pb-[50px]">
      <Navbar />

      {/* Banner Section */}
      
      <h2 className="md:text-5xl text-3xl pt-[80px] pb-[25px] underline underline-offset-8 font-bold text-center text-white">
        ROBOTRONICS
      </h2>
      

      {/* Visit the Site Button */}
      <a
        href="https://anwesh2k24.info/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-center mx-auto text-xl md:text-3xl font-semibold py-3 w-fit hover:text-red-600 underline block mb-2"
      >
        Visit the Site <FontAwesomeIcon icon={faLocationArrow} />
      </a>

      {/* Robotics Details */}
      <section className="flex flex-col justify-center items-center text-white">
        <ul className="flex flex-col md:flex-row flex-wrap justify-around items-center">
          {Robo.map((item, index) => (
            <li
              key={index}
              className="mb-6 flex flex-col w-[95%] md:w-[40%]  justify-center items-center px-4"
            >
              <h3 className="text-2xl font-bold mb-2 text-center">
                {item.title}
              </h3>
              <p className="mb-2 text-center">{item.content}</p>
              {item.imageSrc && (
                <a
                  href={item.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-red-600 underline"
                >
                  <img
                    src={item.imageSrc}
                    alt={`Image for ${item.title}`}
                    className="rounded-lg h-auto mb-2 shadow-md shadow-black"
                  />
                </a>
              )}
              {item.pdfLink && (
                <a
                  href={item.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-red-600 underline block mb-2"
                >
                  View PDF
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
      <div className="gradiantbg shadow-lg shadow-black flex flex-col px-5 items-center justify-center text-lg text-white text-center py-4">
        <p>
          GITA Autonomous College brings you the annual College Technical Event
          UTSAH SECOND EDITION. <br /> Come, join us and unveil your talent and
          compete with the best teams 🫱🏼‍🫲🏻 Participate in ROBO RACE, Prototype
          Exhibition (Working Model) & LINE FOLLOWER and grab an opportunity to
          win prizes up to Rs. 18,000/-🤩💥 along with other attractive goodies.
          We await your presence and wish you luck.
        </p>
        <p>Registration for the above-mentioned events is now open.</p>
      </div>
      {/* Contact Details */}
      <div className="text-center text-white my-8 space-y-2">
        <p>For more details, visit our official website:</p>
        <p>
          <a
            href="https://anwesh2k24.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-red-600 underline"
          >
            anwesh2k24.info
          </a>
        </p>
        <p>Student Coordinator Contact:</p>
        <p>Shankar: +91 6370287810</p>
        <p>Vineet: +91 8210079758</p>
      </div>

      {/* Back to Top Button */}
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
};

export default RoboticsDetails;
