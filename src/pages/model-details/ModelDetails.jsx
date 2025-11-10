import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner";
import { AuthContext } from "../../provider/AuthContext";
import { Pencil, Trash2 } from 'lucide-react';


const ModelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
   

    fetch(`http://localhost:3000/models/${id}`)
      .then((res) => {
   
        return res.json();
      })
      .then((data) => setModel(data))
      // .catch((err) => setError(err.message || "Something went wrong"))
      .finally(() => setLoading(false));
  }, [id]);

  const isOwner = user && model && user.email === model.createdBy;


  // const handleDelete = async () => {
  //   const result = await Swal.fire({
  //     title: "Delete model?",
  //     text: "This action cannot be undone. The model will be permanently removed.",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Yes, delete it",
  //     cancelButtonText: "Cancel",
  //     confirmButtonColor: "#e11d48",
  //     reverseButtons: true,
  //   });

   

  //     try {
  //       const res = await fetch(`http://localhost:3000/models/${id}`, {
  //         method: "DELETE",
  //       });
  //       if (!res.ok) throw new Error("Failed to delete model");

  //       Swal.fire({
  //         icon: "success",
  //         title: "Deleted",
  //         text: "Model has been deleted.",
  //         timer: 1500,
  //         showConfirmButton: false,
  //       });

  //       navigate("/models");
  //     } catch (err) {
  //       setError(err.message || "Delete failed");
  //       Swal.fire({
  //         icon: "error",
  //         title: "Delete failed",
  //         text: err.message || "Something went wrong",
  //       });
  //     } finally {
  //       setActionLoading(false);
  //     }
  //   }
  

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

        <div className="lg:col-span-1 ">


          <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm ">
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h1 className="text-2xl font-semibold text-gray-900">{model.name}</h1>
              <p className="text-sm text-gray-500 mt-1">
                By <span className="font-medium">{model.createdBy}</span>
              </p>

              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <div className="font-medium text-gray-700">Framework</div>
                  <div className="mt-1">{model.framework || "—"}</div>
                </div>

                <div>
                  <div className="font-medium text-gray-700">Purchased</div>
                  <div className="mt-1">{model.purchased ?? 0} times</div>
                </div>


              </div>
            </div>
          </div>



        </div>


        <div className="lg:col-span-2">


          <div className="bg-white rounded-xl px-6 py-7 border border-gray-100 shadow-sm ">


            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{model.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{model.useCase}</p>
              </div>


              <div className="flex items-center gap-3">
                <button
                  // onClick={handlePurchase}
                  // disabled={actionLoading}
                  className="font-semibold px-4 py-2 rounded-2xl border border-secondary text-secondary hover:bg-secondary hover:text-white hover:cursor-pointer hover:scale-103  transition "
                >
                 Purchase Model
                </button>

                {!isOwner && (


                 <div className="flex items-center gap-2 font-semibold">
                   <Link
                     to={`/models/${id}/edit`}
                     className="flex items-center gap-1 px-4 py-2 rounded-2xl text-white bg-secondary hover:scale-102 transition"
                   >
                     <Pencil size={15} />
                     Edit
                   </Link>
                 
                   <button
                     // onClick={handleDelete}
                     // disabled={actionLoading}
                     className="flex items-center gap-1 px-4 py-2 rounded-2xl border border-red-800 text-white bg-red-500 hover:bg-red-600 hover:scale-102 hover:cursor-pointer  transition "
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
                <h3 className="text-sm font-medium text-gray-700">Framework</h3>
                <p className="mt-1 text-gray-800">{model.framework || "—"}</p>

                <h3 className="text-sm font-medium text-gray-700 mt-4">Dataset</h3>
                <p className="mt-1 text-gray-800">{model.dataset || "—"}</p>

                <h3 className="text-sm font-medium text-gray-700 mt-4">Use Case</h3>
                <p className="mt-1 text-gray-800">{model.useCase || "—"}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700">Description</h3>
                <p className="mt-1 text-gray-800 whitespace-pre-line">{model.description || "No description"}</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
              <div>Created at: {model.createdAt ? new Date(model.createdAt).toLocaleString() : "—"}</div>
              <div>Purchased: {model.purchased ?? 0} times</div>
            </div>


          </div>

          
        </div>


      </div>



    </div>
  );
};

export default ModelDetails;
