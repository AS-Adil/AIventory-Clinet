import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner";
import { AuthContext } from "../../provider/AuthContext";
import { Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const ModelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefecth] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:3000/models/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setModel(data))
      .finally(() => setLoading(false));
  }, [user, id, refetch]);

  const isOwner = user && model && user.email === model.createdBy;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/models/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("after deleting", data);

            if (data.deletedCount) {
              // Swal.fire({
              //   title: "Deleted!",
              //   text: "The Model has been deleted.",
              //   icon: "success",
              // });
              toast.success(`Deleted ${model.name} Successfully`);
              navigate("/models");
            }
          });
      }
    });
  };

  const handlePurchase = () => {
    const PurchasedModel = {
      name: model.name,
      framework: model.framework,
      useCase: model.useCase,
      dataset: model.dataset,
      description: model.description,
      image: model.image,
      createdBy: model.createdBy,
      createdAt: model.createdAt,
      purchasedBy: user.email,
      purchased: 0,
    };

    fetch(`http://localhost:3000/purchased-models/${model._id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(PurchasedModel),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setRefecth(!refetch);
        toast.success(`Purchased ${model.name} successfully`);
      });
  };

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">

<div className="lg:col-span-1">
  <div className="bg-base-100 rounded-xl overflow-hidden border border-base-300 shadow-sm">
    <img src={model.image} alt={model.name} className="w-full h-64 object-cover" />
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-base-content">{model.name}</h1>
      <p className="text-sm text-base-content mt-1">
        By <span className="font-medium">{model.createdBy}</span>
      </p>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-base-content">
        <div>
          <div className="font-medium text-base-content">Framework</div>
          <div className="mt-1">{model.framework || "—"}</div>
        </div>
        <div>
          <div className="font-medium text-base-content">Purchased</div>
          <div className="mt-1">{model.purchased ?? 0} times</div>
        </div>
      </div>
    </div>
  </div>
</div>





<div className="lg:col-span-2">
  <div className="bg-base-100 rounded-xl px-6 py-7 border border-base-300 shadow-sm">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ">
      <div>
        <h2 className="text-3xl font-bold text-base-content">
          {model.name}
        </h2>
        <p className="text-sm text-base-content mt-1">{model.useCase}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handlePurchase}
          className="font-semibold px-4 py-2 rounded-2xl border border-secondary text-secondary hover:bg-secondary hover:text-white hover:cursor-pointer hover:scale-103 transition"
        >
          Purchase Model
        </button>

        {isOwner && (
          <div className="flex items-center gap-2 font-semibold">
            <Link
              to={`/update-model/${model._id}`}
              className="flex items-center gap-1 px-4 py-2 rounded-2xl text-white bg-secondary hover:scale-102 transition"
            >
              <Pencil size={15} />
              Edit
            </Link>

            <button
              onClick={handleDelete}
              className="flex items-center gap-1 px-4 py-2 rounded-2xl border border-red-800 text-white bg-red-500 hover:bg-red-600 hover:scale-102 hover:cursor-pointer transition"
            >
              <Trash2 size={17} />
              Delete
            </button>
          </div>
        )}
      </div>
    </div>

    <hr className="my-6" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-sm font-medium text-base-content">Framework</h3>
        <p className="mt-1 text-base-content">{model.framework || "—"}</p>

        <h3 className="text-sm font-medium text-base-content mt-4">Dataset</h3>
        <p className="mt-1 text-base-content">{model.dataset || "—"}</p>

        <h3 className="text-sm font-medium text-base-content mt-4">Use Case</h3>
        <p className="mt-1 text-base-content">{model.useCase || "—"}</p>
      </div>

      <div>
        <h3 className="text-sm font-medium text-base-content">Description</h3>
        <p className="mt-1 text-base-content whitespace-pre-line">
          {model.description || "No description"}
        </p>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-between text-sm text-base-content">
      <div>
        Created at:{" "}
        {model.createdAt
          ? new Date(model.createdAt).toLocaleString()
          : "—"}
      </div>
      <div>Purchased: {model.purchased} times</div>
    </div>
  </div>
</div>



        













      </div>
    </div>
  );
};

export default ModelDetails;
