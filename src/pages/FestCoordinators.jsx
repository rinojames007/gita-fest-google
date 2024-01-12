import React from "react";
import FestCoordinatorInFo from "../Components/Fest-Coordinators/FestCoordinatorInFo";
import { Link } from "react-router-dom";

const FestCoordinators = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen h-full flex flex-col py-6 space-y-7 ">
      <Link to="/support/profile" className="w-fit">
        <button className="bg-slate-600 px-5 py-2 text-lg font-semibold rounded-md hover:scale-90 hover:text-red-600 text-white">
          Back
        </button>
      </Link>
      <div className="Organisers">
        <h1 className="text-3xl font-bold text-white text-center">
          Organisers
        </h1>
        <FestCoordinatorInFo />
        <FestCoordinatorInFo />
        <FestCoordinatorInFo />
        <FestCoordinatorInFo />
      </div>
      <div className="Event-Incharges">
        <h1 className="text-3xl font-bold text-white text-center">
          Event-Incharges
        </h1>
        <FestCoordinatorInFo />
        <FestCoordinatorInFo />
        <FestCoordinatorInFo />
        <FestCoordinatorInFo />
      </div>
      <div className="Event-Coordinators">
        <h1 className="text-3xl font-bold text-white text-center">
          Event-Coordinators
        </h1>
        <FestCoordinatorInFo />
        <FestCoordinatorInFo />
        <FestCoordinatorInFo />
        <FestCoordinatorInFo />
      </div>
      <div className="Event-Volunteers">
        <h1 className="text-3xl font-bold text-white text-center">
          Event-Volunteers
        </h1>
        <FestCoordinatorInFo />
        <FestCoordinatorInFo />
        <FestCoordinatorInFo />
        <FestCoordinatorInFo />
      </div>
      <div className="Help-Support-Team flex flex-col space-y-8">
        <div className="Core-Team">
          <h1 className="text-3xl font-bold text-white text-center">
            Core-Team
          </h1>
          <FestCoordinatorInFo />
          <FestCoordinatorInFo />
          <FestCoordinatorInFo />
          <FestCoordinatorInFo />
        </div>
        <div className="support-Team">
          <h1 className="text-3xl font-bold text-white text-center">
            Help & Support Team
          </h1>
          <FestCoordinatorInFo />
          <FestCoordinatorInFo />
          <FestCoordinatorInFo />
          <FestCoordinatorInFo />
        </div>
      </div>
    </div>
  );
};

export default FestCoordinators;
