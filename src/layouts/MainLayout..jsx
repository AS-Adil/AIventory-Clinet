import React from 'react';

import { Outlet } from 'react-router';
import Navbar from '../components/navBar/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
                 
                  <Toaster position="top-center" />
        </div>
    );
};

export default MainLayout;