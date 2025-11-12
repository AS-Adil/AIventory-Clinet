import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthContext";
import Spinner from "../../components/Spinner";

const AddModel = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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

    setLoading(true);
    fetch("https://aiventory-server.vercel.app/models", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newModel),
    })
      .then((res) => res.json())
      .then((data) => {
        // Swal.fire({
        //   icon: "success",
        //   title: "Model Added",
        //   text: "Your model has been successfully added!",
        //   timer: 1800,
        //   showConfirmButton: false,
        // });
        // console.log(data);
        setLoading(false);
        navigate("/models");
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message || "Something went wrong",
        });
      });
  };

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
   <h1 className="text-3xl font-bold text-center text-base-content mb-8">

        Add New AI Model
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-base-200 p-6 rounded-xl shadow-md border border-base-300"
      >
        <div>
          <label className="block font-medium mb-1 text-base-content">Model Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full input input-bordered"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-base-content">Framework</label>
          <input
            type="text"
            name="framework"
            required
            className="w-full input input-bordered"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-base-content">Use Case</label>
          <input
            type="text"
            name="useCase"
            required
            className="w-full input input-bordered"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-base-content">Dataset</label>
          <input
            type="text"
            name="dataset"
            required
            className="w-full input input-bordered"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-base-content">Description</label>
          <textarea
            name="description"
            rows="4"
            required
            className="w-full textarea textarea-bordered"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-base-content">Image URL</label>
          <input
            type="url"
            name="image"
            required
            className="w-full input input-bordered"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-secondary text-white py-2.5 cursor-pointer hover:scale-103 duration-300 rounded-lg hover:bg-secondary/90 transition"
        >
          Submit Model
        </button>
      </form>
    </div>
  );
};

export default AddModel;
