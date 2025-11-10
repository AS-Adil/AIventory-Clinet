import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthContext";

const AddModel = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const framework = form.framework.value;
    const useCase = form.useCase.value;
    const dataset = form.dataset.value;
    const description = form.description.value;
    const image = form.image.value;

    const newModel = {
      name,
      framework,
      useCase,
      dataset,
      description,
      image,
      createdBy: user.email,
      createdAt: new Date().toISOString(),
      purchased: 0,
    };


       fetch("http://localhost:3000/models", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newModel),
      })
      .then(res =>res.json())
      .then((data) =>{

        Swal.fire({
          icon: "success",
          title: "Model Added",
          text: "Your model has been successfully added!",
          timer: 1800,
          showConfirmButton: false,
        });
        console.log(data);
        navigate("/models");


      })
      .catch(err =>{
        Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message || "Something went wrong",
      });
      })


     

    
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-secondary mb-8">Add New AI Model</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <div>
          <label className="block font-medium mb-1">Model Name</label>
          <input type="text" name="name" required className="w-full input input-bordered" />
        </div>

        <div>
          <label className="block font-medium mb-1">Framework</label>
          <input type="text" name="framework" required className="w-full input input-bordered" />
        </div>

        <div>
          <label className="block font-medium mb-1">Use Case</label>
          <input type="text" name="useCase" required className="w-full input input-bordered" />
        </div>

        <div>
          <label className="block font-medium mb-1">Dataset</label>
          <input type="text" name="dataset" required className="w-full input input-bordered" />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea name="description" rows="4" required className="w-full textarea textarea-bordered" />
        </div>

        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input type="url" name="image" required className="w-full input input-bordered" />
        </div>

        <button
          type="submit"
          className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-secondary/90 transition"
        >
          Submit Model
        </button>
      </form>
    </div>
  );
};

export default AddModel;
