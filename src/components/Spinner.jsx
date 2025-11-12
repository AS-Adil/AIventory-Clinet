import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/50 z-50">
      {/* Circular loader */}
      <div className="w-14 h-14 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
      
      {/* Loading text with extra spacing */}
      <p className="mt-6 text-3xl font-bold text-secondary ">
        L o a d i n g . . .
      </p>
    </div>
  );
};

export default Spinner;
