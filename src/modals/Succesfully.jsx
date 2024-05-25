import React, { useEffect, useState } from "react";

const Succesfully = ({ show, onLoadingComplete, newName }) => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (show) {
      setProgress(0); 
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            onLoadingComplete();
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
  }, [show, onLoadingComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-400 bg-opacity-[0.4] z-50">
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10">
        <div className="text-center mb-4">Guardando...</div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-customHover h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Succesfully;
