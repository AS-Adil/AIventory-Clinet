import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>

      <p className="mt-6 text-2xl font-semibold text-gray-800">
        Oops! This AI model doesn’t exist.
      </p>
      <p className="mt-2 text-gray-600">
        The page you’re looking for might have been removed or never created.
      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 rounded-3xl bg-secondary text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-103  transition cursor-pointer"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
