import React from 'react';
import { useEffect, useState } from 'react';
import { getBookings, removeBookings } from '../../Ultilities/Ultilities';
import Booking from '../../component/Booking/Booking';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import Charts from '../../component/Charts/Charts';
import { Helmet } from 'react-helmet-async';


const MyBookings = () => {
    const notify = () => toast.error('Cancled Apointment!');

    const [displayBooking, setDisplayBooking] = useState([])

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const saveDoctors = getBookings();
        setDisplayBooking(saveDoctors);
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const handleDelete = id => {
        removeBookings(id)
        setDisplayBooking(getBookings())
        notify()
    }


    const navigate = useNavigate();

    const handleBackToHome = e => {
        e.preventDefault()
        navigate("/")
    }



    return (
        <div className='my-10'>
            <Helmet>
                <title>phudu | booking</title>
            </Helmet>
            {
                loading ? (<span className="loading loading-infinity w-10 md:w-14 lg:w-24 text-indigo-600 min-h-screen flex items-center justify-center mx-auto my-auto"></span>) : (<div>
                    {
                        displayBooking.length < 1 && <div>
                            <div className='space-y-2'>
                                <h1 className='text-2xl lg:text-4xl font-bold text-center'>You Have Not Booked Any Apointment yet</h1>
                                <p className='text-xs lg:text-lg font-semibold text-gray-500 text-center'>Our Platfrom connetct you with verified, experience doctors across various specialties - All At Your convenience</p>
                            </div>
                            <div className='flex items-center justify-center mt-3'>
                                <button onClick={handleBackToHome} className='bg-indigo-700 hover:bg-indigo-900 transition-all border border-indigo-600 rounded-4xl px-3 lg:px-5 py-1 lg:py-2 cursor-pointer text-white font-bold'>Book an Apointment</button>
                            </div>

                        </div>
                    }

                    {
                        displayBooking.length > 0 && <div>

                            <div className='mb-5 lg:mb-10'>
                                <Charts displayBooking={displayBooking}></Charts>
                            </div>


                            <div>
                                <h1 className='text-2xl lg:text-4xl font-bold text-center'>My Today Appointments</h1>
                                <p className='text-sm lg:text-lg font-semibold text-gray-500 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                            </div>
                            <div>
                                {
                                    displayBooking.map(booking => <Booking handleDelete={handleDelete} key={booking.id} booking={booking}></Booking>)
                                }
                            </div>
                        </div>
                    }
                </div>)
            }




        </div>
    );
};

export default MyBookings;