import React from "react";

const LoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full py-6">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      {text && <p className="mt-3 text-gray-600 text-sm">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
