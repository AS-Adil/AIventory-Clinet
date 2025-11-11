import React, { useEffect, useState } from "react";
import LatestModels from "./LatestModels";
import Spinner from '../Spinner'

const DynamicSection = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/latest-models")
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
      })
      .finally(() => setLoading(false));
  }, []);
  // console.log(models);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-secondary mb-10">
        Featured AI Models
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <LatestModels key={model._id} model={model} />
        ))}
      </div>
    </section>
  );
};

export default DynamicSection;
