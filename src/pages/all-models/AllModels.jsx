import React, { useEffect, useState } from 'react';
import ModelCard from '../../components/ModelCard';
import Spinner from '../../components/Spinner';

const AllModels = () => {

    const [models, setModels] = useState([])
    const [loading, setLoading] =useState(true)

    useEffect(()=>{
        setLoading(true)
        fetch('http://localhost:3000/models')
        .then(res =>res.json())
        .then(data =>{
            setModels(data)
        })
        .finally(()=> setLoading(false))
    }, [])
    // console.log(models);

    if(loading){
        return <Spinner></Spinner>
    }

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-10">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        Explore All AI Models
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map(model => (
          <ModelCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default AllModels;