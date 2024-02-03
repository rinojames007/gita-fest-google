import React, { useState } from "react";

const CoordinatorList = () => {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    // Set loading to false when the iframe has finished loading
    setLoading(false);
  };

  return (
    <div className=" flec flex-col justify-center mx-auto items-center w-full h-full py-10 space-y-[40px] ">
      {loading && (
        <div className="flex flex-col justify-center items-center h-[220px]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
          <div className="loader text-center text-white font-semibold text-xl mt-6 ">
            Loading...
          </div>
        </div>
      )}
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTZZtZogdO5m5VnhJynGzffq9ANB74oSAK8MRPOZMVKmMyrGgOUmHoIfjUBj0-wPE0DxWiI0kVGFI5G/pubhtml?widget=true&amp;headers=false"
        className="md:w-[70%]  2xl:w-[50%] w-[95%] md:h-[300px] h-[500px] mx-auto md:rounded-xl rounded-md"
        onLoad={handleIframeLoad}
      ></iframe>

      {loading && (
        <div className="flex flex-col justify-center items-center h-[220px]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
          <div className="loader text-center text-white font-semibold text-xl mt-6 ">
            Loading...
          </div>
        </div>
      )}
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTht_z8EjaBGfzzrRfrXK5-drV1yVANFy1LT_8n8sQ3JguaylPXCfwGsMh9acUfBfhtZ_8m76GK159d/pubhtml?widget=true&amp;headers=false"
        className="md:w-[70%]  2xl:w-[50%] w-[95%] md:h-[300px] h-[500px] mx-auto md:rounded-xl rounded-md"
      ></iframe>

      {loading && (
        <div className="flex flex-col justify-center items-center h-[220px]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
          <div className="loader text-center text-white font-semibold text-xl mt-6 ">
            Loading...
          </div>
        </div>
      )}
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQhmOweX5f4fYUjHCIS5SrM61FbJ8LpNKgZB1ykPCrLcg1HCc2ESmM8nbmbnl7RnltWD3BkcS0S8d1V/pubhtml?widget=true&amp;headers=false"
        className="md:w-[70%]  2xl:w-[50%] w-[95%] md:h-[300px] h-[500px] mx-auto md:rounded-xl rounded-md"
        onLoad={handleIframeLoad}
      ></iframe>

     
    </div>
  );
};

export default CoordinatorList;
