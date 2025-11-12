import React, { useEffect, useState } from 'react';
import ModelCard from '../../components/ModelCard';
import Spinner from '../../components/Spinner';

const AllModels = () => {

    const [models, setModels] = useState([])
    const [loading, setLoading] =useState(true)
    const [forFramework, setForFrameworks] = useState(null)
    

    useEffect(()=>{
        setLoading(true)
        fetch('http://localhost:3000/models')
        .then(res =>res.json())
        .then(data =>{
            setModels(data)
            setForFrameworks(data)
        })
        .finally(()=> setLoading(false))
    }, [])
    // console.log(forFramework);

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


  const handleSort = ( frame) =>{
    // console.log(frame);
   const filteredModel =  forFramework.filter(model=>model.framework === frame)
   setModels(filteredModel)
  //  console.log(filteredModel);
    
  }



    if(loading){
        return <Spinner></Spinner>
    }

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-10">

      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        Explore All AI Models
      </h1>

          <div className=" mt-5 mb-10 flex gap-2 justify-between">

                   <div>
          <label className="form-control w-full max-w-xs">
            <select 
              className="select select-bordered"
              // value={sortOrder}
              // onChange={(e) => setSortOrder(e.target.value)}
            >
              <option disabled value="none">
                Sort by Framework
              </option>

              <option value="download-desc">Sort by name</option>
              {forFramework.map(model =><option key={model._id} onClick={()=>handleSort(model.framework)}>{model.framework}</option>)}
{/* 

              <option value="download-asc">Low-&gt;High</option> */}
            </select>
          </label>
        </div>




<form onSubmit={handleSearch} className="flex ">
  <div className="flex items-center border border-secondary rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-secondary ">
    <span className="px-3 text-gray-500">
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </span>
    <input
      name="search"
      type="search"
      placeholder="Search"
      className="px-4 py-2 w-full focus:outline-none"
    />
  </div>
  <button className="btn btn-secondary py-3 px-6 ml-1 rounded-full">
    Search
  </button>
</form>




          </div>



     {
      models.length===0 ? <h1 className='text-secondary italic font-semibold text-3xl text-center'>No Models Found</h1>
       :

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {models.map(model => (
          <ModelCard key={model._id} model={model} />
        ))}

      </div>



     }
      






    </div>
  );
};

export default AllModels;