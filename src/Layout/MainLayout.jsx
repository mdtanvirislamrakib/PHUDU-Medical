import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-335px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;