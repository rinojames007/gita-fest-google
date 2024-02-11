import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

const TrendingNotices = [
  {
    title: "Results of Audition",
    content: "List of participants selected for various events in Akanksha 2024",
    imageSrc: "https://i.postimg.cc/131xfDGw/Audition-res.webp",
    pdfLink: "https://drive.google.com/file/d/1MdHoMj7i3sB8IkX-LGNCejsPh99C0giY/view?usp=sharing",
  },
  {
    title: "Ahwaan 2024 (Sports)",
    content: "Registration open",
    imageSrc: "https://i.postimg.cc/qqZ7Lb6S/Ahwaan-reg.webp",
    link: "/ahwan",
  },
  {
    title: "Anwesh 2024 (Tech Fest)",
    content: "Registration open",
    imageSrc: "https://i.postimg.cc/Y2Nf3199/Anweh-reg.webp",
    link: "/anwesh/techEvents",
  },

  {
    title: "Robotronics",
    content: "Registration open",
    imageSrc:
      "https://i.postimg.cc/Gpy5S9xS/Whats-App-Image-2024-02-01-at-23-23-02-a9a4837c.jpg",
    link: "/roboticsDetails",
  },

  // Add more notice objects as needed
];

const notices = [
  {
    title: "Audition (Akanksha 2024)",
    content: "8th - 9th Feb 12:30 pm onward",
    imageSrc: "https://i.postimg.cc/y8VxsK6s/venue.webp",
  },
  {
    title: "Student Coordinators (Akanksha)",
    content:
      "Any participants facing problems can connect with their respective volunteers as per their categories & be prepared for the audition.",
    imageSrc: "https://i.postimg.cc/9Mnhmjbj/Student-Coordinators.webp",
    pdfLink:
      "https://drive.google.com/file/d/1FiMITmot4_rSWMpKqZ8nUV7775bs1TA4/view?usp=sharing",
  },
  {
    title: "Faculty Coordinators (Akanksha)",
    content: "Audition, Practice, Notice for Audition",
    imageSrc:
      "https://i.postimg.cc/d3LtjW9t/Audition-Final-Notice-05-02-2024-page-0001.webp",
    pdfLink:
      "https://drive.google.com/file/d/1cdlkaUv0_kV3-Cu5Tp1-0bJ7ygJK7eQ3/view?usp=sharing",
  },

  {
    title: "Audition for  Odissi and semi-classical",
    content: "Akanksha 2024 (Cultural Fest)",
    imageSrc: "https://i.postimg.cc/RhcjH0gy/odissi-Audition.jpg",
  },
  {
    title: "Registration Started",
    content: "Akanksha 2024 (Cultural Fest)",
    imageSrc: "https://i.postimg.cc/pTzBRcVY/Audition-Akanksha.png",
    link: "/akanksha",
  },
  {
    title: "Date Announced",
    content: "GITA Annual Fest date Announced",
    imageSrc: "https://i.postimg.cc/JznsPtVn/date-announced.jpg",
    pdfLink:
      "https://drive.google.com/file/d/1x0H59EF2JsIfd6JGz3ezM5oppucezlf8/view?usp=sharing",
  },
  // Add more notice objects as needed
];

const Notice = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29] min-h-screen h-full ">
      {/* Notice Section */}
      <Navbar />
      <h2 className="md:text-5xl text-3xl pt-[80px] underline underline-offset-8 font-bold mb-7 text-center text-white">
        Notice Board
      </h2>
      <section className="mb-8 flex flex-col justify-center items-center text-white">
        <h2 className="md:text-5xl text-3xl BlinkText font-bold mb-7">
          Trending Section
        </h2>
        <ul className="flex flex-col md:flex-row flex-wrap justify-around items-center">
          {TrendingNotices.map((notice, index) => (
            <li
              key={index}
              className="mb-6 flex flex-col w-[95%] md:w-[40%]  justify-center items-center px-4"
            >
              <h3 className="text-2xl font-bold mb-2 text-center">
                {notice.title}
              </h3>
              <p className="mb-2 text-center">{notice.content}</p>
              {notice.imageSrc && (
                <Link to={notice.link}>
                  <img
                    src={notice.imageSrc}
                    alt={`Image for ${notice.title}`}
                    className=" rounded-lg  h-auto mb-2 shadow-md shadow-black"
                  />
                </Link>
              )}
              {notice.pdfLink && (
                <a
                  href={notice.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:text-red-600 underline"
                >
                  View PDF
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className=" py-7 flex flex-col justify-center items-center border-white text-white border-t-2">
        {/* <h2 className="md:text-5xl text-3xl  font-bold mb-7">Trending Section</h2> */}
        <ul className="flex flex-col md:flex-row flex-wrap justify-around items-center">
          {notices.map((notice, index) => (
            <li
              key={index}
              className="mb-6 flex flex-col w-[95%] md:w-[40%] justify-center items-center px-4"
            >
              <h3 className="text-2xl font-bold mb-2 text-center">
                {notice.title}
              </h3>
              <p className="mb-2 text-center">{notice.content}</p>
              {notice.imageSrc && (
                <Link to={notice.link}>
                  <img
                    src={notice.imageSrc}
                    alt={`Image for ${notice.title}`}
                    className=" rounded-lg  h-auto mb-2 shadow-md shadow-black"
                  />
                </Link>
              )}
              {notice.pdfLink && (
                <a
                  href={notice.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:text-red-600 underline"
                >
                  View PDF
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Notice;
