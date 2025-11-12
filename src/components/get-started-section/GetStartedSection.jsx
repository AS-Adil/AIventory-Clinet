import React from "react";
import { Link } from "react-router";

const GetStartedSection = () => {
  return (
    <section className="py-16 border-t border-base-300 bg-base-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transform">
        <h2 className="text-3xl sm:text-4xl font-bold text-base-content mb-4">
          Ready to Manage Your AI Models?
        </h2>
        <p className="text-lg text-base-content mb-6">
          Create an account or log in to start adding, editing, and tracking
          your AI models. Whether you're building for research or production,
          our tools help you stay organized and in control.
        </p>

        <div className="flex justify-center mt-2">
          <Link
            to={`/login`}
            className="text-white bg-secondary shadow-md hover:shadow-xl px-9 py-2 rounded-full transition duration-200 hover:scale-104"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
