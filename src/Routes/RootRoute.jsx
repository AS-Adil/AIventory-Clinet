import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout.";
import Login from "../pages/Login/Login";
import Home from "../pages/Home";
import PrivateRoute from "../provider/PrivateRoute";
import AddModel from "../pages/add-model/AddModel";
import ModelPurchase from "../pages/model-purchase/ModelPurchase";
import MyModels from "../pages/my-models/MyModels";
import AllModels from "../pages/all-models/AllModels";
import ModelDetails from "../pages/model-details/ModelDetails";
import EditPage from "../pages/edit-page/EditPage";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'login',
                Component:Login
            },
            {
                path:'add-model',
                element:<PrivateRoute><AddModel></AddModel></PrivateRoute>

            },
            {
                path:'models',
                element:<AllModels></AllModels>
            },
            {
                path:'model-purchase',
                element:<PrivateRoute><ModelPurchase></ModelPurchase></PrivateRoute>
            },
            {
                path:'my-models',
                element:<PrivateRoute><MyModels></MyModels></PrivateRoute>
            },
            {
                path:'models/:id',
                element:<PrivateRoute><ModelDetails></ModelDetails></PrivateRoute>
            },
            {
                path:'update-model/:id',
                element:<PrivateRoute><EditPage></EditPage></PrivateRoute>
            }
        ]
        
    }
])