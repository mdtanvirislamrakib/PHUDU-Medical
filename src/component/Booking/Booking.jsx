import React from 'react';


const Booking = ({ booking, handleDelete }) => {
    console.log(booking);

    return (
        <div className='w-full lg:w-10/12 mx-auto '>
            <div className='bg-white px-8 py-3 rounded-2xl my-4 lg:my-8'>
                <div className='flex items-center justify-between'>
                    <div className='space-y-2'>
                        <h2 className='font-bold text-sm lg:text-3xl '>{booking.name}</h2>
                        <p className='text-gray-500 font-bold text-xs lg:text-lg'>{booking.education}</p>
                    </div>
                    <p className='text-gray-500 font-bold text-xs lg:text-lg'>Fee: {booking.fee} +Vat</p>
                </div>


                <div className='border border-gray-200 border-dashed'></div>

                <button onClick={() => handleDelete(booking.id)} className='w-full bg-orange-500 text-white font-bold text-xl h-10 border border-orange-600 rounded-3xl hover:bg-orange-600  transition-all cursor-pointer mt-5'>Cancel Appointment</button>
            </div>
        </div>
    );
};

export default Booking;