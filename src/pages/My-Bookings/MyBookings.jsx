import React from 'react';
import { useEffect, useState } from 'react';
import { getBookings, removeBookings } from '../../Ultilities/Ultilities';
import Booking from '../../component/Booking/Booking';

const MyBookings = () => {
    const [displayBooking, setDisplayBooking] = useState([])

    useEffect(() => {
        const saveDoctors = getBookings();
        setDisplayBooking(saveDoctors)
    }, [])

    const handleDelete = id => {
        removeBookings(id)
        setDisplayBooking(getBookings())
    }
    return (
        <div>
            <div>
                <h1 className='text-2xl lg:text-4xl font-bold text-center'>My Today Appointments</h1>
                <p className='text-sm lg:text-lg font-semibold text-gray-500 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            <div>
                {
                    displayBooking.map(booking => <Booking handleDelete = {handleDelete} key={booking.id} booking={booking}></Booking>)
                }
            </div>
        </div>
    );
};

export default MyBookings;