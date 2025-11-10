import { Link } from 'react-router';


const LatestModels = ({ model }) => {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-200 ">
      {/* Top Section */}
      <div>
        {/* Title and Icon/Image */}
        <div className="flex justify-between items-start gap-3">
          <h2 className="text-lg font-semibold text-gray-800 leading-tight line-clamp-2">
            {model.name}
          </h2>
          <img
            src={model.image}
            alt={model.name}
            className="w-10 h-10 rounded-md object-cover"
          />
        </div>

        {/* Category / Type */}
        <p className="mt-3 text-sm font-medium text-gray-700">
          {model.framework}
        </p>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {model.description}
        </p>
      </div>

      {/* Footer: View Details */}
      <div className="mt-5 mx-auto">
<Link
  to={`/models/${model._id}`}
  className="inline-block text-white bg-secondary px-9 py-1.5 rounded-full transition duration-200 hover:scale-105"
>
  View Details
</Link>

      </div>

      
    </div>
  );
};

export default LatestModels;
