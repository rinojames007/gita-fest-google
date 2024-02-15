import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
const NoticeBox = () => {
  return (
    <div className=" flex flex-col justify-center items-center space-y-9">
      {/* <div className="md:w-full w-full flex flex-col items-center justify-center space-y-3 text-[#721c24] text-center bg-[#f8d7da] p-[15px] rounded-lg border-[2px] shadow-xl shadow-black border-[#f4a1aa]">
        <h2 className="text-2xl font-bold text-center w-full">
          AUDITION RESULTS
        </h2>
        <p className="text-lg font-semibold">
          <strong className="text-lg font-bold">Akanksha(2024)</strong>
        </p>

        <a href="https://drive.google.com/file/d/1MdHoMj7i3sB8IkX-LGNCejsPh99C0giY/view?usp=sharing" target="_blank">
          <button className="bg-[#042136] text-white text-sm px-8 py-4 hover:scale-90 delay-100 rounded-md BlinkText">
            View Result<FontAwesomeIcon icon={faLocationArrow} />
          </button>
        </a>
      </div> */}
      <div className="md:w-full w-full flex flex-col items-center justify-center space-y-3 text-[#721c24] text-center bg-[#f8d7da] p-[15px] rounded-lg border-[2px] shadow-xl shadow-black border-[#f4a1aa]">
        <h2 className="text-2xl font-bold text-center w-full">
          Anwesh (Tech Fest)
        </h2>
        <p className="text-lg font-semibold text-center mx-auto">
          This is for the information that students interested to participate in
          the event Tech Quiz and Math olympiad,<br /> They have to register
          themselves through Online by 16/02/24 till 5pm . <br /> The preliminary round
          for both events will conduct on 17/02/24. <br /> The time and venue will be
          intimated on that day
        </p>
      </div>

      <div className="md:w-full w-full flex flex-col items-center justify-center space-y-3 text-[#721c24] text-center bg-[#f8d7da] p-[15px] rounded-lg border-[2px] shadow-xl shadow-black border-[#f4a1aa]">
        <h2 className="text-2xl font-bold text-center w-full">
          Registration Started for Ahwaan (Sports)
        </h2>
        <p className="text-lg font-semibold">
          <strong className="text-lg font-bold">Date:</strong> 19/02/2024 -
          20/02/2024
        </p>

        <Link to="/ahwan">
          <button className="bg-[#042136] text-white text-sm px-8 py-4 hover:scale-90 delay-100 rounded-md BlinkText">
            Register Now <FontAwesomeIcon icon={faLocationArrow} />
          </button>
        </Link>
      </div>

      <div className="md:w-full w-full flex flex-col items-center justify-center space-y-3 text-[#721c24] text-center bg-[#f8d7da] p-[15px] rounded-lg border-[2px] shadow-xl shadow-black border-[#f4a1aa]">
        <h2 className="text-2xl font-bold text-center w-full">
          Registration Started for Anwesh (Tech Fest)
        </h2>
        <p className="text-lg font-semibold">
          <strong className="text-lg font-bold">Date:</strong> 20/02/2024 -
          21/02/2024
        </p>

        <Link to="/anwesh/techEvents">
          <button className="bg-[#042136] text-white text-sm px-8 py-4 hover:scale-90 delay-100 rounded-md BlinkText">
            Register Now <FontAwesomeIcon icon={faLocationArrow} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoticeBox;
