import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch current model details
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/models/${id}`)
      .then((res) => res.json())
      .then((data) => setModel(data))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedModel = {
      name: form.name.value,
      framework: form.framework.value,
      useCase: form.useCase.value,
      dataset: form.dataset.value,
      description: form.description.value,
      image: form.image.value,
    };

    fetch(`http://localhost:3000/models/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedModel),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Model Updated",
            text: "Your model has been successfully updated!",
            timer: 1800,
            showConfirmButton: false,
          });
          navigate(`/models/${id}`);
        } else {
          Swal.fire({
            icon: "info",
            title: "No Changes",
            text: "No fields were updated.",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message || "Something went wrong",
        });
      });
  };

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!model) {
    return <div className="p-6">Model not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-secondary mb-8">
        Edit Model
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-xl shadow-md border border-gray-100"
      >
        <div>
          <label className="block font-medium mb-1">Model Name</label>
          <input
            type="text"
            name="name"
            defaultValue={model.name}
            required
            className="w-full input input-bordered"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Framework</label>
          <input
            type="text"
            name="framework"
            defaultValue={model.framework}
            required
            className="w-full input input-bordered"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Use Case</label>
          <input
            type="text"
            name="useCase"
            defaultValue={model.useCase}
            required
            className="w-full input input-bordered"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Dataset</label>
          <input
            type="text"
            name="dataset"
            defaultValue={model.dataset}
            required
            className="w-full input input-bordered"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            defaultValue={model.description}
            required
            className="w-full textarea textarea-bordered"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            defaultValue={model.image}
            required
            className="w-full input input-bordered"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-secondary/90 transition"
        >
          Update Model
        </button>
      </form>
    </div>
  );
};

export default EditPage;
