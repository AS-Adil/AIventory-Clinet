import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';
import { AuthContext } from '../../provider/AuthContext';
import PurchasedModelCard from '../../components/purchased-mode-card/PurchasedModelCard';

const ModelPurchase = () => {
    const {user} = useContext(AuthContext)

    const [models, setModels] = useState([])
    const [loading, setLoading] =useState(true)

    useEffect(()=>{
        setLoading(true)
        fetch(`http://localhost:3000/purchased-models?email=${user?.email}`)
        .then(res =>res.json())
        .then(data =>{
            setModels(data)
        })
        .finally(()=> setLoading(false))
    }, [user])
    // console.log(models);

    if(loading){
        return <Spinner></Spinner>
    }

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-10">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        My Purchased Models
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map(model => (
          <PurchasedModelCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default ModelPurchase;