import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";

const TrendingNotices = [
  {
    title: "Date Announced",
    content: "GITA Annual Fest date Announced",
    imageSrc: "https://i.postimg.cc/JznsPtVn/date-announced.jpg",
    pdfLink:
      "https://drive.google.com/file/d/1x0H59EF2JsIfd6JGz3ezM5oppucezlf8/view?usp=sharing",
  },
  
 
  // Add more notice objects as needed
];

const notices = [
  
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
              <h3 className="text-2xl font-bold mb-2 text-center">{notice.title}</h3>
              <p className="mb-2 text-center">{notice.content}</p>
              {notice.imageSrc && (
                <img
                  src={notice.imageSrc}
                  alt={`Image for ${notice.title}`}
                  className=" rounded-lg  h-auto mb-2"
                />
              )}
              {notice.pdfLink && (
                <a
                  href={notice.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-red-600 underline"
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
              <h3 className="text-2xl font-bold mb-2 text-center">{notice.title}</h3>
              <p className="mb-2 text-center">{notice.content}</p>
              {notice.imageSrc && (
                <img
                  src={notice.imageSrc}
                  alt={`Image for ${notice.title}`}
                  className="rounded-lg h-auto mb-2"
                />
              )}
              {notice.pdfLink && (
                <a
                  href={notice.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-red-600 underline"
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
