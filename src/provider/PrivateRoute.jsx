import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../components/Spinner';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext)

    const location = useLocation()

    if(user) {
        return children
    }else if(loading){
        return <Spinner></Spinner>
    }else{


        return <Navigate
        to={"/login"}
        state={location.pathname}
        ></Navigate>
    }



};

export default PrivateRoute;