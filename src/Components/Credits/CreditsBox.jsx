import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

const CreditsBox = (props) => {
  return (
    <div className="h-[320px] my-12 py-[20px] md:w-[30%] w-[80%] space-y-4 px-[20px] shadow-lg border-2 border-[#41968e] shadow-[#45F0DF] backdrop-filter backdrop-blur-md bg-gradient-to-tl from-purple-900 to-black bg-opacity-40 rounded-xl flex flex-col justify-center items-center">
      <div className="flex justify-around items-center space-x-4 sm:space-x-5 ">
        <div className="contact flex flex-col items-center justify-center space-y-3">
          <a href={props.linkedIn} target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-slate-300 text-2xl"
            />
          </a>
          <a href={props.insta} target="_blank">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="text-slate-300 text-2xl"
            />
          </a>
          <a href={props.twitter} target="_blank">
            <FontAwesomeIcon
              icon={faSquareTwitter}
              className="text-slate-300 text-2xl"
            />
          </a>
        </div>
        <div className="photo w-[150px] rounded-full">
          <img
            src={props.photo}
            alt="profile image"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
      <div className="details text-white flex flex-col space-y-2 justify-center pt-3 items-center">
        <p className="name text-[#45F0DF] text-xl font-semibold text-center">
          {props.name}
        </p>
        <p className="role text-lg">( {props.role} )</p>
      </div>
    </div>
  );
};

export default CreditsBox;
