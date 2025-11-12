import React from 'react';

import { Outlet } from 'react-router';
import Navbar from '../components/navBar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-grow'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
                 
                  <Toaster position="top-center" />
        </div>
    );
};

export default MainLayout;