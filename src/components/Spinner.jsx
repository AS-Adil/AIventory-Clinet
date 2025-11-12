import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-base-100/70 z-50">
      {/* Circular loader */}
      <div className="w-15 h-15 border-6 border-black border-t-transparent rounded-full animate-spin"></div>
      
      {/* Loading text with extra spacing */}
      <p className="mt-6 text-3xl font-bold text-base-content tracking-wide">
        L o a d i n g . . .
      </p>
    </div>
  );
};

export default Spinner;
