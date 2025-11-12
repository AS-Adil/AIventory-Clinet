import React from "react";
import { Link } from "react-router";

const ModelCard = ({ model }) => {
  return (
    <div className="bg-base-200 shadow-md rounded-xl  overflow-hidden hover:shadow-2xl transition duration-200 border border-gray-100">
      <img
        src={model.image}
        alt={model.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-2">
        {/* <h2 className="text-xl font-semibold text-secondary">{model.name}</h2> */}
        <h2 className="text-xl font-semibold text-base-content">{model.name}</h2>
<p className="text-sm text-base-content">
  <span className="font-medium">Framework:</span> {model.framework}
</p>
<p className="text-sm text-base-content">
  <span className="font-medium">Use Case:</span> {model.useCase}
</p>


        <div className="flex justify-center mt-4">
          <Link
            to={`/models/${model._id}`}
            className="text-white bg-secondary px-9 py-2 rounded-full transition duration-200 hover:scale-103"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
