import React, { useState } from "react";

const WinnerDisplay = (props) => {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    // Set loading to false when the iframe has finished loading
    setLoading(false);
  };
  return (
    <div className="h-full mx-auto">
      <h1 className="text-3xl font-bold text-center text-white">Winners:</h1>
      
    </div>
  );
};

export default WinnerDisplay;
