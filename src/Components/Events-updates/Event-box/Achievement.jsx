import React from 'react'

const Achievement = () => {
    const Acheivement = [
        {
          slNo: 1,
          EventId: "Ahw21",
          EventName: "Long Jump",
         Position: "2nd",
        },
        {
          slNo: 2,
          EventId: "Anw43",
          EventName: "Rangoli",
         Position: "3rd",
        },
        {
          slNo: 3,
          EventId: "Anw22",
          EventName: "Codathon",
         Position: "1st",
        },
        {
          slNo: 4,
          EventId: "Ahw09",
          EventName: "Short put Boys",
         Position: "3rd",
        },
        // Add more participants as needed
      ];
  return (
    <div className=" flex flex-col py-9 md:py-0">
          <h1 className="font-bold text-white text-4xl text-center mb-5">
           Achievements
          </h1>

          <div className="Participants-details overflow-x-auto">
            <table className="border-collapse border-[1px] border-black text-white w-full">
              <thead>
                <tr className="bg-purple-800 font-bold">
                  <th className="py-2 px-4">SlNo</th>
                  <th className="py-2 px-4">Event Id</th>
                  <th className="py-2 px-4">Event Name</th>
                  <th className="py-2 px-4">Position</th>
                </tr>
              </thead>
              <tbody>
                {Acheivement.map((event) => (
                  <tr
                    key={event.slNo}
                    className="bg-purple-700 border-y-[1px] border-black font-semibold"
                  >
                    <td className="py-3 px-6">{event.slNo}</td>
                    <td className="py-3 px-9">{event.EventId}</td>
                    <td className="py-3 px-9">{event.EventName}</td>
                    <td className="py-3 px-5">{event.Position}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default Achievement