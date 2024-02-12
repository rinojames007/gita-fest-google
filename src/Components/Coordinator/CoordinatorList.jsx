import React, { useState } from "react";

const CoordinatorList = () => {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    // Set loading to false when the iframe has finished loading
    setLoading(false);
  };
  
  const list = [
    {
      title: "Student Coordinators ( Akanksha 2024 )",
      sheet:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTS1tSuvidmkvv8u21WLgHg_Pr4f6c5OJPgGuI98mS30XctUnPQLeI3aKEoZygsvhLyFt0vSEn41e1S/pubhtml?widget=true&amp;headers=false",
    },
    {
      title: "Student Coordinators ( Anwesh 2024 )",
      sheet:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdI6uGyNin4k3h2SQqsoY61pgWKZTIhWjuoy_ZFytfP-pT-NN39fXoYbrirEHLjmLNWkLpCdkC3Hep/pubhtml?widget=true&amp;headers=false",
    },
    {
      title: "Faculty Coordinators (Akanksha 2024)",
      sheet:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7TIIaUjeAHJNkoEhiCbR8nd__y25IIyla_6oA9lJsFaZmulRZp3sYt3e1F64FNW74vPMSMbIZCYGP/pubhtml?widget=true&amp;headers=false",
    },
  ];

  return (
    <div className="flec flex-col justify-center mx-auto items-center w-full h-full py-5 space-y-[40px]">
      {list.map((item, index) => (
        <div key={index}>
          <p className="UpcomingEvents text-2xl py-7 md:text-4xl text-center font-semibold text-white">
            {item.title}
          </p>
          {loading && (
            <div className="flex flex-col justify-center items-center h-[220px]">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
              <div className="loader text-center text-white font-semibold text-xl mt-6 ">
                Loading...
              </div>
            </div>
          )}
          <iframe
            src={item.sheet}
            className="md:w-[70%] 2xl:w-[50%] w-[95%] md:h-[300px] h-[500px] mx-auto md:rounded-xl rounded-md"
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default CoordinatorList;
