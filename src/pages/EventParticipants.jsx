import React from "react";

import { Link } from "react-router-dom";

const EventParticipants = () => {
  // Example participant data array
  const participantsData = [
    {
      slNo: 1,
      rollNumber: "2102040",
      name: "Aryan Kumar Mohapatra",
      phoneNumber: "9337440067",
    },
    {
      slNo: 2,
      rollNumber: "2102041",
      name: "Ashis Behera",
      phoneNumber: "1234567890",
    },
    {
      slNo: 3,
      rollNumber: "2102042",
      name: "Ashlesha Samal",
      phoneNumber: "1234567890",
    },
    {
      slNo: 4,
      rollNumber: "2102043",
      name: "Ashutosh Das",
      phoneNumber: "1234567890",
    },
    // Add more participants as needed
  ];

  return (
    <div className="bg-gradient-to-b py-10 from-black via-purple-900 to-black min-h-screen">
       <div className="absolute top-4 left-4">
                <Link to="/" className="w-fit">
                    <button className="bg-slate-600 px-5 py-2 text-lg font-semibold rounded-md hover:scale-90 hover:text-red-600 text-white">Back</button>
                </Link>
            </div>
      <div className="Organiser-Profile-page w-full h-full flex flex-col md:flex-row justify-center">
        
        <div className="profile md:w-full flex flex-col py-5 md:py-0">
          <h1 className="font-bold text-white text-4xl text-center mb-5">
            Event Participants
          </h1>

          <div className="Participants-details overflow-x-auto">
            <table className="border-collapse border-[1px] border-black text-white w-full">
              <thead>
                <tr className="bg-purple-800">
                  <th className="py-2 px-4">SlNo</th>
                  <th className="py-2 px-4">Roll Number</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Phone number</th>
                  <th className="py-2 px-4">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {participantsData.map((participant) => (
                  <tr
                    key={participant.slNo}
                    className="bg-purple-700 border-y-[1px] border-black"
                  >
                    <td className="py-3 px-6">{participant.slNo}</td>
                    <td className="py-3 px-9">{participant.rollNumber}</td>
                    <td className="py-3 px-9">{participant.name}</td>
                    <td className="py-3 px-5">{participant.phoneNumber}</td>
                    <td className="py-3 px-5">
                      <input
                        type="checkbox"
                        style={{ transform: "scale(1.5)" }}
                        name="remarks"
                      />{" "}
                      Present
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventParticipants;
