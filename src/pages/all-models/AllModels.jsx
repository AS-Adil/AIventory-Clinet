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

    const handleSearch = (e) => {
    e.preventDefault()
    const search_text = e.target.search.value
    console.log(search_text)
    setLoading(true)

    fetch(`http://localhost:3000/search?search=${search_text}`)
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      setModels(data)
      setLoading(false)
    })
    .catch(err =>{
      setLoading(false)
    })
  }

    if(loading){
        return <Spinner></Spinner>
    }

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-10">

      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        Explore All AI Models
      </h1>
          <form onSubmit={handleSearch} className=" mt-5 mb-10 flex gap-2 justify-center">
       <label className="input rounded-full ">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input name="search" type="search"  placeholder="Search" />
      </label>
      <button className="btn btn-secondary  rounded-full">{loading ? "Searching...." : "Search"}</button>
     </form>


     {
      !models ? <h1 className='text-primary text-3xl text-center'>No Model Found</h1>
       :

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {models.map(model => (
          <ModelCard key={model._id} model={model} />
        ))}

      </div>



     }
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {models.map(model => (
          <ModelCard key={model._id} model={model} />
        ))}

      </div>




    </div>
  );
};

export default AllModels;