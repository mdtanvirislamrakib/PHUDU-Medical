import React from 'react';
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import Footer from '../../component/Footer/Footer';
import { useNavigate, useParams } from 'react-router';

const NoData = () => {
    const navigate = useNavigate();

    const goToHome = e => {
        e.preventDefault()
        navigate("/")
    }

    const {id} = useParams();

    

    return (
        <>
            <div className='bg-gray-100 min-h-[calc(100vh-335px)] py-10 lg:py-24'>
                <div>

                    <div className='bg-white rounded-2xl p-5 lg:px-10 lg:py-10 w-full lg:w-10/12 mx-auto space-y-3'>
                        <h1 className='text-center font-bold text-2xl lg:text-4xl'>No Data Found!!</h1>
                        <p className='text-center font-semibold text-gray-400 text-lg lg:text-2xl'>No Doctor found with this registration No -</p>

                        <div className='flex items-center justify-center gap-1 font-bold text-gray-500 text-lg'>
                            <p className='font-bold'><PiTrademarkRegisteredLight /></p>
                            <p>BMC-{id}</p>
                        </div>

                        <div className='flex items-center justify-center'>
                            <button onClick={goToHome} className='bg-indigo-700 hover:bg-indigo-900 transition-all border border-indigo-600 rounded-4xl px-3 lg:px-5 py-1 lg:py-2 cursor-pointer text-white font-bold'>Go Back Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default NoData;