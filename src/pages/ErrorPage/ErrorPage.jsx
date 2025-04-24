import React from 'react';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import { useNavigate } from 'react-router';
import gif from '../../assets/404-error-page-svg-animation.gif'

const ErrorPage = () => {
    const navigate = useNavigate();

    const goToHome = e => {
        e.preventDefault();
        navigate("/")
    }
    return (
        <>
            <Navbar></Navbar>
            <div className=' mx-auto flex flex-col items-center justify-center bg-gray-100 py-10 min-h-screen'>
                <div className='bg-white p-5 lg:p-10 rounded-2xl w-[350px]'>
                    <img src={gif} alt="" />
                </div>
                <div className='space-y-2 lg:space-y-4 mt-3'>
                    <h1 className='text-red-500 font-bold text-center text-2xl lg:text-4xl'>404 page is not Found</h1>
                    <p className='text-sm text-gray-600 font-medium lg:text-xl text-center'>OOPS! The page you are looking for dosen't exist</p>
                    <div className='flex items-center justify-center'>
                        <button onClick={goToHome} className='bg-indigo-700 hover:bg-indigo-900 transition-all border border-indigo-600 rounded-4xl px-3 lg:px-5 py-1 lg:py-2 cursor-pointer text-white font-bold'>Go Back Home</button>
                    </div>
                    
                </div>

            </div>
        </>

    );
};

export default ErrorPage;